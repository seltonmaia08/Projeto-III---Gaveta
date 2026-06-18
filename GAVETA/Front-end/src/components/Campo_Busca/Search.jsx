import { IoClose, IoSearchOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import { GetMemoriesPostadas } from "../../services/api";
import './search.css'

const Search = ({ setBuscarConteudo }) => {
    const [busca, setBusca] = useState('')
    const [exibirDados, setExibirDados] = useState([]);

    useEffect(
        () => {

            async function Carregar() {

                const apiMemories = await GetMemoriesPostadas();
                setExibirDados(apiMemories);
            }

            Carregar();
        }, []
    )

    useEffect(() => {
        if (exibirDados.length === 0) return;
        const normalizeTextSearch = (text) => {
            if (!text || typeof text !== 'string') return '';
            return text.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase()
        }

        const buscando = exibirDados.filter((procurando) => {
            const titleNormalize = normalizeTextSearch(procurando.titulo)
            const buscaNormalize = normalizeTextSearch(busca).split(' ').filter(Boolean)
            return buscaNormalize.every(palavra => titleNormalize.includes(palavra))
        })

        setBuscarConteudo(buscando.map(e => ({
            id: e.id,
            titulo: e.titulo,
            relatoMemoria: e.relatoMemoria,
            imagensURL: e.imagensURL,
            tags: e.tags
        })))
    }, [busca, exibirDados])

    const buscaMemoria = () => {
        if (busca === '') {
            setBuscarConteudo(exibirDados)
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
                            setBuscarConteudo(exibirDados)
                        }} />
                    : ''
            }
        </div>
    )
}
export default Search