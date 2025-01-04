export const ERROR_MESSAGES = {
  GEMINI_API: 'Failed to analyze image. Please try again or use a different image.',
  FILE_PROCESSING: 'Failed to process image file. Please try a different image.',
  NO_RESPONSE: 'Could not generate analysis. Please try again.',
  INVALID_FILE_TYPE: 'Please upload a valid image file (JPG, PNG, or WebP).',
  MODEL_INIT: 'Failed to initialize the image analysis model. Please refresh the page.',
  GENERAL: 'An unexpected error occurred. Please try again.',
  REQUIRED_FIELDS: 'Please fill in all required fields before generating the prompt.'
} as const;