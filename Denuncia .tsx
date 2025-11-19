import "./Denuncia.css";

export default function Sucesso() {
  
  const protocolo: string = ".....";

  
  function copiarProtocolo() {
    navigator.clipboard.writeText(protocolo);
    alert("Protocolo copiado!");
  }

  return (
    <div className="success-container">
      
  
      <div className="check-icon">✓</div>

      <h1>Denúncia Registrada com Sucesso!</h1>

      <p className="descricao">
        Sua denúncia foi recebida e será analisada pela equipe.
      </p>


      <div className="box-protocolo">
        <h3>Número do Protocolo</h3>

        <h2 className="protocolo">{protocolo}</h2>

        <p className="importante">
          <strong>Importante:</strong> Guarde este número para acompanhar sua denúncia.
        </p>

        <button className="copiar-btn" onClick={copiarProtocolo}>
          Copiar Protocolo
        </button>
      </div>
    </div>
  );
}
