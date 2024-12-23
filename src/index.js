import React from 'react';
import ReactDOM from 'react-dom/client'; // For React 18 and above
import App from './App'; // Import the App component

// Render the App component inside the root element
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />  {/* Render the App component */}
  </React.StrictMode>
);
