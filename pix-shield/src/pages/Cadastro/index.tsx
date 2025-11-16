import './styles.css'

function Cadastro() {

    return (
        <>
            <main className="cadastroContainer">

                <section className="cardCadastro">
                    <div className="infoCard">
                        <h2>Criar Conta</h2>
                        <p>Preencha os dados para se cadastrar</p>
                    </div>

                    <form className="formCadastro" >
                        <div className="inputCadastro" >
                            <input type="text" required placeholder="Nome Completo" />
                            <input type="email" required placeholder="E-mail" />
                            <input type="tel" required placeholder="Telefone" />
                            <input type="password" required placeholder="Senha" />
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

export default Cadastro