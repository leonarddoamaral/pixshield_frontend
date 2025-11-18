import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import Cadastro from './Cadastro'
import Login from './Login'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Cadastro />
  </StrictMode>,
)
