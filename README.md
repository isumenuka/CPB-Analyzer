# Image Prompt Generator

A React application that generates detailed Midjourney prompts from reference images using AI analysis.

## Features

- 🖼️ Upload and analyze reference images for:
  - Poses
  - Clothing
  - Backgrounds
- 🤖 AI-powered image analysis using Google's Gemini Vision API
- ✨ Real-time prompt generation
- 🎨 Beautiful, responsive UI with animations
- ♿ Accessible design with ARIA support
- 🚨 Comprehensive error handling

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

## Project Structure

```
src/
├── components/         # React components
│   ├── ErrorDisplay/  # Error handling components
│   ├── ImageUploader/ # Image upload components
│   └── ...
├── hooks/             # Custom React hooks
├── utils/             # Utility functions
│   ├── gemini/       # Gemini API integration
│   └── prompts/      # Prompt generation
└── types/            # TypeScript type definitions
```

## Key Components

### ImageUploader
Handles image upload and preview functionality. Supports drag-and-drop and file selection.

### ErrorDisplay
Global error handling system with toast notifications. Supports:
- Error messages with codes
- Retry functionality
- Help links
- Animated notifications

### PersonDetails
Collects and validates user input for name and gender details.

## Error Handling

The application uses a centralized error handling system through the `ErrorProvider` context. To use it:

```typescript
import { useError } from './components/ErrorDisplay';

function YourComponent() {
  const { showError } = useError();
  
  // Show an error
  showError({
    message: "Error message",
    code: "ERR_001",
    onRetry: () => { /* retry logic */ }
  });
}
```

## Development

### Code Style

- Uses TypeScript for type safety
- Follows React best practices and hooks
- Implements modular component architecture
- Uses Tailwind CSS for styling

### Testing

Run tests with:
```bash
npm run test
```

### Building

Create a production build:
```bash
npm run build
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.