import { memo, useState, useEffect } from 'react'

import Search from '../../components/Campo_Busca/Search'
import CardMemories from '../../components/Card/CardMemories'
import FilterMemories from '../../components/filter-memories/FilterMemories'
import { GetMemoriesPostadas } from "../../services/api"
import './memoria.css'

const Memoria = () => {
    const [openFilter, setOpenFilter] = useState(false)
    const [exibirDados, setExibirDados] = useState([])
    const [filtrarConteudo, setFiltrarConteudo] = useState([])
    const [buscarConteudo, setBuscarConteudo] = useState([])
    const [carregando, setCarregando] = useState(true)


    useEffect(

        () => {

            async function carregar() {

                const apiMemories = await GetMemoriesPostadas();
                setExibirDados(apiMemories);
                console.log("pagina memorias: ", apiMemories)   
                setCarregando(false)
            }

            carregar();
        }, []
    )

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
                carregando ? (
                    <div style={{ textAlign: "center", width: "100%", padding: "4rem" }}>
                        <h2 style={{ color: "#fff" }}>Resgatando memórias...</h2>
                    </div>
                ) : (!exibirDados || exibirDados.length === 0) ? (
                    <div className='messageItemNotFound'>
                        <p>Ops... Nenhuma memória foi encontrada.</p>
                        <p>Por favor, tente outras palavras...</p>
                    </div>
                ) : (
                    exibirDados.map((memoria) =>
                        <CardMemories
                            key={memoria.id}
                            id={memoria.id}
                            titulo={memoria.titulo}
                            relatoMemoria={memoria.relatoMemoria}
                            tags={memoria.tags}
                            imagensURL={memoria.imagensURL}
                        />
                    )
                )
            }
        </div>
    )
}

export default Memoria