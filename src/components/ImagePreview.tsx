import React from 'react';

interface ImagePreviewProps {
  src: string;
  onRemove: () => void;
}

export function ImagePreview({ src, onRemove }: ImagePreviewProps) {
  return (
    <div className="w-full">
      <img 
        src={src} 
        alt="Preview" 
        className="max-h-48 mx-auto object-contain mb-4"
      />
      <button 
        onClick={onRemove}
        className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600"
        aria-label="Remove image"
      >
        ×
      </button>
    </div>
  );
}