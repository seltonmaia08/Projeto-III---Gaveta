import { useState } from 'react';
import Polaroide from '../../components/polaroide/Polaroide';

import PostadasPopUp from '../../components/PostadasPopUp/PostadasPopUp';
import PostadasEdit from '../../components/PostadasEdit/PostadasEdit';

import PopUpSucesso from '../../components/PopUpSucesso/PopUpSucesso';
import PopUpConfirmacao from '../../components/PopUpConfirmacao/PopUpConfirmacao';

import './postadas.css';

const memorias = [
  {
    id: 1,
    title: "Titulo para a polaroide do mural",
    image:
      "https://fundacaomarquesdemelo.org/wp-content/uploads/2022/06/GalinhaChoca.png?w=640",
  },
  {
    id: 2,
    title: "Titulo para a polaroide do mural",
    image:
      "https://fundacaomarquesdemelo.org/wp-content/uploads/2022/06/GalinhaChoca.png?w=640",
  },
  {
    id: 3,
    title: "Titulo para a polaroide do mural",
    image:
      "https://fundacaomarquesdemelo.org/wp-content/uploads/2022/06/GalinhaChoca.png?w=640",
  },
  {
    id: 4,
    title: "Titulo para a polaroide do mural",
    image:
      "https://fundacaomarquesdemelo.org/wp-content/uploads/2022/06/GalinhaChoca.png?w=640",
  },
];

const PostadasDashboard = () => {

  const [postadasInfoShow, setPostadasInfoShow] = useState(false);
  const [confirmacaoAberta, setConfirmacaoAberta] = useState(false);
  const [sucessoAberto, setSucessoAberto] = useState(false);
  const [editMode, setEditMode] = useState(false);

  // ABRIR POPUP DETALHES
  function handlePostadasPopUp() {
    setPostadasInfoShow(true);
  }

  // FECHAR POPUP DETALHES
  function handleFechar() {
    setPostadasInfoShow(false);
  }

  // ABRIR EDIÇÃO
  function handleAbrirEdicao() {
    setPostadasInfoShow(false);
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
  }

  // CONFIRMAR AÇÃO
  function handleSim() {
    setConfirmacaoAberta(false);
    setPostadasInfoShow(false);
    setSucessoAberto(true);
  }

  // FECHAR SUCESSO
  function handleFecharSucesso() {
    setSucessoAberto(false);
  }

  return (
    <div className='postadas-dashboard'>

      {/* POLAROIDES */}
      {memorias.map((memoria) => (
        <Polaroide
          key={memoria.id}
          title={memoria.title}
          image={memoria.image}
          rotation={false}
          onClick={handlePostadasPopUp}
        />
      ))}

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
          onSave={(dados) => {
            console.log("Salvo:", dados);
            setEditMode(false);
          }}
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