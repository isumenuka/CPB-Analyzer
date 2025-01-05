import React, { useState } from 'react';
import { Upload } from 'lucide-react';
import { motion } from '../motion';
import { createImagePreview } from '../../utils/image';
import { useInstantAnalysis } from '../../hooks/useInstantAnalysis';

interface ImageUploaderProps {
  onImageSelect: (file: File | null) => void;
  label: string;
  description: string;
  analysisPrompt: string;
}

export function ImageUploader({ onImageSelect, label, description, analysisPrompt }: ImageUploaderProps) {
  const [preview, setPreview] = useState<string | null>(null);
  const { loading, prompt, analyzeImage } = useInstantAnalysis(analysisPrompt);

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      try {
        const previewUrl = await createImagePreview(file);
        setPreview(previewUrl);
        onImageSelect(file);
        analyzeImage(file);
      } catch (error) {
        console.error('Failed to create preview:', error);
      }
    }
  };

  const handleRemove = () => {
    setPreview(null);
    onImageSelect(null);
  };

  return (
    <div className="w-full">
      <label className="block text-lg font-medium text-gray-700 mb-2">{label}</label>
      <div className="mt-1 relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg -m-0.5 group-hover:opacity-100 opacity-0 transition-opacity duration-300" />
        <div className="relative flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-indigo-500 transition-colors duration-300">
          {preview ? (
            <div className="w-full">
              <img 
                src={preview} 
                alt="Preview" 
                className="max-h-48 mx-auto object-contain mb-4"
              />
              <button 
                onClick={handleRemove}
                className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600"
                aria-label="Remove image"
              >
                ×
              </button>
            </div>
          ) : (
            <div className="space-y-1 text-center">
              <Upload className="mx-auto h-12 w-12 text-gray-400" />
              <div className="flex text-sm text-gray-600">
                <label className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                  <span>Upload a file</span>
                  <input
                    type="file"
                    className="sr-only"
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs text-gray-500">{description}</p>
            </div>
          )}
        </div>
      </div>
      {(prompt || loading) && (
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
      )}
    </div>
  );
}