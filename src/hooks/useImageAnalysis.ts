import { useState } from 'react';
import { analyzeImage } from '../utils/gemini/analysis';
import { generateMidjourneyPrompt } from '../utils/promptGenerator';
import { ERROR_MESSAGES } from '../utils/errorMessages';
import { ANALYSIS_PROMPTS } from '../utils/prompts/analysisPrompts';

export function useImageAnalysis() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [finalPrompt, setFinalPrompt] = useState('');

  const analyzeImages = async (
    poseImage: File | null,
    backgroundImage: File | null,
    clothingImage: File | null
  ) => {
    try {
      setLoading(true);
      setError('');
      
      const results = {
        pose: '',
        background: '',
        clothing: ''
      };

      if (poseImage) {
        results.pose = await analyzeImage(poseImage, ANALYSIS_PROMPTS.POSE);
      }

      if (backgroundImage) {
        results.background = await analyzeImage(backgroundImage, ANALYSIS_PROMPTS.BACKGROUND);
      }

      if (clothingImage) {
        results.clothing = await analyzeImage(clothingImage, ANALYSIS_PROMPTS.CLOTHING);
      }

      const prompt = generateMidjourneyPrompt(results);
      setFinalPrompt(prompt);
    } catch (err) {
      console.error('Analysis Error:', err);
      setError(err instanceof Error ? err.message : ERROR_MESSAGES.GENERAL);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    finalPrompt,
    analyzeImages
  };
}