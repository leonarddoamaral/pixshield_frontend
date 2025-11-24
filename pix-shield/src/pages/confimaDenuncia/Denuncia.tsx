import Header from "../../components/Header"
import "./Denuncia.css";
import Footer from "../../components/Footer"
import { Link } from "react-router-dom";


export default function Sucesso() {



  return (
    <>
      <Header />
      <div className="success-container">


        <div className="check-icon">✓</div>

        <h1>Denúncia Registrada com Sucesso!</h1>

        <p className="descricao">
          Sua denúncia foi enviada com Sucesso!!
        </p>


        <div className="box-protocolo">
          <h3>Veja sua denúncia em Meu Perfil</h3>


          <p className="importante">
            <strong>Importante:</strong> sua denúncia se torna visível para qualquer usúario que bucar a mesma chave.
          </p>
          <Link to ='/'>
          <button className="copiar-btn">
            Página Inicial
          </button>
          </Link>
          
        </div>
      </div>
      <Footer/>
    </>
  );
}
