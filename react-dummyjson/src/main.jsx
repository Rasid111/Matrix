import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { LangProvider } from './context/LangContext.jsx'
import { ColorModeProvider } from './context/ColorModeContext.jsx'
import { CurrencyProvider } from './context/CurrencyContext.jsx'
import { CartProvider } from 'react-use-cart'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <LangProvider>
        <ColorModeProvider>
          <CurrencyProvider>
            <App />
          </CurrencyProvider>
        </ColorModeProvider>
      </LangProvider>
    </CartProvider>
  </StrictMode>,
)
