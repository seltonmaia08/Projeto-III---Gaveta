import { useParams, useLocation } from 'react-router-dom' // Importado o useLocation
import './PontoTuristicoEspecifico.css'
import Voltar from '../../components/Botões/Voltar'
import { FaShareAlt } from 'react-icons/fa' 

const PontoTuristicoEspecifico = () => {
    const { id } = useParams()
    
    // 1. Ativamos o useLocation para capturar os dados vindos do clique
    const location = useLocation()

    // 2. Pegamos o ponto que foi passado no navigate
    const ponto = location.state?.ponto

    // Se tentar acessar a página direto sem clicar (ou der F5), exibe o aviso
    if (!ponto) {
        return (
            <h1 style={{ textAlign: 'center', color: 'white', marginTop: '5rem' }}>
                Ponto não encontrado ou página recarregada.
            </h1>
        )
    }

    return (
        <div className="ponto-especifico">

            {/* TOPO */}
            <div className="topo-ponto">
                <Voltar />

                <h1>{ponto.titulo}</h1>

                {/* 3. Mantive a div fantasma aqui para o seu Grid CSS deixar o título centralizado */}
                <div></div> 
            </div>

            {/* CONTEÚDO */}
            <div className="conteudo-ponto">

                <div className="imagem-texto">
                    <img
                        src={ponto.imagem}
                        alt={ponto.titulo}
                    />

                    <p>
                        {ponto.descricao}
                    </p>
                </div>

                <div className="compartilhar">
                    <button>
                        <FaShareAlt />
                    </button>
                </div>

            </div>

            {/* MEMÓRIAS RELACIONADAS */}
            <div className="memorias-relacionadas">
                <h2>
                    Memórias relacionadas a esse lugar
                </h2>

                <div className="cards-relacionados">
                    {/* Aqui você pode renderizar os Polaroides futuramente */}
                </div>
            </div>

        </div>
    )
}

export default PontoTuristicoEspecifico