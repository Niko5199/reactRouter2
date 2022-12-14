import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Router } from './routes/Index';
import './index.css';
createRoot(document.querySelector('#root')).render(
  <StrictMode>
    <Router />
  </StrictMode>
);
