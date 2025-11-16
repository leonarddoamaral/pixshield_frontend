import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import Login from './Login'
import Cadastro from './Cadastro'
import PerfilUser from './perfil'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PerfilUser />
  </StrictMode>,
)
