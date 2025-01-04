import React from 'react';
import { Upload } from 'lucide-react';

interface UploadPlaceholderProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  description: string;
}

export function UploadPlaceholder({ onChange, description }: UploadPlaceholderProps) {
  return (
    <div className="space-y-1 text-center">
      <Upload className="mx-auto h-12 w-12 text-gray-400" />
      <div className="flex text-sm text-gray-600">
        <label className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
          <span>Upload a file</span>
          <input
            type="file"
            className="sr-only"
            accept="image/*"
            onChange={onChange}
          />
        </label>
        <p className="pl-1">or drag and drop</p>
      </div>
      <p className="text-xs text-gray-500">{description}</p>
    </div>
  );
}