import Header from '../header';
import './documentacao.css'



function Documentacao() {
    return (
        <>
            <Header />
            <div className='titulo-doc'>
                <i className="bi bi-files"></i>
                <h1>Documentação e Ajuda</h1>
            </div>
            
            <main className='main-doc'>
                <h2>Sobre o PixShield</h2>
                <p>Pix Shield é uma plataforma online e gratuita que funciona como central de reclamação de chaves pix com suspeitas de fraude. Nela o usuário pode pesquisar chaves pix, registrar denúncias e ter acesso a estatísticas sobre as mesmas.</p>
                <h2>Como Usar a Plataforma</h2>
                <p>Utilize a área de Pesquisa para verificar qualquer chave Pix antes de realizar uma transação.

                    Ação: Digite a chave (e-mail, CPF/CNPJ, telefone ou chave aleatória) no campo de busca.

                    Resultado: O sistema informará se a chave possui denúncias registradas em nosso banco de dados.</p>
                <h2>Fazer uma Denúncia</h2>
                <p>Sua contribuição é vital para a segurança da comunidade.

                    Acesse a área Fazer Denúncia.

                    Preencha todos os campos obrigatórios, incluindo a chave Pix e uma descrição detalhada do ocorrido.Forneça o máximo de informações e provas</p>
                <h2>Acompanhar Denúncia</h2>
                <p>Após registrar uma denúncia, você pode acompanhar o processo de moderação.

                    Acesse a área Acompanhar usando o ID fornecido no momento do registro.

                    Você verá o status da denúncia: Em Análise, Aprovada ou Rejeitada.</p>
                <h2>Sobre a Moderação e Aprovação</h2>
                <p>Toda denúncia é submetida a uma avaliação rigorosa pelo nosso time de administradores antes de ser integrada ao banco de dados.

                    Aprovação: A denúncia será aprovada e a chave Pix será marcada como suspeita se as informações estiverem completas e a denúncia for considerada válida.

                    Rejeição: A denúncia será rejeitada se for identificada como incompleta, falsa ou, conforme nossa política, se o conteúdo for desrespeitoso, ofensivo, ou violar nossos termos de uso.</p>

                <h2>Precisa de Ajuda?</h2>
                <p>Se tiver dúvidas sobre o uso da plataforma ou encontrou um erro, entre em contato com nosso suporte técnico. Sua segurança é nossa prioridade.</p>
            </main>
        </>
    )

}
export default Documentacao;