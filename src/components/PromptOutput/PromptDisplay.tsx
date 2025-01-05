import React from 'react';
import { motion } from '../motion';
import { useCopyToClipboard } from '../../hooks/useCopyToClipboard';

interface PromptDisplayProps {
  prompt: string;
}

export function PromptDisplay({ prompt }: PromptDisplayProps) {
  const { copyToClipboard, isCopied } = useCopyToClipboard();

  if (!prompt) return null;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-8"
    >
      <div className="bg-white rounded-lg shadow-xl p-4 sm:p-6 border border-gray-100">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">
          Generated Prompt:
        </h2>
        <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
          <p className="text-gray-700 whitespace-pre-wrap font-mono text-xs sm:text-sm">
            {prompt}
          </p>
        </div>
        <button
          onClick={() => copyToClipboard(prompt)}
          className="mt-4 px-3 sm:px-4 py-2 border border-gray-300 rounded-md text-xs sm:text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-300"
        >
          {isCopied ? 'Copied!' : 'Copy to Clipboard'}
        </button>
      </div>
    </motion.div>
  );
}