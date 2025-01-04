import React from 'react';
import { motion } from './motion';

interface ImagePromptProps {
  prompt: string;
  loading: boolean;
}

export function ImagePrompt({ prompt, loading }: ImagePromptProps) {
  if (!prompt && !loading) return null;

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      className="mt-2"
    >
      <div className="bg-gray-50 rounded-md p-3 text-sm">
        {loading ? (
          <div className="flex items-center text-gray-500">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-500 mr-2" />
            Analyzing image...
          </div>
        ) : (
          <p className="text-gray-700 font-mono">{prompt}</p>
        )}
      </div>
    </motion.div>
  );
}