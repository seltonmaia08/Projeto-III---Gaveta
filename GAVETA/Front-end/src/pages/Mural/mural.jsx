import { memo, useEffect, useState } from "react";
import Polaroide from "../../components/polaroide/Polaroide";
import "./mural.css";
//import Dados from "../../services/dados.json";
import { GetMemoriesPostadas } from "../../services/api";

import fundoXadrez from "../../assets/imgs/fundo-xadrez.png";
import fundoEstrelaVerde from "../../assets/imgs/fundo-estrela-verde.png";
import fundoEstrelaPapel from "../../assets/imgs/fundo-estrela-papel.png";
import fundoRevista from "../../assets/imgs/fundo-revista.png";

const Mural = () => {
  const [exibirDados, setExibirDados] = useState([]);

  useEffect(() => {
    async function Carregar() {
      const apiMemories = await GetMemoriesPostadas();
      const embaralhadas = embaralharMemorias(apiMemories);
      setExibirDados(embaralhadas.slice(0, 10));
    }

    Carregar();
  }, []);

  const embaralharMemorias = (array) => {
    const novoArray = [...array];

    for (let i = novoArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [novoArray[i], novoArray[j]] = [novoArray[j], novoArray[i]];
    }
    return novoArray;
  };

  return (
    <div className="mural">
      <img src={fundoXadrez} className="fundo-elemento fundo-xadrez" />
      <img
        src={fundoEstrelaVerde}
        className="fundo-elemento fundo-estrela-verde"
      />
      <img
        src={fundoEstrelaPapel}
        className="fundo-elemento fundo-estrela-papel"
      />
      <img src={fundoRevista} className="fundo-elemento fundo-revista" />

      <div className="mural-polaroides">
        {exibirDados.map((memoria) => (
          <Polaroide
            key={memoria.id}
            titulo={memoria.titulo}
            imagem={memoria.imagensURL}
            id={memoria.id}
            rotation={true}
            comFita={true}
          />
        ))}
      </div>
    </div>
  );
};

export default Mural;
