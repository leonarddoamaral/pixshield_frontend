import React, { useState } from "react";
import "./Registro.css";

export default function App() {

  const [nomeCliente, setNomeCliente] = useState("");
  const [idCliente, setIdCliente] = useState("");
  const [tituloDenuncia, setTituloDenuncia] = useState("");
  const [descricaoDenuncia, setDescricaoDenuncia] = useState("");


  const criarDenuncia = () => {
    alert(`Denúncia de ${nomeCliente} criada!`);
  };

  const enviarDenuncia = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Denúncia enviada!");
    setNomeCliente("");
    setIdCliente("");
    setTituloDenuncia("");
    setDescricaoDenuncia("");
  };

  return (
    <div className="container">
      <h1>Nova Denúncia</h1>

      <form onSubmit={enviarDenuncia}>
   
        <div className="form-box">
          <div className="input-group">
            <label>NomeCliente</label>
            <input
              type="text"
              value={nomeCliente}
              onChange={(e) => setNomeCliente(e.target.value)}
              placeholder="Digite o nome do cliente"
              required
            />
          </div>

          <div className="input-group">
            <label>ID Cliente</label>
            <input
              type="text"
              value={idCliente}
              onChange={(e) => setIdCliente(e.target.value)}
              placeholder="Digite o ID do cliente"
              required
            />
          </div>
        </div>


        <div className="form-group">
          <label>Título da Denúncia</label>
          <input
            type="text"
            value={tituloDenuncia}
            onChange={(e) => setTituloDenuncia(e.target.value)}
            placeholder="Digite o título da denúncia"
            required
          />
        </div>

    
        <div className="form-group">
          <label>Descrição da Denúncia</label>
          <textarea
            value={descricaoDenuncia}
            onChange={(e) => setDescricaoDenuncia(e.target.value)}
            placeholder="Descreva a denúncia"
            rows={6}
            required
          />
        </div>

        <div className="button-group">
          <button type="button" className="outline" onClick={criarDenuncia}>
            Criar
          </button>
        
        </div>
      </form>
    </div>
  );
}
