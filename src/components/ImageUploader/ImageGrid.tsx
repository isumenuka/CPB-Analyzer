import React from 'react';
import { ImageUploader } from './ImageUploader';
import { ANALYSIS_PROMPTS } from '../../utils/prompts/analysisPrompts';

interface ImageGridProps {
  onPoseSelect: (file: File | null) => void;
  onBackgroundSelect: (file: File | null) => void;
  onClothingSelect: (file: File | null) => void;
}

export function ImageGrid({ 
  onPoseSelect, 
  onBackgroundSelect, 
  onClothingSelect 
}: ImageGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <ImageUploader
        onImageSelect={onPoseSelect}
        label="Upload Pose Reference"
        description="Upload an image showing the desired pose"
        analysisPrompt={ANALYSIS_PROMPTS.POSE}
      />

      <ImageUploader
        onImageSelect={onBackgroundSelect}
        label="Upload Background Reference"
        description="Upload an image showing the desired background and lighting"
        analysisPrompt={ANALYSIS_PROMPTS.BACKGROUND}
      />

      <ImageUploader
        onImageSelect={onClothingSelect}
        label="Upload Clothing Reference"
        description="Upload an image showing the desired clothing style"
        analysisPrompt={ANALYSIS_PROMPTS.CLOTHING}
      />
    </div>
  );
}