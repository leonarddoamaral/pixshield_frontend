import './minhasDenuncias.css'

function MinhasDenuncias(prop: { titulo: string; id: number; desc: string; chave: string; data: Date }) {

    return (
        <>
            <div className="MinhaDenuncias">
                <div className='encima'>
                    <h2>{prop.titulo}</h2>
                    <h2>{prop.chave}</h2>
                </div>
                <div className='baixo'>
                    <p>{prop.desc}</p>
                    <div className='lado'>
                        <p>ID Denúncia: {prop.id}</p>
                        <p><strong>Data: </strong>
                            {new Date(prop.data).toLocaleDateString("pt-BR")}
                        </p>
                    </div>

                </div>

            </div>
        </>
    )
}

export default MinhasDenuncias