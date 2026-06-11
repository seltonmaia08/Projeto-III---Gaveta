import { useParams, useLocation, useNavigate } from "react-router-dom"; // Importado o useLocation e useNavigate
import "./PontoTuristicoEspecifico.css";
import Polaroide from "../../components/polaroide/Polaroide";
import { FaShareAlt } from "react-icons/fa";
import { MdArrowBack } from "react-icons/md";
import Compartilhar from '../../components/Botões/Compartilhar'
import { useEffect } from "react";

const PontoTuristicoEspecifico = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // 1. Ativamos o useLocation para capturar os dados vindos do clique
  const location = useLocation();

  // 2. Pegamos o ponto que foi passado no navigate
  const ponto = location.state?.ponto;

  // Se tentar acessar a página direto sem clicar (ou der F5), exibe o aviso
  if (!ponto) {
    return (
      <h1 style={{ textAlign: "center", color: "white", marginTop: "5rem" }}>
        Ponto não encontrado ou página recarregada.
      </h1>
    );
  }

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
  },[])

  const memorias = [
    {
      id: 1,
      titulo: "Minha trilha preferida",
      imagem:
        "https://fundacaomarquesdemelo.org/wp-content/uploads/2022/06/GalinhaChoca.png?w=640",
    },
    {
      id: 2,
      titulo: "Pôr do sol na Pedra",
      imagem:
        "https://fundacaomarquesdemelo.org/wp-content/uploads/2022/06/GalinhaChoca.png?w=640",
    },
    {
      id: 3,
      titulo: "A trilha e o vento",
      imagem:
        "https://fundacaomarquesdemelo.org/wp-content/uploads/2022/06/GalinhaChoca.png?w=640",
    },
  ];

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

        <h1>{ponto.titulo}</h1>
      </div>

      {/* CONTEÚDO */}
      <div className="conteudo-ponto">
        <div className="imagem-texto">
          <img src={ponto.imagem} alt={ponto.titulo} />

          <p>{ponto.descricao}</p>
        </div>
      </div>
      <div className="btn-compartilhar">
          <Compartilhar />
      </div>

      {/* MEMÓRIAS RELACIONADAS */}
      <div className="memorias-relacionadas">
        <h2>Memórias relacionadas a esse lugar</h2>

        <div className="cards-relacionados">
          {memorias.map((memoria) => (
            <Polaroide
              key={memoria.id}
              id={memoria.id}
              titulo={memoria.titulo}
              imagem={memoria.imagem}
              rotation={false}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PontoTuristicoEspecifico;
