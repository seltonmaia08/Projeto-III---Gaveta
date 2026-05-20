import './visualizarMemoria.css'

import { useParams } from 'react-router-dom'
import { memorias } from './memorias'

import Voltar from '../../components/Botões/Voltar'
import Denunciar from '../../components/Botões/Denunciar'
import Compartilhar from '../../components/Botões/Compartilhar'

function VisualizarMemoria() {

    const { id } = useParams()

    const memoriaSelecionada = memorias.find(
        (memoria) => memoria.id === Number(id)
    )

    if (!memoriaSelecionada) {
        return <h1>Memória não encontrada</h1>
    }

    return (
        <div className="container-visu-memoria">
            <Voltar />
            <div className='visu-memoria'>
                <img className='img'
                    src={memoriaSelecionada.image}
                    alt={memoriaSelecionada.title}
                />

                <h1 className='title'>{memoriaSelecionada.title}</h1>
            
                <div className="tags">
                    {
                        memoriaSelecionada.tags.map((tag) =>
                            <p key={tag}>{tag}</p>
                        )
                    }
                </div>

                <p className='text'>{memoriaSelecionada.text}</p>
            </div>

            <div className='denu-comp'>
                <Denunciar />
                <Compartilhar />
            </div>

        </div>
    )
}

export default VisualizarMemoria