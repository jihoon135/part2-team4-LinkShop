import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './styles/index.scss';
import App from './App.jsx';
import { ShopProvider } from './contexts/ShopContext.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ShopProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </ShopProvider>
  </BrowserRouter>,
);
