import React, { useState } from 'react';
import { ImageUploader } from './components/ImageUploader';
import { Footer } from './components/Footer';
import { PersonDetails } from './components/PersonDetails';
import { useImageAnalysis } from './hooks/useImageAnalysis';
import { Wand2, Sparkles } from 'lucide-react';
import { motion } from './components/motion';
import { ANALYSIS_PROMPTS } from './utils/prompts/analysisPrompts';

export default function App() {
  const [poseImage, setPoseImage] = useState<File | null>(null);
  const [backgroundImage, setBackgroundImage] = useState<File | null>(null);
  const [clothingImage, setClothingImage] = useState<File | null>(null);
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  
  const {
    loading,
    error,
    finalPrompt,
    analyzeImages
  } = useImageAnalysis();

  const handleAnalyze = () => {
    if (!name || !gender) {
      return;
    }
    analyzeImages(poseImage, backgroundImage, clothingImage, { name, gender });
  };

  const isFormValid = name.trim() !== '' && gender !== '' && (poseImage || backgroundImage || clothingImage);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-6 sm:py-8 md:py-12 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto"
      >
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 text-indigo-600 mr-2" />
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Image Prompt Generator
            </h1>
          </div>
          <p className="text-base sm:text-lg text-gray-600">
            Transform your images into detailed Midjourney prompts
          </p>
        </div>

        <div className="space-y-6 sm:space-y-8 mb-8 sm:mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ImageUploader
              onImageSelect={setPoseImage}
              label="Upload Pose Reference"
              description="Upload an image showing the desired pose"
              analysisPrompt={ANALYSIS_PROMPTS.POSE}
            />

            <ImageUploader
              onImageSelect={setBackgroundImage}
              label="Upload Background Reference"
              description="Upload an image showing the desired background and lighting"
              analysisPrompt={ANALYSIS_PROMPTS.BACKGROUND}
            />

            <ImageUploader
              onImageSelect={setClothingImage}
              label="Upload Clothing Reference"
              description="Upload an image showing the desired clothing style"
              analysisPrompt={ANALYSIS_PROMPTS.CLOTHING}
            />
          </div>
        </div>

        <PersonDetails
          name={name}
          gender={gender}
          onNameChange={setName}
          onGenderChange={setGender}
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8"
        >
          <button
            onClick={handleAnalyze}
            disabled={loading || !isFormValid}
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

        {error && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-center text-sm sm:text-base"
          >
            {error}
          </motion.div>
        )}

        {finalPrompt && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8"
          >
            <div className="bg-white rounded-lg shadow-xl p-4 sm:p-6 border border-gray-100">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">Generated Prompt:</h2>
              <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                <p className="text-gray-700 whitespace-pre-wrap font-mono text-xs sm:text-sm">{finalPrompt}</p>
              </div>
              <button
                onClick={() => navigator.clipboard.writeText(finalPrompt)}
                className="mt-4 px-3 sm:px-4 py-2 border border-gray-300 rounded-md text-xs sm:text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-300"
              >
                Copy to Clipboard
              </button>
            </div>
          </motion.div>
        )}
        
        <Footer />
      </motion.div>
    </div>
  );
}