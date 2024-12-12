import React from 'react';
import ReactDOM from 'react-dom/client'; 
import '../src/styles/App.scss';
import App from './components/App.tsx'; 

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement); 
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
