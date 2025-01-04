import { PromptParts } from './types';

export function formatPromptParts(parts: PromptParts): string {
  const {
    name,
    gender,
    clothing = '',
    pose = '',
    background = ''
  } = parts;

  // Direct format without the word "person"
  return `${name} is a ${gender} ${clothing} ${pose} ${background}`.trim();