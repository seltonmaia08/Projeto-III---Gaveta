import { CiFilter } from 'react-icons/ci'
import './filterMemories.css'
import { useEffect, useState } from 'react'
import Tags from '../Tags/Tags'
import { useMemo } from 'react'
import { GetMemoriesPostadas } from '../../services/api'
import { useLocation } from 'react-router-dom'

const FilterMemories = ({ setExibirDados, openFilter, setOpenFilter }) => {

    //const [exibirDados, setExibirDados] = useState([]); // não consigo usar essas variáveis, já tá puxando por props?
    const [selecionadas, setSelecionadas] = useState([]);
    const [dadoFiltrado, setDadoFiltrado] = useState(false);
    const location = useLocation().pathname.includes('Dashboard')
    const [exibirFiltro, setExibirFiltro] = useState([])
    console.log(location)

    useEffect(                // esse useEffect() é pra puxar as memorias, mas estou esperando ver o que vai ser feito.

        () => {
            async function Carregar() {
                const apiMemories = await GetMemoriesPostadas();
                setExibirFiltro(apiMemories);
            }

            Carregar();
        }, []
    )

    const handleFilter = () => {

        const filtroBusca = selecionadas.map(e => e.toLowerCase())
        if (filtroBusca.length === 0) {
            setExibirDados(exibirFiltro);
            setDadoFiltrado(false);
            setOpenFilter(false);
            return
        }

        const filtrar = exibirFiltro.filter((filtro) =>
            filtro.tags.some(tag => filtroBusca.includes(tag.toLowerCase())))
        setExibirDados(filtrar.map(e => ({
            id: e.id,
            titulo: e.titulo,
            relatoMemoria: e.relatoMemoria,
            imagensURL: e.imagensURL,
            tags: e.tags
        })))

        setOpenFilter(false)
        setDadoFiltrado(true)

    }

    const cleanFilter = () => {
        setSelecionadas([])
        setExibirDados(exibirFiltro)
        setOpenFilter(false)
        setDadoFiltrado(false)

    }

    const cardFilter = () => {
        return (
            <div className='card-filter-open'
                style={location === true ? {backgroundColor: 'var(--nuvem-inverno) !important'} : {}}
            >
                <Tags
                    needTitle={false}
                    selecionadas={selecionadas}
                    setSelecionadas={setSelecionadas} />
                <button
                    onClick={handleFilter}
                    className='btn-submit-filter'
                >Filtrar</button>
                {

                    dadoFiltrado
                    &&
                    <button
                        onClick={cleanFilter}
                        className='btn-clean-filter'
                    >Limpar</button>
                }
            </div>
        )
    }

    return (
        <div className="filter-content">
            <button className='btn-filter' 
                style={location === true ? {backgroundColor: 'var(--nuvem-inverno) !important', color: 'var(--pedra-cruzeiro) !important'} : {}}
                onClick={() => { openFilter ? setOpenFilter(false) : setOpenFilter(true) }}>
                <CiFilter className='icon-filter' />
            </button>

            {

                openFilter && cardFilter()

            }
        </div>
    )
}

export default FilterMemories