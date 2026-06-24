import { memo, useState, useEffect } from "react";

import Search from "../../components/Campo_Busca/Search";
import CardMemories from "../../components/Card/CardMemories";
import FilterMemories from "../../components/filter-memories/FilterMemories";
import { GetMemoriesPostadas } from "../../services/api";
import "./memoria.css";

const MEMORIAS_POR_PAGINA = 6;

const Memoria = () => {
  const [openFilter, setOpenFilter] = useState(false);
  const [exibirDados, setExibirDados] = useState([]);
  const [filtrarConteudo, setFiltrarConteudo] = useState([]);
  const [buscarConteudo, setBuscarConteudo] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [paginaAtual, setPaginaAtual] = useState(1);

  useEffect(() => {
    async function carregar() {
      const apiMemories = await GetMemoriesPostadas();
      setExibirDados(apiMemories);
      console.log("pagina memorias: ", apiMemories);
      setCarregando(false);
    }

    carregar();
  }, []);

  const totalPaginas = Math.ceil(
    (exibirDados?.length || 0) / MEMORIAS_POR_PAGINA,
  );
  const paginaValida = Math.min(paginaAtual, totalPaginas || 1);

  const indiceInicio = (paginaValida - 1) * MEMORIAS_POR_PAGINA;
  const indiceFim = indiceInicio + MEMORIAS_POR_PAGINA;
  const memoriasDaPagina = exibirDados?.slice(indiceInicio, indiceFim) || [];
  return (
    <div className="memoria">
      <div className="area-search">
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
      {carregando ? (
        <div style={{ textAlign: "center", width: "100%", padding: "4rem" }}>
          <h2 style={{ color: "#fff" }}>Resgatando memórias...</h2>
        </div>
      ) : !exibirDados || exibirDados.length === 0 ? (
        <div className="messageItemNotFound">
          <p>Ops... Nenhuma memória foi encontrada.</p>
          <p>Por favor, tente outras palavras...</p>
        </div>
      ) : (
        memoriasDaPagina.map((memoria) => (
          <CardMemories
            key={memoria.id}
            id={memoria.id}
            titulo={memoria.titulo}
            relatoMemoria={memoria.relatoMemoria}
            tags={memoria.tags}
            imagensURL={memoria.imagensURL}
          />
        ))
      )}
      {!carregando && totalPaginas > 1 && (
        <div className="paginacao">
          <button
            className="btn-pagina btn-seta"
            onClick={() => setPaginaAtual((p) => p - 1)}
            disabled={paginaAtual === 1}
          >
            ‹
          </button>

          {Array.from({ length: totalPaginas }, (_, i) => i + 1).map(
            (numero) => (
              <button
                key={numero}
                className={`btn-pagina ${paginaAtual === numero ? "btn-pagina-ativa" : ""}`}
                onClick={() => setPaginaAtual(numero)}
              >
                {numero}
              </button>
            ),
          )}
          <button
            className="btn-pagina btn-seta"
            onClick={() => setPaginaAtual((p) => p + 1)}
            disabled={paginaValida === totalPaginas}
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
};

export default Memoria;
