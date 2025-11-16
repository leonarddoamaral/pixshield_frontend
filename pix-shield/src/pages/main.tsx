import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import Login from './Login'
import Cadastro from './Cadastro'
import header from './Header'
import Header from './header'
import Home from './Home'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)
