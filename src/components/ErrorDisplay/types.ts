export interface ErrorDisplayProps {
  message: string;
  code?: string;
  onDismiss?: () => void;
  onRetry?: () => void;
  onHelp?: () => void;
}

export interface ErrorContextType {
  showError: (error: ErrorDisplayProps) => void;
  clearError: () => void;
}