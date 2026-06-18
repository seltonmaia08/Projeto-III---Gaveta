import { useState, useEffect } from 'react';
import Polaroide from '../../components/polaroide/Polaroide';

import PostadasPopUp from '../../components/PostadasPopUp/PostadasPopUp';
import PostadasEdit from '../../components/PostadasEdit/PostadasEdit';

import PopUpSucesso from '../../components/PopUpSucesso/PopUpSucesso';
import PopUpConfirmacao from '../../components/PopUpConfirmacao/PopUpConfirmacao';

import Dados from '../../services/dados.json'
import { GetMemories } from '../../services/api';
import FilterMemories from '../../components/filter-memories/FilterMemories';

import './postadas.css';


const PostadasDashboard = () => {

  const [postadasInfoShow, setPostadasInfoShow] = useState(false);
  const [confirmacaoAberta, setConfirmacaoAberta] = useState(false);
  const [sucessoAberto, setSucessoAberto] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [exibirDados, setExibirDados] = useState([]) // useState(Dados) anteriormente mockados
  const [openFilter, setOpenFilter] = useState(false)
  const [filtrarConteudo, setFiltrarConteudo] = useState([])

  useEffect(

    () => {

      async function Carregar() {

        const apiMemories = await GetMemories();
        console.log(apiMemories);
        setExibirDados(apiMemories);
      }

      Carregar();
    }, []
  )

  // ABRIR POPUP DETALHES
  function handlePostadasPopUp(e) {
    e.preventDefault();
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

  // ABRIR CONFIRMAÇÃO
  function handleAceitarRecusar() {
    setConfirmacaoAberta(true);
  }

  // CANCELAR CONFIRMAÇÃO
  function handleNao() {
    setConfirmacaoAberta(false);
    if(editMode) setEditMode(true)
  }

  // CONFIRMAR AÇÃO
  function handleSim() {
    setConfirmacaoAberta(false);
    setPostadasInfoShow(false);
    if(editMode) setEditMode(false)
    setSucessoAberto(true);
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
            onClick={(event) => handlePostadasPopUp(event)}
          />
        ))}
      </div>

      {/* POPUP DETALHES */}
      {postadasInfoShow && (
        <PostadasPopUp
          titulo="Trilha da Galinha Choca"
          nome="Roberto Silva"
          data="27/04/2025"
          texto="Era uma tarde quente em Quixadá..."
          tags={["conto", "turismo"]}
          lugar="Açude do Cedro"
          email="robertoss2016@gmail.com"
          outroContato="(88) 99999-9999"
          foto="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/80/20/ac/img-20190503-092801729.jpg?w=1000&h=1000&s=1"

          onFechar={handleFechar}
          onEditMode={handleAbrirEdicao}
          onDelete={handleAceitarRecusar}
        />
      )}

      {/* POPUP EDITAR */}
      {editMode && (
        <PostadasEdit
          titulo="Trilha da Galinha Choca"
          nome="Roberto Silva"
          data="27/04/2025"
          texto="Era uma tarde quente em Quixadá..."
          tags={["conto", "turismo"]}
          lugar="Açude do Cedro"
          email="robertoss2016@gmail.com"
          outroContato="(88) 99999-9999"
          foto="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/80/20/ac/img-20190503-092801729.jpg?w=1000&h=1000&s=1"

          onClose={handleFecharEdicao}
          onSave={
            (dados) => {
            console.log("Salvo:", dados);
            handleAceitarRecusar();
          }
        }
          onDelete={handleAceitarRecusar}
        />
      )}

      {/* CONFIRMAÇÃO */}
      {confirmacaoAberta && (
        <PopUpConfirmacao
          onSim={handleSim}
          onNao={handleNao}
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