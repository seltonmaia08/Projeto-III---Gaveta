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
    const [carregando, setCarregando] = useState(true);
    const { id } = useParams();

    useEffect(
        () => {

            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }); // levar o scroll para o topo

            async function carregar() { // carregar as memorias

                const apiMemorie = await GetMemoriesByID(id);
                console.log(apiMemorie);
                setMemoriaSelecionada(apiMemorie);
                setCarregando(false);
            }
            carregar();
        }, []
    )

    /*const memoriaSelecionada = Dados.find(
        (memoria) => memoria.id === Number(id)
    )*/

    const formatarData = (data) => {
        if (!data) return ''

        const partes = data.split('-')

        if (partes.length !== 3) return data

        const [ano, mes, dia] = partes

        const meses = [
            "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
            "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
        ];

        const nomeMes = meses[parseInt(mes, 10) - 1]

        return `${dia} de ${nomeMes} de ${ano}`

    }

    if (carregando) {
        return (
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
                <h2 style={{ color: "var(--vermelho-goyabeira)" }}>Carregando a memória...</h2>
            </div>
        );
    }
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
                        {memoriaSelecionada.ponto_memoria} | {memoriaSelecionada.categoriaMemoria} | {formatarData(memoriaSelecionada.dataMemoria)}
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
                        <Denunciar idMemoria={memoriaSelecionada.id} />
                        <Compartilhar />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default VisualizarMemoria