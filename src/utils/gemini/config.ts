export const GEMINI_CONFIG = {
  API_KEY: 'AIzaSyC_eWaEBXhkTxykQrF7pasV4R-z-zR-uU0',
  MODEL_NAME: 'gemini-1.5-flash',
  GENERATION_CONFIG: {
    maxOutputTokens: 2048,
    temperature: 0.4,
    topK: 32,
    topP: 1
  }
} as const;

export const ANALYSIS_CONFIG = {
  MAX_RETRIES: 3,
  RETRY_DELAY: 1000, // 1 second
  TIMEOUT: 30000 // 30 seconds
} as const;