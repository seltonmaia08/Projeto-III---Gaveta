import { useState } from 'react'
import Polaroide from '../../components/polaroide/Polaroide'
import './mural.css'
import Dados from '../../services/dados.json'

const Mural = () => {
    const [exibirDados, setExibirDados] = useState(Dados)

    return (
        <div className="mural">
            
            {
                exibirDados.map((memoria) => 
                    <Polaroide 
                    key={memoria.id}
                    title={memoria.titulo}
                    imagem={memoria.imagem}
                    rotation={true}/>
                )
            }

        </div>
    )
}

export default Mural