# API Documentation

## Google Gemini Vision API

### Configuration

```typescript
const GEMINI_CONFIG = {
  API_KEY: process.env.GEMINI_API_KEY,
  MODEL_NAME: 'gemini-1.5-flash',
  GENERATION_CONFIG: {
    maxOutputTokens: 2048,
    temperature: 0.4,
    topK: 32,
    topP: 1
  }
}
```

### Image Analysis Endpoints

#### analyzeImage(file: File, prompt: string)

Analyzes an image using the Gemini Vision API.

**Parameters:**
- `file`: Image file to analyze
- `prompt`: Analysis prompt template

**Returns:**
- Promise<string>: Analysis result

**Error Codes:**
- `GEMINI_API`: API call failed
- `FILE_PROCESSING`: Image processing failed
- `NO_RESPONSE`: No response from API
- `INVALID_FILE_TYPE`: Invalid image format
- `MODEL_INIT`: Model initialization failed

### Error Handling

The API includes built-in retry logic:
- Maximum 3 retries
- 1-second delay between retries
- 30-second timeout