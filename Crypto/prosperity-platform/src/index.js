import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Imports Tailwind CSS styles
import App from './App';

// Create a root for React 18 (modern approach)
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);