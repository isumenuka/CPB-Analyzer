import { useState } from 'react';
import { analyzeImage } from '../utils/gemini/analysis';

export function useInstantAnalysis(analysisPrompt: string) {
  const [loading, setLoading] = useState(false);
  const [prompt, setPrompt] = useState('');

  const analyze = async (file: File) => {
    try {
      setLoading(true);
      const result = await analyzeImage(file, analysisPrompt);
      setPrompt(result.replace(/[.,!?;:'"]/g, '').replace(/\s+/g, ' ').trim());
    } catch (error) {
      console.error('Analysis Error:', error);
      setPrompt('');
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    prompt,
    analyzeImage: analyze
  };
}