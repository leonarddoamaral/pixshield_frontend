import { Link } from 'react-router-dom';
import './CardGrande.css'

function CardGrande(prop: { titulo: string; subtitulo: string}) {
    
    return (
        <>
                <div className="cardGrande">
                    <h2>{prop.titulo}</h2>
                    <p>{prop.subtitulo}</p>
                </div>
        </>
    )
}

export default CardGrande