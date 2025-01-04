import React, { createContext, useContext, useState, useCallback } from 'react';
import { ErrorAlert } from './ErrorAlert';
import { ErrorContextType, ErrorDisplayProps } from './types';

const ErrorContext = createContext<ErrorContextType | null>(null);

export function ErrorProvider({ children }: { children: React.ReactNode }) {
  const [error, setError] = useState<ErrorDisplayProps | null>(null);

  const showError = useCallback((newError: ErrorDisplayProps) => {
    setError(newError);
  }, []);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  return (
    <ErrorContext.Provider value={{ showError, clearError }}>
      {children}
      {error && (
        <ErrorAlert
          {...error}
          onDismiss={() => setError(null)}
        />
      )}
    </ErrorContext.Provider>
  );
}

export function useError() {
  const context = useContext(ErrorContext);
  if (!context) {
    throw new Error('useError must be used within an ErrorProvider');
  }
  return context;
}