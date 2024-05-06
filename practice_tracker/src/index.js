import React from 'react';
import { createRoot } from 'react-dom/client'; // Use createRoot
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GoogleOAuthProvider } from '@react-oauth/google';

// Get the root DOM element where your React app will be mounted
const rootElement = document.getElementById('root');

// Create a React root instance
const root = createRoot(rootElement); // Initialize the React root

// Render your application with the updated React 18 approach
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <App /> {/* Your main App component */}
    </GoogleOAuthProvider>
  </React.StrictMode>
);

// Performance measurement (optional)
reportWebVitals();
