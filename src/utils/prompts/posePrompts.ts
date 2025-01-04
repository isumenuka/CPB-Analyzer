export const POSE_ANALYSIS = {
  PROMPT: `Analyze and describe the pose in detail, focusing on:
- Body position and stance
- Arm and hand placement
- Head position and gaze direction
- Overall posture and weight distribution
- Dynamic movement or stillness
- Emotional expression through body language

Provide a concise, specific description without any clothing or background details.
Format as a clear, descriptive phrase suitable for a Midjourney prompt.`,
  
  DEFAULT: "standing in a natural, relaxed pose"
} as const;