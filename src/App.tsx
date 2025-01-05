import React, { useState } from 'react';
import { Header } from './components/Layout/Header';
import { ImageGrid } from './components/ImageUploader/ImageGrid';
import { GenerateButton } from './components/GenerateButton';
import { PromptDisplay } from './components/PromptOutput/PromptDisplay';
import { Footer } from './components/Footer';
import { useImageAnalysis } from './hooks/useImageAnalysis';
import { motion } from './components/motion';

export default function App() {
  const [poseImage, setPoseImage] = useState<File | null>(null);
  const [backgroundImage, setBackgroundImage] = useState<File | null>(null);
  const [clothingImage, setClothingImage] = useState<File | null>(null);
  
  const {
    loading,
    error,
    finalPrompt,
    analyzeImages
  } = useImageAnalysis();

  const handleAnalyze = () => {
    analyzeImages(poseImage, backgroundImage, clothingImage);
  };

  const isFormValid = poseImage || backgroundImage || clothingImage;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-6 sm:py-8 md:py-12 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto"
      >
        <Header />

        <div className="space-y-6 sm:space-y-8 mb-8">
          <ImageGrid
            onPoseSelect={setPoseImage}
            onBackgroundSelect={setBackgroundImage}
            onClothingSelect={setClothingImage}
          />
        </div>

        <GenerateButton
          onClick={handleAnalyze}
          disabled={!isFormValid || loading}
          loading={loading}
        />

        {error && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-center text-sm sm:text-base"
          >
            {error}
          </motion.div>
        )}

        {finalPrompt && <PromptDisplay prompt={finalPrompt} />}
        
        <Footer />
      </motion.div>
    </div>
  );
}