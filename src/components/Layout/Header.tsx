import React from 'react';
import { Sparkles } from 'lucide-react';
import { motion } from '../motion';

export function Header() {
  return (
    <div className="text-center mb-8 sm:mb-12">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-center mb-4"
      >
        <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 text-indigo-600 mr-2" />
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Image Prompt Generator
        </h1>
      </motion.div>
      <p className="text-base sm:text-lg text-gray-600">
        Transform your images into detailed Midjourney prompts
      </p>
    </div>
  );
}