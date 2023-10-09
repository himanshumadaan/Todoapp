import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './css/style.css';
import 'bootstrap/dist/css/bootstrap.css'

import { BrowserRouter } from 'react-router-dom';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </StrictMode>
);

