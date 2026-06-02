import { useNavigate, useParams } from 'react-router-dom'

import './PontoTuristicoEspecifico.css'

import { FaArrowLeft, FaShareAlt } from 'react-icons/fa'

const PontoTuristicoEspecifico = () => {

    const navigate = useNavigate()
    const { id } = useParams()

    const PontoTuristicoEspecifico = () => {
    console.log("CARREGOU PONTO ESPECIFICO")
    }

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

                <h1>A pedra da galinha continua linda</h1>

            </div>

            {/* CONTEÚDO */}
            <div className='conteudo-ponto'>

                <div className='imagem-texto'>

                    <img
                        src='https://images.unsplash.com/photo-1506744038136-46273834b3fb'
                        alt='Ponto turístico'
                    />

                    <p>
                        A trilha da Pedra da Galinha é conhecida pelas suas
                        paisagens naturais, vegetação abundante e clima
                        agradável. O percurso é relativamente simples,
                        permitindo que visitantes apreciem a natureza ao longo
                        do caminho.
                    </p>

                </div>

                <div className='texto-imagem'>

                    <p>
                        Durante o trajeto é possível observar diferentes tipos
                        de vegetação, além de áreas ideais para fotografias e
                        contemplação da paisagem.
                    </p>

                    <img
                        src='https://images.unsplash.com/photo-1500530855697-b586d89ba3ee'
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