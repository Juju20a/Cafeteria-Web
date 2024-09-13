import React from 'react';
import ReactDOM from 'react-dom';
import Router from './routes';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza o aplicativo
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);

