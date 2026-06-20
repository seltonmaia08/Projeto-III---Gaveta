import { IoClose, IoSearchOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import { GetMemoriesPostadas, GetPontos } from "../../services/api";
import { useLocation } from "react-router-dom";
import './search.css'

const Search = ({ setBuscarConteudo }) => {
    const [busca, setBusca] = useState('')
    const [exibirDados, setExibirDados] = useState([]);
    const location = useLocation()
    useEffect(
        () => {

            async function Carregar() {

                if (location.pathname.includes('ponto-turistico')) {
                    const apiMemories = await GetPontos();
                    setExibirDados(apiMemories);
                }
                else {
                    const apiMemories = await GetMemoriesPostadas();
                    setExibirDados(apiMemories);
                }
            }

            Carregar();
        }, [location]
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

        setBuscarConteudo(buscando)
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