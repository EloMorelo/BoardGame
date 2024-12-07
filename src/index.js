import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot
import App from './App';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(<App />);