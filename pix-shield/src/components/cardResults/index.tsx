import type { Denuncia } from "../../types";

type Props = {
  data: Denuncia;
};

export default function CardDenuncia({ data }: Props) {
  return (
    <div className="card">
      <h3>{data.conteudo_denuncia}</h3>

      <p><strong>Chave Pix:</strong> {data.valor_chave}</p>

      <p><strong>Descrição:</strong> {data.descricao_denuncia}</p>

      <p><strong>Usuário:</strong> {data.nome_usuario}</p>

      <p><strong>Data:</strong>  
        {new Date(data.data_denuncia).toLocaleDateString("pt-BR")}
      </p>
    </div>
  );
}