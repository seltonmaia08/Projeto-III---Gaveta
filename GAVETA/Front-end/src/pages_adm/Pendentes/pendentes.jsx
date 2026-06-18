import "./pendentes.css";
import { useState, useEffect } from "react";
import CuradoriaPendente from "../../components/CuradoriaPendente/CuradoriaPendente";
import PopUpConfirmacao from "../../components/PopUpConfirmacao/PopUpConfirmacao";
import PopUpSucesso from "../../components/PopUpSucesso/PopUpSucesso";
import Polaroide from "../../components/polaroide/Polaroide";
import { GetMemoriesPendentes } from "../../services/api";
//import Dados from "../../services/dados.json";
import FilterMemories from "../../components/filter-memories/FilterMemories";

const PendentesDashboard = () => {
  const [curadoriaAberta, setCuradoriaAberta] = useState(false);
  const [confirmacaoAberta, setConfirmacaoAberta] = useState(false);
  const [sucessoAberto, setSucessoAberto] = useState(false);

  const [exibirDados, setExibirDados] = useState([]); // useState(Dados) anteriormente mockados
  const [memoriaSelecionada, setMemoriaSelecionada] = useState(null);

  const [openFilter, setOpenFilter] = useState(false);
  const [filtrarConteudo, setFiltrarConteudo] = useState([]);

  useEffect(

    () => {

      async function Carrergar() {

        const apiMemories = await GetMemoriesPendentes();
        setExibirDados(apiMemories);
      }

      Carrergar();
    }, []
  )

  function handlePopUpCuradoria(e, memoria) {
    e.preventDefault();

    setMemoriaSelecionada(memoria);
    setCuradoriaAberta(true);
  }

  function handleAceitarRecusar() {
    setConfirmacaoAberta(true);
  }

  function handleNao() {
    setConfirmacaoAberta(false);
  }

  function handleSim() {
    setConfirmacaoAberta(false);
    setCuradoriaAberta(false);
    setSucessoAberto(true);
  }

  function handleFecharSucesso() {
    setSucessoAberto(false);
  }

  function handleFecharCuradoria() {
    setCuradoriaAberta(false);
  }

  return (
    <div className="pendentes-dashboard">
      <div className="filtro-pendentes">
        <h3>Pendentes</h3>
        <FilterMemories
          setExibirDados={setExibirDados}
          openFilter={openFilter}
          setOpenFilter={setOpenFilter}
        />
      </div>
      <div className="memorias-pendentes">
        {exibirDados.map((memoria) => (
          <Polaroide
            key={memoria.id}
            titulo={memoria.titulo}
            imagem={memoria.imagensURL}
            rotation={false}
            onClick={(event) => handlePopUpCuradoria(event, memoria)}
          />
        ))}
      </div>
      {curadoriaAberta && memoriaSelecionada && (
        <CuradoriaPendente
          titulo={memoriaSelecionada.titulo}
          nome={memoriaSelecionada.nomeAutor}
          data={memoriaSelecionada.dataMemoria}
          texto={memoriaSelecionada.relatoMemoria}
          tags={memoriaSelecionada.tags}
          lugar={memoriaSelecionada.ponto_memoria}
          email={memoriaSelecionada.contatoAutor[0]}
          outroContato={memoriaSelecionada.contatoAutor[1]}
          foto={memoriaSelecionada.imagensURL}
          onFechar={handleFecharCuradoria}
          onAceitarRecusar={handleAceitarRecusar}
        />
      )}
      {confirmacaoAberta && (
        <PopUpConfirmacao onSim={handleSim} onNao={handleNao} />
      )}
      {sucessoAberto && <PopUpSucesso onFechar={handleFecharSucesso} />}
    </div>
  );
};

export default PendentesDashboard;
