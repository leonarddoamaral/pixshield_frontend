import type { Denuncia } from "../../types"
import './styles.css'

type Props = {
  data: Denuncia;
};

function CardResults({ data }: Props) {
  return (
    <>
      <section className="cardResults">
        <div className="titleCardResult">
          <h3>{data.conteudo_denuncia}</h3>
        </div>
        <div className="bodyCardResult">
          <p>Chave Pix: {data.valor_chave}</p>

          <p>Descrição: {data.descricao_denuncia}</p>

          <p>Usuário: {data.nome_usuario}</p>

          <p>Data:{new Date(data.data_denuncia).toLocaleDateString("pt-BR")}</p>
        </div>

      </section>
    </>

  );
}

export default CardResults