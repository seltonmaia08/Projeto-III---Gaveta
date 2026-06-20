import "./pendentes.css";
import { useState, useEffect } from "react";
import CuradoriaPendente from "../../components/CuradoriaPendente/CuradoriaPendente";
import PopUpConfirmacao from "../../components/PopUpConfirmacao/PopUpConfirmacao";
import PopUpSucesso from "../../components/PopUpSucesso/PopUpSucesso";
import Polaroide from "../../components/polaroide/Polaroide";
import { GetMemoriesPendentes, UpdateMemoria } from "../../services/api";
//import Dados from "../../services/dados.json";
import FilterMemories from "../../components/filter-memories/FilterMemories";


const PendentesDashboard = () => {
  const [curadoriaAberta, setCuradoriaAberta] = useState(false);
  const [confirmacaoAberta, setConfirmacaoAberta] = useState(false);
  const [sucessoAberto, setSucessoAberto] = useState(false);

  const [exibirDados, setExibirDados] = useState([]); // useState(Dados) anteriormente mockados
  const [memoriaSelecionada, setMemoriaSelecionada] = useState(null);
  const [acaoSelecionada, setAcaoSelecionada] = useState("");
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("");
  const [openFilter, setOpenFilter] = useState(false);
  const [filtrarConteudo, setFiltrarConteudo] = useState([]);
  const [alertaAberto, setAlertaAberto] = useState(false)
  const [avisoEnvio, setAvisoEnvio] = useState(false)
  useEffect(

    () => {

      async function Carrergar() {

        const apiMemories = await GetMemoriesPendentes();
        setExibirDados(apiMemories);
      }

      Carrergar();
    }, []
  )

  const ExibirAlertaDeCampoFazio = () => {
    return (
      <div className="exibirAlerta">
        <p>Por favor, selecione uma categoria!</p>
      </div>
    )
  }


  function handlePopUpCuradoria(e, memoria) {
    e.preventDefault();

    setMemoriaSelecionada(memoria);
    setCuradoriaAberta(true);
  }


  function handleAceitar() {
    if (categoriaSelecionada === '') {
      setAlertaAberto(true)
      setTimeout(() => setAlertaAberto(false), 3000)
      return
    }
    setAcaoSelecionada("aceitar");
    setConfirmacaoAberta(true);
  }

  function handleRecusar() {
    setAcaoSelecionada("recusar");
    setConfirmacaoAberta(true)
  }

  function handleNao() {
    setConfirmacaoAberta(false);
  }

  async function handleSim() {
    try {
      if (acaoSelecionada === "aceitar") {
        setAvisoEnvio(true)
        await UpdateMemoria(memoriaSelecionada.id, {
          categoriaMemoria: categoriaSelecionada,
          postada: true
        });
        setAvisoEnvio(false)
      } else if (acaoSelecionada === "recusar") {
        //Função de deletar memória aqui
      }

      // Atualiza a lista de memorias pendentes
      setExibirDados(exibirDados.filter((memoria) => memoria.id !== memoriaSelecionada.id));

      setConfirmacaoAberta(false);
      setCuradoriaAberta(false);
      setSucessoAberto(true);
    } catch (error) {
      console.log(error)
    }
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
          onAceitar={handleAceitar}
          onRecusar={handleRecusar}
          onChangeCategoria={setCategoriaSelecionada}
        />
      )}
      {confirmacaoAberta && (
        <PopUpConfirmacao onSim={handleSim} onNao={handleNao} avisoEnvio={avisoEnvio}/>
      )}
      {sucessoAberto && <PopUpSucesso onFechar={handleFecharSucesso} />}
      {alertaAberto && <ExibirAlertaDeCampoFazio />}
    </div>
  );
};

export default PendentesDashboard;
