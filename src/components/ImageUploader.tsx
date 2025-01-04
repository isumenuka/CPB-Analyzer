import React, { useState } from 'react';
import { ImagePreview } from './ImagePreview';
import { UploadPlaceholder } from './UploadPlaceholder';
import { ImagePrompt } from './ImagePrompt';
import { createImagePreview } from '../utils/image';
import { useInstantAnalysis } from '../hooks/useInstantAnalysis';
import { motion } from './motion';

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
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="w-full"
    >
      <label className="block text-lg font-medium text-gray-700 mb-2">{label}</label>
      <div className="mt-1 relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg -m-0.5 group-hover:opacity-100 opacity-0 transition-opacity duration-300" />
        <div className="relative flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-indigo-500 transition-colors duration-300">
          {preview ? (
            <ImagePreview src={preview} onRemove={handleRemove} />
          ) : (
            <UploadPlaceholder onChange={handleFileChange} description={description} />
          )}
        </div>
      </div>
      <ImagePrompt prompt={prompt} loading={loading} />
    </motion.div>
  );
}