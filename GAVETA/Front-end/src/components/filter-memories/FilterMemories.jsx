import { CiFilter } from 'react-icons/ci'
import './filterMemories.css'
import { useEffect, useState } from 'react'
import Tags from '../Tags/Tags'
import { useMemo } from 'react'
import Dados from '../../services/dados.json'

const FilterMemories = ({ setExibirDados, openFilter, setOpenFilter }) => {
    const [selecionadas, setSelecionadas] = useState([]);
    const [dadoFiltrado, setDadoFiltrado] = useState(false)

    const handleFilter = () => {

        const filtroBusca = selecionadas.map(e => e.toLowerCase())
        if (filtroBusca.length === 0) {
            setExibirDados(Dados)
            setDadoFiltrado(false)
            setOpenFilter(false)

            return
        }

        const filtrar = Dados.filter((filtro) =>
            filtro.tags.some(tag => filtroBusca.includes(tag.toLowerCase())))
        setExibirDados(filtrar.map(e => ({
            id: e.id,
            titulo: e.titulo,
            descricao: e.descricao,
            imagem: e.imagem,
            tags: e.tags
        })))

        setOpenFilter(false)
        setDadoFiltrado(true)

    }

    const cleanFilter = () => {
        setSelecionadas([])
        setExibirDados(Dados)
        setOpenFilter(false)
        setDadoFiltrado(false)

    }

    const cardFilter = () => {
        return (
            <div className='card-filter-open'>
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
            <button className='btn-filter' onClick={() => { openFilter ? setOpenFilter(false) : setOpenFilter(true) }}>
                <CiFilter className='icon-filter' />
            </button>

            {

                openFilter && cardFilter()

            }
        </div>
    )
}

export default FilterMemories