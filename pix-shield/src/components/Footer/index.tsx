import './styles.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo-PixShield.svg'
function Footer() {

  return (
    <>
      <footer>

        <section className="footerContainer">
          <div className="logoFooter">
            <Link to="/"><img src={logo} alt='Login icone' className='icone'></img></Link>
          </div>
          <div>
            <p>© 2025 Pix Shield. Todos os direitos reservados.</p>
          </div>

        </section>

      </footer>
    </>
  )
}

export default Footer
