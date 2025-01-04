import React from 'react';
import { AlertCircle, X, RefreshCw, HelpCircle } from 'lucide-react';
import { motion } from '../motion';
import { ErrorDisplayProps } from './types';

export function ErrorAlert({ 
  message, 
  code,
  onDismiss,
  onRetry,
  onHelp 
}: ErrorDisplayProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="fixed top-4 right-4 max-w-md w-full bg-white rounded-lg shadow-lg border-l-4 border-red-500 p-4"
      role="alert"
      aria-live="assertive"
    >
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <AlertCircle className="h-5 w-5 text-red-500" aria-hidden="true" />
        </div>
        <div className="ml-3 flex-1">
          <h3 className="text-sm font-medium text-gray-900">
            Error {code && <span className="text-gray-500">#{code}</span>}
          </h3>
          <div className="mt-1">
            <p className="text-sm text-gray-600">{message}</p>
          </div>
          <div className="mt-3 flex space-x-2">
            {onRetry && (
              <button
                type="button"
                onClick={onRetry}
                className="inline-flex items-center text-sm font-medium text-red-600 hover:text-red-500"
              >
                <RefreshCw className="h-4 w-4 mr-1" />
                Retry
              </button>
            )}
            {onHelp && (
              <button
                type="button"
                onClick={onHelp}
                className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-gray-500"
              >
                <HelpCircle className="h-4 w-4 mr-1" />
                Get Help
              </button>
            )}
          </div>
        </div>
        <div className="ml-4 flex-shrink-0 flex">
          <button
            className="inline-flex text-gray-400 hover:text-gray-500"
            onClick={onDismiss}
            aria-label="Dismiss error"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}