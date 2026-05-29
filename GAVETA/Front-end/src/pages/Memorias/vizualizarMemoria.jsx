import './visualizarMemoria.css'

import { useParams } from 'react-router-dom'
import Voltar from '../../components/Botões/Voltar'
import Denunciar from '../../components/Botões/Denunciar'
import Compartilhar from '../../components/Botões/Compartilhar'
import Dados from '../../services/dados.json'

function VisualizarMemoria() {

    
    const { id } = useParams()
    
    console.log(Dados, id)

    const memoriaSelecionada = Dados.find(
        (memoria) => memoria.id === Number(id)
    )

    if (!memoriaSelecionada) {
        return <h1>Memória não encontrada</h1>
    }

    return (
        <div className="container-visu-memoria">

            <Voltar />

            <div className='visu-memoria'>

                <img
                    className='img'
                    src={memoriaSelecionada.imagem}
                    alt={memoriaSelecionada.titulo}
                />

                <div className='conteudo-memoria'>

                    <h1 className='title'>
                        {memoriaSelecionada.titulo}
                    </h1>

                    <div className="tags">
                        {
                            memoriaSelecionada.tags.map((tag) =>
                                <p key={tag}>{tag}</p>
                            )
                        }
                    </div>

                    <p className='text'>
                        {memoriaSelecionada.descricao}
                    </p>

                    <div className='denu-comp'>
                        <Denunciar />
                        <Compartilhar />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default VisualizarMemoria