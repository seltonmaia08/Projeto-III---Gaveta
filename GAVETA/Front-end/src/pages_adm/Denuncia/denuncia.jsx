import { useState, useEffect } from 'react';
import Polaroide from '../../components/polaroide/Polaroide'

import DenunciaPopUp from '../../components/DenunciaPopUp/DenunciaPopUp';

import PopUpSucesso from '../../components/PopUpSucesso/PopUpSucesso';
import PopUpConfirmacao from '../../components/PopUpConfirmacao/PopUpConfirmacao';

import './denuncia.css'

//import Dados from '../../services/dados.json'
import { GetMemoriasDenunciadas, GetMemoriesByID } from '../../services/api';
import FilterMemories from '../../components/filter-memories/FilterMemories';
import { memo } from 'react';

const DenunciaDashboard = () => {
  const [DenunciaInfoShow, setDenunciaInfoShow] = useState(false);
  const [confirmacaoAberta, setConfirmacaoAberta] = useState(false);
  const [sucessoAberto, setSucessoAberto] = useState(false);

  const [exibirDados, setExibirDados] = useState([]);
  const [memoriaSelecionada, setMemoriaSelecionada] = useState(null);

  const [openFilter, setOpenFilter] = useState(false);
  const [filtrarConteudo, setFiltrarConteudo] = useState([]);

  useEffect(

    () => {

      async function Carregar() {

        const apiDenunciadas = await GetMemoriasDenunciadas();

        const memoriasCompletas = []; // aqui, vou juntar os atributos das postadas com o das denunciadas;
        for(const denuncia of apiDenunciadas) { // percorro as denúncias;

          const memoria = await GetMemoriesByID(denuncia.idMemoria); // pego a memória relacionada ao ID;
          const memoriaCompleta = {...memoria, ...denuncia} // junto os atributos numa variável só com spread;
          memoriasCompletas.push(memoriaCompleta); //coloco no vetor memoriasCompletas;
        }

        console.log(memoriasCompletas);
        setExibirDados(memoriasCompletas);
      }

      Carregar();
    }, []
  );

  function handleDenunciaPopUp(e, memoria) {
    e.preventDefault();

    setMemoriaSelecionada(memoria);
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
        <h3>Denúncia</h3>
        <FilterMemories
          setExibirDados={setExibirDados}
          openFilter={openFilter}
          setOpenFilter={setOpenFilter}
        />
      </div>
      <div className="memorias-denuncias">
        {exibirDados.map((memoria) => { 
        return (
          <>
            <Polaroide
              key={memoria.id}
              titulo={memoria.titulo}
              imagem={memoria.imagensURL}
              rotation={false}
              onClick={(event) => handleDenunciaPopUp(event, memoria)}
            />
          </>
        )})}
      </div>

      {DenunciaInfoShow && memoriaSelecionada &&(
        <DenunciaPopUp
          titulo= {memoriaSelecionada.titulo}
          nome= {memoriaSelecionada.nomeAutor}
          titulo={memoriaSelecionada.titulo}
          nome={memoriaSelecionada.nomeAutor}
          data={memoriaSelecionada.dataMemoria}
          texto={memoriaSelecionada.relatoMemoria}
          tags={memoriaSelecionada.tags}
          lugar={memoriaSelecionada.ponto_memoria}
          email={memoriaSelecionada.contatoAutor[0]}
          outroContato={memoriaSelecionada.contatoAutor[1]}
          denuncia= {memoriaSelecionada.motivo}
          foto={memoriaSelecionada.imagensURL}
          onFechar={handleFechar}
          onDelete={handleAceitarRecusar}
          onIgnore={handleAceitarRecusar}
        />
      )}

      {confirmacaoAberta && (
        <PopUpConfirmacao onSim={handleSim} onNao={handleNao} />
      )}

      {sucessoAberto && <PopUpSucesso onFechar={handleFecharSucesso} />}
    </div>
  )
}

export default DenunciaDashboard