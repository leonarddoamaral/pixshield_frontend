import '../styles/criarUsuario.css'

function CriarUsuario() {

    return (
        <>
            <main className="cadastroContainer">

                <section className="cardCadastro">
                    <h2>Criar Conta</h2>

                    <form className="formCadastro" >
                        <div className="inputCadastro" >
                            <input type="text" required placeholder="Nome Completo" />
                            <input type="email" required placeholder="E-mail" />
                            <input type="password" required placeholder="Senha" />
                            <input type="password" required placeholder="Confirmar senha" />
                        </div>

                        <div className="confirmarCadastro">
                            <div className="aceiteTermos">
                                <input type="checkbox" id="aceite" name="termos" value="aceito" required />
                            </div>
                            <label className="labelAceite" htmlFor="aceite">Concordo com os termos e a política de privacidade</label>
                            <div className="submitCadastro">
                                <button type="submit" className="btnEntrar">Cadastrar</button>
                            </div>
                        </div>
                    </form>
                </section>
            </main>
        </>

    )
}

export default CriarUsuario