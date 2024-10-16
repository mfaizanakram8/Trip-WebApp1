import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import AppRouter from './Navigation/Routes/AppRoutes.jsx';
import { HashRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <AppRouter />
    </HashRouter>
  </StrictMode>,
);
