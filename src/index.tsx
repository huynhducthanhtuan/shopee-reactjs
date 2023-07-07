import App from './App';
import React, { StrictMode } from 'react';
import { GlobalStyles } from 'components';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { DataSourceContextProvider } from 'contexts';

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <BrowserRouter>
      <GlobalStyles>
        <DataSourceContextProvider>
          <App />
        </DataSourceContextProvider>
      </GlobalStyles>
    </BrowserRouter>
  </StrictMode>
);
