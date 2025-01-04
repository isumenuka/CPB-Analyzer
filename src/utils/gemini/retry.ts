import { ANALYSIS_CONFIG } from './config';

export async function withRetry<T>(
  operation: () => Promise<T>,
  retries = ANALYSIS_CONFIG.MAX_RETRIES
): Promise<T> {
  try {
    return await operation();
  } catch (error) {
    if (retries > 0) {
      await new Promise(resolve => setTimeout(resolve, ANALYSIS_CONFIG.RETRY_DELAY));
      return withRetry(operation, retries - 1);
    }
    throw error;
  }
}