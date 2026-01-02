import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import './index.css'
import App from './App.tsx'
import Color_theme from "./theme.ts"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider  theme={Color_theme}>
    <ColorModeScript initialColorMode={Color_theme.config.initialColorMode}></ColorModeScript>

    <App />
    </ChakraProvider>
  </StrictMode>,
)
