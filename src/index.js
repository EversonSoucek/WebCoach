import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from './Router';
import './styles/estilosGlobais.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);