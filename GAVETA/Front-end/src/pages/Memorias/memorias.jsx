import { memo, useState } from 'react'
import Search from '../../components/Campo_Busca/Search'
import CardMemories from '../../components/Card/CardMemories'
import FilterMemories from '../../components/filter-memories/FilterMemories'
import Dados from '../../services/dados.json'
import './memoria.css'

const Memoria = () => {
    const [openFilter, setOpenFilter] = useState(false)
    const [exibirDados, setExibirDados] = useState(Dados)
    const [filtrarConteudo, setFiltrarConteudo] = useState([])
    const [buscarConteudo, setBuscarConteudo] = useState([])

    console.log(exibirDados)

    return (
        <div className="memoria">
            <div className='area-search'>
                <Search
                    setBuscarConteudo={setExibirDados}
                    buscaConteudo={buscarConteudo}
                />
                <FilterMemories
                    setExibirDados={setExibirDados}
                    openFilter={openFilter}
                    setOpenFilter={setOpenFilter}
                />
            </div>
            {
                exibirDados.length == 0 ?
                    <div className='messageItemNotFound'>
                        <p>Ops... Nenhuma memória foi encontrada.</p>
                        <p>Por favor tente outras palavras!</p>
                    </div>
                    :
                    exibirDados.map((memoria) =>
                        <CardMemories
                            key={memoria.id}
                            id={memoria.id}
                            title={memoria.titulo}
                            description={memoria.descricao}
                            imagem={memoria.imagem}
                            tags={memoria.tags}
                            onClick={onClick}
                        />
                    )
            }
        </div>
    )
}

export default Memoria