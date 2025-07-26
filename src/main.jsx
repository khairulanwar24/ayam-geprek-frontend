import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './router'; // <--- ini penting

import 'bootstrap/dist/css/bootstrap.min.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
