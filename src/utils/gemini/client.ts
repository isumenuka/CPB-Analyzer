import { GoogleGenerativeAI } from '@google/generative-ai';
import { ERROR_MESSAGES } from '../errorMessages';
import { GEMINI_CONFIG } from './config';

const genAI = new GoogleGenerativeAI(GEMINI_CONFIG.API_KEY);

export function getVisionModel() {
  try {
    return genAI.getGenerativeModel({ 
      model: GEMINI_CONFIG.MODEL_NAME,
      generationConfig: GEMINI_CONFIG.GENERATION_CONFIG
    });
  } catch (error) {
    console.error('Failed to initialize Gemini model:', error);
    throw new Error(ERROR_MESSAGES.MODEL_INIT);
  }
}