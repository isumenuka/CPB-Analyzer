import React from 'react';
import { Wand2 } from 'lucide-react';
import { motion } from '../motion';

interface GenerateButtonProps {
  onClick: () => void;
  disabled: boolean;
  loading: boolean;
}

export function GenerateButton({ onClick, disabled, loading }: GenerateButtonProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="mt-8"
    >
      <button
        onClick={onClick}
        disabled={disabled}
        className="w-full flex justify-center items-center px-4 sm:px-6 py-3 sm:py-4 border border-transparent text-base sm:text-lg font-medium rounded-lg text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transform transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl"
      >
        {loading ? (
          <div className="flex items-center">
            <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-white mr-2 sm:mr-3" />
            Analyzing...
          </div>
        ) : (
          <>
            <Wand2 className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            Generate Prompt
          </>
        )}
      </button>
    </motion.div>
  );
}