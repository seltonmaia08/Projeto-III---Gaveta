import { useState } from 'react';
import Polaroide from '../../components/polaroide/Polaroide'

import DenunciaPopUp from '../../components/DenunciaPopUp/DenunciaPopUp';

import PopUpSucesso from '../../components/PopUpSucesso/PopUpSucesso';
import PopUpConfirmacao from '../../components/PopUpConfirmacao/PopUpConfirmacao';

import './denuncia.css'

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

const DenunciaDashboard = () => {

  const [DenunciaInfoShow, setDenunciaInfoShow] = useState(false);
  const [confirmacaoAberta, setConfirmacaoAberta] = useState(false);
  const [sucessoAberto, setSucessoAberto] = useState(false);

  function handleDenunciaPopUp() {
    setDenunciaInfoShow(true);
  }

  function handleAceitarRecusar() {
    setConfirmacaoAberta(true);
  }

  function handleNao() {
    setConfirmacaoAberta(false);
  }

  function handleSim() {
    setConfirmacaoAberta(false);
    setDenunciaInfoShow(false);
    setSucessoAberto(true);
  }

  function handleFecharSucesso() {
    setSucessoAberto(false);
  }

  function handleFechar() {
    setDenunciaInfoShow(false);
  }

  return (
    <div className='denuncia-dashboard'>

      {memorias.map((memoria) => (
        <Polaroide
          key={memoria.id}
          title={memoria.title}
          image={memoria.image}
          rotation={false}
          onClick={handleDenunciaPopUp}
        />
      ))}

      {DenunciaInfoShow && (
        <DenunciaPopUp
          titulo="Trilha da Galinha Choca"
          nome="Roberto Silva"
          data="27/04/2025"
          texto="Era uma tarde quente..."
          tags={["conto", "turismo"]}
          lugar="Açude do Cedro"
          email="robertoss2016@gmail.com"
          outroContato="(88) 99999-9999"
          foto="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/80/20/ac/img-20190503-092801729.jpg?w=1000&h=1000&s=1"
          onFechar={handleFechar}
          onDelete={handleAceitarRecusar}
        />
      )}

      {confirmacaoAberta && (
        <PopUpConfirmacao
          onSim={handleSim}
          onNao={handleNao}
        />
      )}

      {sucessoAberto && (
        <PopUpSucesso
          onFechar={handleFecharSucesso}
        />
      )}

    </div>
  )
}

export default DenunciaDashboard