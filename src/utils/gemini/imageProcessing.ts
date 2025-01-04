import { ERROR_MESSAGES } from '../errorMessages';

export async function processImageFile(file: File): Promise<{
  inlineData: { data: string; mimeType: string };
}> {
  validateImageFile(file);
  const base64Data = await convertToBase64(file);
  
  return {
    inlineData: {
      data: base64Data,
      mimeType: file.type
    }
  };
}

function validateImageFile(file: File) {
  if (!file.type.startsWith('image/')) {
    throw new Error(ERROR_MESSAGES.INVALID_FILE_TYPE);
  }
}

async function convertToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    
    reader.onloadend = () => {
      const base64Data = reader.result?.toString().split(',')[1];
      if (base64Data) {
        resolve(base64Data);
      } else {
        reject(new Error(ERROR_MESSAGES.FILE_PROCESSING));
      }
    };
    
    reader.onerror = () => reject(new Error(ERROR_MESSAGES.FILE_PROCESSING));
    reader.readAsDataURL(file);
  });
}