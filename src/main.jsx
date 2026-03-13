import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import  "./styles/global.css";
import  "./styles/variable.css";

createRoot(document.getElementById('root')).render(
    // StrictMode -  помогает находить потенциальные проблемы в время разработки.
  <StrictMode> 
    <App />
  </StrictMode>,
)
