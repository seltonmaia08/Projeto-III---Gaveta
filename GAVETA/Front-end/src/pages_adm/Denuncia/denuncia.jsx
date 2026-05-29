import { useState } from 'react';
import Polaroide from '../../components/polaroide/Polaroide'

import DenunciaPopUp from '../../components/DenunciaPopUp/DenunciaPopUp';

import PopUpSucesso from '../../components/PopUpSucesso/PopUpSucesso';
import PopUpConfirmacao from '../../components/PopUpConfirmacao/PopUpConfirmacao';

import './denuncia.css'

import Dados from '../../services/dados.json'
import FilterMemories from '../../components/filter-memories/FilterMemories';

const DenunciaDashboard = () => {

  const [DenunciaInfoShow, setDenunciaInfoShow] = useState(false);
  const [confirmacaoAberta, setConfirmacaoAberta] = useState(false);
  const [sucessoAberto, setSucessoAberto] = useState(false);
  const [exibirDados, serExibirDados] = useState(Dados)
  const [openFilter, setOpenFilter] = useState(false)
  const [filtrarConteudo, setFiltrarConteudo] = useState([])


  function handleDenunciaPopUp(e) {
    e.preventDefault();
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

      <div className='filtro-denuncias'>
        <h3>Pendentes</h3>
        <FilterMemories
          setExibirDados={serExibirDados}
          openFilter={openFilter}
          setOpenFilter={setOpenFilter}
        />
      </div>
      <div className="memorias-denuncias">
        {exibirDados.map((memoria) => (
          <Polaroide
            key={memoria.id}
            titulo={memoria.titulo}
            imagem={memoria.imagem}
            rotation={false}
            onClick={handleDenunciaPopUp}
          />
        ))}
      </div>

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