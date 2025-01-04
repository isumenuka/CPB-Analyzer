import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ErrorProvider } from './components/ErrorDisplay';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorProvider>
      <App />
    </ErrorProvider>
  </StrictMode>
);