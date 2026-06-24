import { useParams, useNavigate } from "react-router-dom"; // Importado useNavigate, não precisa mais do useLocation
import "./PontoTuristicoEspecifico.css";
import Polaroide from "../../components/polaroide/Polaroide";
import { FaShareAlt } from "react-icons/fa";
import { MdArrowBack } from "react-icons/md";
import { GetPontosByID, GetMemoriesByPontos } from "../../services/api";
import Compartilhar from "../../components/Botões/Compartilhar";
import { useState, useEffect } from "react";

const PontoTuristicoEspecifico = () => {
  const [pontoSelecionado, setPontoSelecionado] = useState(null);
  const [memoriasPonto, setMemoriasPonto] = useState([]);
  const [verMais, setVerMais] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();

  // o código comentado abaixo não precisa mais! - samuel

  // 1. Ativamos o useLocation para capturar os dados vindos do clique
  //const location = useLocation();

  // 2. Pegamos o ponto que foi passado no navigate
  //const ponto = location.state?.ponto;

  // Se tentar acessar a página direto sem clicar (ou der F5), exibe o aviso

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

    async function Carregar() {
      const apiPonto = await GetPontosByID(id);
      console.log(apiPonto);
      setPontoSelecionado(apiPonto);

      const apiMemoriesPonto = await GetMemoriesByPontos(apiPonto.titulo);
      console.log(apiMemoriesPonto);
      setMemoriasPonto(apiMemoriesPonto);
    }

    Carregar();
  }, []);

  if (!pontoSelecionado) {
    return (
      <h1 style={{ textAlign: "center", color: "white", marginTop: "5rem" }}>
        Ponto não encontrado.
      </h1>
    );
  }

  return (
    <div className="ponto-especifico">
      {/* TOPO */}
      <div className="topo-ponto">
        <button
          className="btn-voltar"
          onClick={() => navigate("/ponto-turistico")}
        >
          <MdArrowBack />
        </button>

        <h1>{pontoSelecionado.titulo}</h1>
      </div>

      {/* CONTEÚDO */}
      <div className="conteudo-ponto">
        <div className="imagem-texto">
          <img
            src={pontoSelecionado.imagens[0]}
            alt={pontoSelecionado.titulo}
          />
          <p>{pontoSelecionado.texto}</p>
          <img
            src={pontoSelecionado.imagens[1]}
            alt={pontoSelecionado.titulo}
          />
        </div>
      </div>
      <div className="btn-compartilhar">
        <Compartilhar />
      </div>

      {/* MEMÓRIAS RELACIONADAS */}
      <div className="memorias-relacionadas">
        <h2>Memórias relacionadas a esse lugar</h2>
        <div
          className={`cards-relacionados ${verMais ? "cards-expandido" : ""}`}
        >
          {(verMais ? memoriasPonto : memoriasPonto.slice(0, 3)).map(
            (memoria) => (
              <Polaroide
                key={memoria.id}
                id={memoria.id}
                titulo={memoria.titulo}
                imagem={memoria.imagensURL}
                rotation={false}
              />
            ),
          )}
        </div>

        {memoriasPonto.length > 3 && (
          <button
            className="btn-ver-mais"
            onClick={() => setVerMais((v) => !v)}
          >
            {verMais ? "Ver menos" : "Ver mais"}
          </button>
        )}
      </div>
    </div>
  );
};

export default PontoTuristicoEspecifico;
