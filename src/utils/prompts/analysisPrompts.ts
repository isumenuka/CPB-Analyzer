import { POSE_ANALYSIS } from './posePrompts';
import { CLOTHING_ANALYSIS } from './clothingPrompts';
import { BACKGROUND_ANALYSIS } from './backgroundPrompts';

export const ANALYSIS_PROMPTS = {
  POSE: POSE_ANALYSIS.PROMPT,
  CLOTHING: CLOTHING_ANALYSIS.PROMPT,
  BACKGROUND: BACKGROUND_ANALYSIS.PROMPT
} as const;

export const DEFAULT_PROMPTS = {
  POSE: 'in a natural pose',
  CLOTHING: 'wearing casual attire',
  BACKGROUND: 'in a neutral setting'
} as const;