interface PromptParts {
  pose?: string;
  background?: string;
  clothing?: string;
}

export function generateMidjourneyPrompt(parts: PromptParts): string {
  const { pose, background, clothing } = parts;
  
  const components = [];
  if (pose) components.push(`a person ${pose}`);
  if (clothing) components.push(`wearing ${clothing}`);
  if (background) components.push(`in a setting with ${background}`);
  
  return `${components.join(', ')} --ar 16:9 --style raw --v 5.2`;
}