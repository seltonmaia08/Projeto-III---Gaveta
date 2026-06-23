import { useNavigate } from "react-router-dom";
import Search from "../../components/Campo_Busca/Search";
import Polaroide from "../../components/polaroide/Polaroide";
import "./pontosTuristicos.css";
//import Dados from '../../services/dados.json'
import { GetPontos } from "../../services/api";
import { useState, useEffect } from "react";

const PontoTuristico = () => {
  const [exibirDados, setExibirDados] = useState([]); //useState(Dados) anteriormente mockados
  const [buscarConteudo, setBuscarConteudo] = useState([]);
  const navigate = useNavigate();
  const [carregando, setCarregando] = useState(true)

  useEffect(() => {
    async function Carregar() {
      const apiPontos = await GetPontos();
      setExibirDados(apiPontos);
      setCarregando(false)
    }

    Carregar();
  }, []);

  const handleCardClick = (ponto) => {
    // CORRIGIDO: Agora aponta exatamente para '/ponto-turistico-especifico/'
    navigate(`/ponto-turistico-especifico/${ponto.id}`, { state: { ponto } });
  };

  return (
    <div className="ponto-turistico">
      <div className="campo-busca">
        {exibirDados.length > 0 ? <div className="varal"></div> : <></>}

        <Search
          setBuscarConteudo={setExibirDados}
          buscaConteudo={buscarConteudo}
        />
      </div>

      <div className="content-ponto-turistico">
        {carregando ? (
                    <div style={{ textAlign: "center", width: "100%", padding: "4rem" }}>
                        <h2 style={{ color: "#fff" }}>Resgatando memórias...</h2>
                    </div>
                ) : (!exibirDados || exibirDados.length === 0) ? (
                    <div className='messageItemNotFound'>
                        <p>Ops... Nenhuma memória foi encontrada.</p>
                        <p>Por favor, tente outras palavras...</p>
                    </div>
                ) : (
          exibirDados.map((memoria) => (
            <div key={memoria.id} onClick={() => handleCardClick(memoria)}>
              <Polaroide
                id={memoria.id}
                titulo={memoria.titulo}
                imagem={memoria.imagens?.[0]} // algumas URL não estavam sendo lidas corretamente, então precisou de uma verificação
                rotation={false}
                comPregador={true}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PontoTuristico;
