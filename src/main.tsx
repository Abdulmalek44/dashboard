import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { ContextProvider } from './Context/ContextProvider.tsx'
import { registerLicense } from '@syncfusion/ej2-base';

registerLicense(import.meta.env.VITE_VALIDATION);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ContextProvider>
  </React.StrictMode>,
)
