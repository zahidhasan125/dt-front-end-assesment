import React from 'react';
import ReactDOM from 'react-dom/client';
import './custom.scss';
import App from './App';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/Routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
