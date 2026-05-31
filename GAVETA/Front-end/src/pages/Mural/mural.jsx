import { memo, useState } from 'react'
import Polaroide from '../../components/polaroide/Polaroide'
import './mural.css'
import Dados from '../../services/dados.json'
//import MemoriasDao from '../../services/firebase/dao/MemoriaDao'

const Mural = () => {
  const [exibirDados, setExibirDados] = useState(Dados);

  // O firebase está funcionando corretamente. Aguardando para implementação futura das outras funcções...
  // console.log(MemoriasDao.getAll())
  return (
    <div className="mural">
      {exibirDados.map((memoria) => (
        <Polaroide
          key={memoria.id}
          id={memoria.id}
          titulo={memoria.titulo}
          imagem={memoria.imagem}
          rotation={true}
        />
      ))}
    </div>
  );
};

export default Mural;
