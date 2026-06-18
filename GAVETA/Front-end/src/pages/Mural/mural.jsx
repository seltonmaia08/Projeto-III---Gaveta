import { memo, useEffect, useState } from "react";
import Polaroide from "../../components/polaroide/Polaroide";
import "./mural.css";
//import Dados from "../../services/dados.json";
import { GetMemoriesPostadas } from "../../services/api";

const Mural = () => {

  const [exibirDados, setExibirDados] = useState([]);
  // O firebase está funcionando corretamente. Aguardando para implementação futura das outras funções...
  // console.log(MemoriasDao.getAll())

  useEffect(
    () => {

      async function Carregar() {

        const apiMemories = await GetMemoriesPostadas();
        setExibirDados(embaralharMemorias(apiMemories));
      }
      
      Carregar()

    }, []
  )

  const embaralharMemorias = (array) => {

    const novoArray = [...array]

    for(let i = novoArray.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * (i + 1));
      [novoArray[i], novoArray[j]] = [novoArray[j], novoArray[i]] 
    }
    return novoArray
  }

  return (
    <div className="mural">
      {exibirDados.map((memoria) => (
        <Polaroide
          key={memoria.id}
          titulo={memoria.titulo}
          imagem={memoria.imagensURL}
          id={memoria.id}
          rotation={true}
        />
      ))}
    </div>
  );
};

export default Mural;