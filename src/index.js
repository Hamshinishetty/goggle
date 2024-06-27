import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { ResultCP } from './contexts/ResultsCP';
import './global.css';

// Create a root
const container = document.getElementById('root');
const root = createRoot(container);

// Render the application
root.render(
  <ResultCP>
    <Router>
      <App />
    </Router>
  </ResultCP>
);
