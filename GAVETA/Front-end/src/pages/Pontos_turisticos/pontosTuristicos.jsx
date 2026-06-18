import { useNavigate } from 'react-router-dom'
import Search from '../../components/Campo_Busca/Search'
import Polaroide from '../../components/polaroide/Polaroide'
import './pontosTuristicos.css'
//import Dados from '../../services/dados.json'
import { GetPontos } from '../../services/api'
import { useState, useEffect } from 'react'

const PontoTuristico = () => {

    const [exibirDados, setExibirDados] = useState([]) //useState(Dados) anteriormente mockados
    const [buscarConteudo, setBuscarConteudo] = useState([])
    const navigate = useNavigate()

    useEffect(

        () => {

            async function Carregar() {

                const apiPontos = await GetPontos();
                setExibirDados(apiPontos);
            }

            Carregar();
        }, []
    )

    const handleCardClick = (ponto) => {
        // CORRIGIDO: Agora aponta exatamente para '/ponto-turistico-especifico/'
        navigate(`/ponto-turistico-especifico/${ponto.id}`, { state: { ponto } })
    }

    return (
        <div className='ponto-turistico'>

            <div className='campo-busca'>
                {
                    exibirDados.length > 0
                        ? <div className='varal'></div>
                        : <></>
                }

                <Search
                    setBuscarConteudo={setExibirDados}
                    buscaConteudo={buscarConteudo}
                />
            </div>

            <div className='content-ponto-turistico'>
                {
                    exibirDados.length === 0 ?
                        <div className='messageItemNotFound'>
                            <p>Ops... Nenhuma memória foi encontrada.</p>
                            <p>Por favor tente outras palavras!</p>
                        </div>
                        :
                        exibirDados.map((memoria) => (
                            <div 
                                key={memoria.id} 
                                onClick={() => handleCardClick(memoria)}
                            >
                                <Polaroide
                                    id={memoria.id}
                                    titulo={memoria.titulo}
                                    imagem={memoria.imagem}
                                    rotation={false}
                                />
                            </div>
                        ))
                }
            </div>
        </div>
    )
}

export default PontoTuristico