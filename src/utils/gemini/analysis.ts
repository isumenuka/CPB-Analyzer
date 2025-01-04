import { getVisionModel } from './client';
import { processImageFile } from './imageProcessing';
import { ERROR_MESSAGES } from '../errorMessages';
import { withRetry } from './retry';

export async function analyzeImage(image: File, prompt: string): Promise<string> {
  if (!image) {
    throw new Error(ERROR_MESSAGES.INVALID_FILE_TYPE);
  }

  try {
    const model = getVisionModel();
    const imageData = await processImageFile(image);
    
    const result = await withRetry(async () => {
      const response = await model.generateContent([prompt, imageData]);
      return response;
    });

    const text = result.response.text();
    
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