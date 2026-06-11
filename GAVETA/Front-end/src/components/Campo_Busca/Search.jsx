import { IoClose, IoSearchOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import Dados from '../../services/dados.json'
import './search.css'

const Search = ({ setBuscarConteudo }) => {
    const [busca, setBusca] = useState('')

    useEffect(() => {
        const normalizeTextSearch = (text) => {
            if (!text || typeof text !== 'string') return '';
            return text.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase()
        }


        const buscando = Dados.filter((procurando) => {
            const titleNormalize = normalizeTextSearch(procurando.titulo)
            const buscaNormalize = normalizeTextSearch(busca).split(' ').filter(Boolean)
            return buscaNormalize.every(palavra => titleNormalize.includes(palavra))
        })

        setBuscarConteudo(buscando.map(e => ({
            id: e.id,
            titulo: e.titulo,
            descricao: e.descricao,
            imagem: e.imagem,
            tags: e.tags
        })))
    }, [busca])

    const buscaMemoria = () => {
        if (busca === '') {
            setBuscarConteudo(Dados)
            return
        }
    }
    return (
        <div className='search-content'>
            <IoSearchOutline className="icone-search" />
            <input
                type="text"
                placeholder='Resgate uma memória'
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                onKeyDown={buscaMemoria}
            />
            {
                busca != ''
                    ?
                    <IoClose className="icone-clean"
                        onClick={() => {
                            setBusca('')
                            setBuscarConteudo(Dados)
                        }} />
                    : ''
            }
        </div>
    )
}
export default Search