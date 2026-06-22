import { useState, useEffect, memo } from 'react';
import Polaroide from '../../components/polaroide/Polaroide';

import PostadasPopUp from '../../components/PostadasPopUp/PostadasPopUp';
import PostadasEdit from '../../components/PostadasEdit/PostadasEdit';

import PopUpSucesso from '../../components/PopUpSucesso/PopUpSucesso';
import PopUpConfirmacao from '../../components/PopUpConfirmacao/PopUpConfirmacao';

import Dados from '../../services/dados.json'
import { DeleteMemoria, GetMemoriesPostadas, UpdateMemoria } from '../../services/api';
import FilterMemories from '../../components/filter-memories/FilterMemories';

import './postadas.css';


const PostadasDashboard = () => {

  const [postadasInfoShow, setPostadasInfoShow] = useState(false);
  const [confirmacaoAberta, setConfirmacaoAberta] = useState(false);
  const [sucessoAberto, setSucessoAberto] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const [exibirDados, setExibirDados] = useState([]) // useState(Dados) anteriormente mockados
  const [memoriaSelecionada, setMemoriaSelecionada] = useState(null);
  const [dadosParaSalvar, setDadosParaSalvar] = useState(null);
  const [acaoSelecionada, setAcaoSelecionada] = useState("");
  const [openFilter, setOpenFilter] = useState(false)
  const [filtrarConteudo, setFiltrarConteudo] = useState([])
  const [avisoEnvio, setAvisoEnvio] = useState(false)

  useEffect(

    () => {

      async function Carregar() {

        const apiMemories = await GetMemoriesPostadas();
        console.log(apiMemories);
        setExibirDados(apiMemories);
      }

      Carregar();
    }, []
  )

  // ABRIR POPUP DETALHES
  function handlePostadasPopUp(e, memoria) {
    e.preventDefault();

    setMemoriaSelecionada(memoria);
    setPostadasInfoShow(true);
  }

  // FECHAR POPUP DETALHES
  function handleFechar() {
    setPostadasInfoShow(false);
  }

  // ABRIR EDIÇÃO
  function handleAbrirEdicao() {
    setEditMode(true);
  }

  // FECHAR EDIÇÃO
  function handleFecharEdicao() {
    setEditMode(false);
  }

  // RECUSAR ALTERAÇÃO DOS DADOS
  function handleRecusarAlteracao() {
    setConfirmacaoAberta(true)
  }

  // ABRIR CONFIRMAÇÃO
  function handleAceitarRecusar() {
    setConfirmacaoAberta(true);
  }

  // CANCELAR CONFIRMAÇÃO
  function handleNao() {
    setConfirmacaoAberta(false);
    if (editMode) setEditMode(true)
  }

  // CONFIRMAR AÇÃO
  async function handleSim() {

    if (acaoSelecionada === "recusar") {
      setConfirmacaoAberta(false);
      setPostadasInfoShow(false);
      if (editMode) setEditMode(false);
      setSucessoAberto(true);
      return
    }

    try {
      if (acaoSelecionada === "editar" && dadosParaSalvar) {
        setAvisoEnvio(true)
        await UpdateMemoria(memoriaSelecionada.id, dadosParaSalvar);
        setExibirDados(exibirDados.map(memoria => {
          if (memoria.id === memoriaSelecionada.id) {
            return { ...memoria, ...dadosParaSalvar };
          }
          return memoria;
        }));
        setAvisoEnvio(false)
      }
      if (acaoSelecionada === "deletar") {
        setAvisoEnvio(true)
        await DeleteMemoria(memoriaSelecionada.id)
        setExibirDados(prev => //usa esse prev para garantir que está pegando o estado mais atual do ExibirDados
          prev.filter(
            memoria => memoria.id !== memoriaSelecionada.id
          )
        );
        setAvisoEnvio(false);
      }
      setConfirmacaoAberta(false);
      setPostadasInfoShow(false);
      if (editMode) setEditMode(false);
      setSucessoAberto(true);

    } catch (error) {
      console.log("Erro ao atualizar:", error);
    }
  }

  // FECHAR SUCESSO
  function handleFecharSucesso() {
    setSucessoAberto(false);
  }

  return (
    <div className='postadas-dashboard'>
      <div className='filtro-postadas'>
        <h3>Postadas</h3>
        <FilterMemories
          setExibirDados={setExibirDados}
          openFilter={openFilter}
          setOpenFilter={setOpenFilter}
        />
      </div>
      <div className='memorias-postadas'>
        {/* POLAROIDES */}
        {exibirDados.map((memoria) => (
          <Polaroide
            key={memoria.id}
            titulo={memoria.titulo}
            imagem={memoria.imagensURL}
            rotation={false}
            onClick={(event) => handlePostadasPopUp(event, memoria)}
          />
        ))}
      </div>

      {/* POPUP DETALHES */}
      {postadasInfoShow && memoriaSelecionada && (
        <PostadasPopUp
          titulo={memoriaSelecionada.titulo}
          nome={memoriaSelecionada.nomeAutor}
          data={memoriaSelecionada.dataMemoria}
          texto={memoriaSelecionada.relatoMemoria}
          tags={memoriaSelecionada.tags}
          lugar={memoriaSelecionada.ponto_memoria}
          email={memoriaSelecionada.contatoAutor[0]}
          outroContato={memoriaSelecionada.contatoAutor[1]}
          foto={memoriaSelecionada.imagensURL}

          onFechar={handleFechar}
          onEditMode={handleAbrirEdicao}
          onDelete={() => {
            setAcaoSelecionada("deletar");
            handleAceitarRecusar();
          }}
        />
      )}

      {/* POPUP EDITAR */}
      {editMode && memoriaSelecionada && (
        <PostadasEdit
          titulo={memoriaSelecionada.titulo}
          nome={memoriaSelecionada.nomeAutor}
          data={memoriaSelecionada.dataMemoria}
          texto={memoriaSelecionada.relatoMemoria}
          tags={memoriaSelecionada.tags}
          lugar={memoriaSelecionada.ponto_memoria}
          email={memoriaSelecionada.contatoAutor[0]}
          outroContato={memoriaSelecionada.contatoAutor[1]}
          foto={memoriaSelecionada.imagensURL}

          onClose={handleFecharEdicao}
          onSave={(dados) => {
            setDadosParaSalvar(dados);
            setAcaoSelecionada("editar");
            handleAceitarRecusar();
          }}
          onDelete={() => {
            setAcaoSelecionada("recusar")
            handleRecusarAlteracao()
          }}
        />
      )}

      {/* CONFIRMAÇÃO */}
      {confirmacaoAberta && (
        <PopUpConfirmacao
          onSim={handleSim}
          onNao={handleNao}
          avisoEnvio={avisoEnvio}
        />
      )}

      {/* SUCESSO */}
      {sucessoAberto && (
        <PopUpSucesso
          onFechar={handleFecharSucesso}
        />
      )}

    </div>
  );
}

export default PostadasDashboard;