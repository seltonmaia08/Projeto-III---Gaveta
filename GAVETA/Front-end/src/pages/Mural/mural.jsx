import { useState } from 'react'
import Polaroide from '../../components/polaroide/Polaroide'
import './mural.css'
import Dados from '../../services/dados.json'
import MemoriasDao from '../../services/firebase/dao/MemoriaDao'

const Mural = () => {
    const [exibirDados, setExibirDados] = useState(Dados)

    console.log(MemoriasDao)
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