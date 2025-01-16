import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { LangProvider } from './context/LangContext.jsx'
import { ColorModeProvider } from './context/ColorModeContext.jsx'
import { CurrencyProvider } from './context/CurrencyContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LangProvider>
      <ColorModeProvider>
        <CurrencyProvider>
          <App />
        </CurrencyProvider>
      </ColorModeProvider>
    </LangProvider>
  </StrictMode>,
)
