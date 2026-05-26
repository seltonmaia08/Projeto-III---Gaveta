import Search from '../../components/Campo_Busca/Search'
import Polaroide from '../../components/polaroide/Polaroide'
import './pontosTuristicos.css'
import Dados from '../../services/dados.json'
import { useState } from 'react'


const PontoTuristico = () => {
    const [exibirDados, setExibirDados] = useState(Dados)
    const [buscarConteudo, setBuscarConteudo] = useState([])

    return (
        <div className='ponto-turistico'>
            <div className='varal'></div>
            <div className='campo-busca'>
                <Search
                    setBuscarConteudo={setExibirDados}
                    buscaConteudo={buscarConteudo}
                />
            </div>
            <div className='content-ponto-turistico'>
                {
                    exibirDados.length == 0 ?
                        <div className='messageItemNotFound'>
                            <p>Ops... Nenhuma memória foi encontrada.</p>
                            <p>Por favor tente outras palavras!</p>
                        </div>
                        :
                        exibirDados.map((memoria) =>
                            <Polaroide
                                key={memoria.id}
                                title={memoria.titulo}
                                imagem={memoria.imagem}
                                rotation={false}
                            />
                        )
                }
            </div>
        </div>
    )
}

export default PontoTuristico