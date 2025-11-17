import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import Login from './Login'
import Cadastro from './Cadastro'
import Home from './Home'
import Documentacao from './Documentacao'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Documentacao />
  </StrictMode>,
)
