import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import Login from './Login'
import Cadastro from './Cadastro'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Login />
  </StrictMode>,
)
