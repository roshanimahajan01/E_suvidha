import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

// Create the root element using createRoot
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

// Use root.render instead of ReactDOM.render
root.render(
  <Router>
    <App />
  </Router>
);
