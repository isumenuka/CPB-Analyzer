# Component Documentation

## ErrorDisplay

### ErrorAlert

Displays error messages in a toast-style notification.

```typescript
interface ErrorDisplayProps {
  message: string;
  code?: string;
  onDismiss?: () => void;
  onRetry?: () => void;
  onHelp?: () => void;
}
```

### ErrorProvider

Provides global error handling context.

```typescript
interface ErrorContextType {
  showError: (error: ErrorDisplayProps) => void;
  clearError: () => void;
}
```

## ImageUploader

Handles image upload with preview and validation.

### Props
```typescript
interface ImageUploaderProps {
  onImageSelect: (file: File | null) => void;
  label: string;
  description: string;
  analysisPrompt: string;
}
```

## PersonDetails

Collects user information for prompt generation.

### Props
```typescript
interface PersonDetailsProps {
  name: string;
  gender: string;
  onNameChange: (value: string) => void;
  onGenderChange: (value: string) => void;
}
```