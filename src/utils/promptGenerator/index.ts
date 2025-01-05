import { PromptParts } from './types';
import { formatPromptParts } from './formatters';

export function generateMidjourneyPrompt(parts: PromptParts): string {
  const components = [];
  
  if (parts.pose) components.push(parts.pose);
  if (parts.clothing) components.push(parts.clothing);
  if (parts.background) components.push(parts.background);
  
  return components.join(', ');
}