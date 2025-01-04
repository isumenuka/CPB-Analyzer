import { PromptParts } from './types';
import { formatPromptParts } from './formatters';
import { ERROR_MESSAGES } from '../errorMessages';

export function generateMidjourneyPrompt(parts: PromptParts): string {
  if (!parts.name || !parts.gender) {
    throw new Error(ERROR_MESSAGES.REQUIRED_FIELDS);
  }

  return formatPromptParts(parts);
}