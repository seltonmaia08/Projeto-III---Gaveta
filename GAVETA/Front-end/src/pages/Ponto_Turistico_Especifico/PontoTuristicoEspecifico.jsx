import { useNavigate, useParams } from 'react-router-dom'

import './PontoTuristicoEspecifico.css'

import { FaArrowLeft, FaShareAlt } from 'react-icons/fa'
import Dados from '../../services/dados.json'
const PontoTuristicoEspecifico = () => {

    const navigate = useNavigate()
    const { id } = useParams()

    const PontoTuristicoEspecifico = Dados.find(
        (memoria) => memoria.id === Number(id)
    )

    return (
        <div className='ponto-especifico'>

            {/* TOPO */}
            <div className='topo-ponto'>

                <button
                    className='btn-voltar'
                    onClick={() => navigate(-1)}
                >
                    <FaArrowLeft />
                </button>

                <h1>{ PontoTuristicoEspecifico.titulo }</h1>

            </div>

            {/* CONTEÚDO */}
            <div className='conteudo-ponto'>

                <div className='imagem-texto'>

                    <img
                        src={PontoTuristicoEspecifico.imagem}
                        alt='Ponto turístico'
                    />

                    <p>{PontoTuristicoEspecifico.descricao}</p>

                </div>

                <div className='texto-imagem'>

                    <p>{PontoTuristicoEspecifico.descricao}</p>

                    <img
                        src={PontoTuristicoEspecifico.imagem}
                        alt='Paisagem'
                    />

                </div>

                <div className='compartilhar'>

                    <button>
                        <FaShareAlt />
                    </button>

                </div>

            </div>

            {/* MEMÓRIAS RELACIONADAS */}
            <div className='memorias-relacionadas'>

                <h2>Memórias relacionadas a esse lugar</h2>

            </div>

        </div>
    )
}

export default PontoTuristicoEspecifico