import { GoogleGenerativeAI } from '@google/generative-ai';
import { ERROR_MESSAGES } from './errorMessages';

const API_KEY = 'AIzaSyC_eWaEBXhkTxykQrF7pasV4R-z-zR-uU0';
const genAI = new GoogleGenerativeAI(API_KEY);

export async function analyzeImage(image: File, prompt: string): Promise<string> {
  try {
    // Use the correct model name
    const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });
    
    const imageData = await fileToGenerativePart(image);
    
    const result = await model.generateContent([prompt, imageData]);
    const response = await result.response;
    const text = response.text();
    
    if (!text) {
      throw new Error(ERROR_MESSAGES.NO_RESPONSE);
    }
    
    return text;
  } catch (error) {
    console.error('Gemini API Error:', error);
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error(ERROR_MESSAGES.GEMINI_API);
  }
}

async function fileToGenerativePart(file: File) {
  try {
    if (!file.type.startsWith('image/')) {
      throw new Error(ERROR_MESSAGES.INVALID_FILE_TYPE);
    }

    const base64EncodedData = await new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result?.toString().split(',')[1];
        if (result) {
          resolve(result);
        } else {
          reject(new Error(ERROR_MESSAGES.FILE_PROCESSING));
        }
      };
      reader.onerror = () => reject(new Error(ERROR_MESSAGES.FILE_PROCESSING));
      reader.readAsDataURL(file);
    });

    return {
      inlineData: { 
        data: base64EncodedData, 
        mimeType: file.type 
      },
    };
  } catch (error) {
    console.error('File Processing Error:', error);
    throw error;
  }
}