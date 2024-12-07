import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';

import ThemeProvider from '../src/components/contextApi/ThemeContext.jsx';
import i18n from './locales/i18n.config.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider i18n={i18n}>
        <I18nextProvider>
          <App />
        </I18nextProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
