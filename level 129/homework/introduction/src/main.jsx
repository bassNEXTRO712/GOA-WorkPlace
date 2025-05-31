import React from 'react';
import { createRoot } from 'react-dom/client';
import Sentence from './App';  // adjust path if needed

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Sentence />
  </React.StrictMode>
);
