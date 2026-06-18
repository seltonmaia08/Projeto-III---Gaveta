import './visualizarMemoria.css'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Voltar from '../../components/Botões/Voltar'
import Denunciar from '../../components/Botões/Denunciar'
import Compartilhar from '../../components/Botões/Compartilhar'
//import Dados from '../../services/dados.json'
import { GetMemoriesByID } from '../../services/api'
import { collection } from 'firebase/firestore'

function VisualizarMemoria() {

    const [memoriaSelecionada, setMemoriaSelecionada] = useState(null);
    const { id } = useParams(); // o que isso faz, Selton?

    useEffect(
        () => {

            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }); // levar o scroll para o topo

            async function carregar() { // carregar as memorias

                const apiMemorie = await GetMemoriesByID(id);
                console.log(apiMemorie);
                setMemoriaSelecionada(apiMemorie);
            }

            carregar();
        },[]
    )

    /*const memoriaSelecionada = Dados.find(
        (memoria) => memoria.id === Number(id)
    )*/

    if (memoriaSelecionada == null) {
        return <h1>Memória não encontrada</h1>
    }

    return (
        <div className="container-visu-memoria">

            <Voltar />

            <div className='visu-memoria'>

                <img
                    className='img'
                    src={memoriaSelecionada.imagensURL}
                    alt={memoriaSelecionada.titulo}
                />

                <div className='conteudo-memoria'>

                    <h1 className='title'>
                        {memoriaSelecionada.titulo}
                    </h1>

                    <p className='infos'> 
                        {memoriaSelecionada.ponto_memoria} | {memoriaSelecionada.categoriaMemoria} | {memoriaSelecionada.dataMemoria}
                    </p>

                    <div className="tags">
                        {
                            memoriaSelecionada.tags.map((tag) =>
                                <p key={tag}>{tag}</p>
                            )
                        }
                    </div>

                    <p className='text'>
                        {memoriaSelecionada.relatoMemoria}
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