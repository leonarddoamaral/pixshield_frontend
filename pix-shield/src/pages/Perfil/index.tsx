import Header from '../header'
import './styles.css'
import CardResults from './../../components/cardResults'
import { useEffect, useState, type FormEvent } from 'react'
import { UserAPI } from '../../api/users';
import type { User, Denuncia } from '../../types';
import { DenunciaAPI } from '../../api/denuncia';
import Alerta from '../alert/alert'





function PerfilUser() {
    const [senhaVisivel, setSenhaVisivel] = useState(false);
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [idUsuario, setIdUsuario] = useState<number>(0);
    const [senha, setSenha] = useState('');

    const [denuncias, setDenuncias] = useState<Denuncia[]>([]);
    const [loading, setLoading] = useState(true);
    const [editMode, setEditMode] = useState(false);
    const [erro, setErro] = useState<string | null>(null);
    const [sucesso, setSucesso] = useState(false);
    const USUARIO_ID_LOGADO = 8

    
   

    const toggleSenha = () => {
        setSenhaVisivel(!senhaVisivel);
    }

    const toggleEditMode = () => {
        setEditMode(!editMode);
    }

    const handleSave = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            await UserAPI.update(idUsuario, {
                nome_usuario: nome,
                email_usuario: email,
                telefone_usuario: telefone,
                senha_usuario: senha,
            });
            setSucesso(true);
            setEditMode(false);
        } catch (error) {
            setErro(`Erro ao cadastrar`);
        } finally {
            setLoading(false);

        }
    }

    useEffect(() => {
        async function loadUserData() {
            setLoading(true);
            try {
                // 1. Carregar dados do usuário
                const userData: User = await UserAPI.get(USUARIO_ID_LOGADO);
                setIdUsuario(userData.id_usuario);
                setNome(userData.nome_usuario);
                setEmail(userData.email_usuario);
                setTelefone(userData.telefone_usuario);
                setSenha(userData.senha_usuario)

                const userDenuncias: Denuncia[] = await DenunciaAPI.getDenunciasByUserId(USUARIO_ID_LOGADO);
                setDenuncias(userDenuncias);

            } catch (error) {
                console.error("Erro ao carregar dados do usuário:", error);
            } finally {
                setLoading(false);
            }
        }
        loadUserData();
    }, []);

    const inputType = senhaVisivel ? "text" : "password";
    const iconClass = senhaVisivel ? "bi bi-eye-slash" : "bi bi-eye";

    if (loading) {
        return <p>Carregando perfil...</p>;
    }

    return (
        <>
            <Header />
            {editMode && <Alerta severity='info' messageAlert='Agora é permitido alterar os dados' />}
            {sucesso && <Alerta severity='success' messageAlert='Alteração realizada com sucesso!' />}
            {erro && <Alerta severity='error' messageAlert={erro} />}
            <div className='containerPerfil'>

                <aside className="infoGerais" aria-label="Informações do perfil">
                    <section className="perfil">
                        <figure className="avatarPerfil">
                            <img
                                src="./../src/assets/perfil.svg"
                                alt="Foto de perfil"
                                className="avatar-image"
                            />
                        </figure>

                        <div className="infoPerfil">
                            <h2 className="profile-name">{nome}</h2>
                            <p className="profile-email">{email}</p>
                            <p className="profile-email">ID do usuário: {idUsuario}</p>
                        </div>

                    </section>
                </aside>

                <main className="infoPessoal">
                    <h2>Informações Pessoais</h2>
                    <form onSubmit={handleSave}>
                        <div className="areaNome">
                            <label>Nome Completo</label>
                            <input
                                type="text"
                                placeholder="Digite seu nome completo"
                                disabled={!editMode}
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                            />
                        </div>
                        <div className="areaEmail">
                            <label>E-mail</label>
                            <input
                                type="email"
                                placeholder="Digite seu e-mail"
                                disabled={!editMode}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="areaTelefone">
                            <label>Telefone</label>
                            <input
                                type="tel"
                                placeholder="Digite seu telefone"
                                disabled={!editMode}
                                value={telefone}
                                onChange={(e) => setTelefone(e.target.value)}
                            />
                        </div>
                        <label>Senha</label>
                        <div className="areaSenha">
                            <input
                                type={inputType}
                                required
                                placeholder="Insira sua senha"
                                className='inputs'
                                disabled={!editMode}
                                value={senha}
                            />
                            <i className={iconClass} onClick={toggleSenha}></i>
                        </div>
                        <div className="botoes">

                            <button
                                type="submit"
                                className="btnSalvar"
                                disabled={loading}
                            >
                                {loading ? 'Salvando...' : 'Salvar Alterações'}
                            </button>

                            <button
                                type="button"
                                className="btnAlterar"
                                onClick={toggleEditMode}
                            >
                                Alterar
                            </button>

                        </div>
                    </form>
                    <div className='denuncias'>

                        <h3 className='minha'>Minhas Denúncias Recentes</h3>
                        <div className='cards-denuncias'>
                            {denuncias.length > 0 ? (
                                denuncias.map((denuncia) => (

                                    <CardResults
                                        key={denuncia.id_denuncia}
                                        data={denuncia}
                                    />
                                ))
                            ) : (
                                <p>Você ainda não enviou denúncias.</p>
                            )}
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

export default PerfilUser