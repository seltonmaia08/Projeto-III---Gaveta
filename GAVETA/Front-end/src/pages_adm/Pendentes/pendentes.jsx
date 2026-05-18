import "./pendentes.css";
import { useState } from "react";
import CuradoriaPendente from "../../components/CuradoriaPendente/CuradoriaPendente";
import PopUpConfirmacao from "../../components/PopUpConfirmacao/PopUpConfirmacao";
import PopUpSucesso from "../../components/PopUpSucesso/PopUpSucesso";
import Polaroide from "../../components/polaroide/Polaroide";

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

const PendentesDashboard = () => {
  const [curadoriaAberta, setCuradoriaAberta] = useState(false);
  const [confirmacaoAberta, setConfirmacaoAberta] = useState(false);
  const [sucessoAberto, setSucessoAberto] = useState(false);

  // function handlePopUpCuradoria() {
  //   setCuradoriaAberta(true);
  // }

  function handleAceitarRecusar() {
    setConfirmacaoAberta(true);
  }

  function handleNao() {
    setConfirmacaoAberta(false);
  }

  function handleSim() {
    setConfirmacaoAberta(false);
    setCuradoriaAberta(false);
    setSucessoAberto(true);
  }

  function handleFecharSucesso() {
    setSucessoAberto(false);
  }

  function handleFecharCuradoria() {
    setCuradoriaAberta(false);
  }

  return (
    <div className="pendentes-dashboard">
      {memorias.map((memoria) => (
        <Polaroide
          key={memoria.id}
          title={memoria.title}
          image={memoria.image}
          rotation={false}
        />
      ))}
      {curadoriaAberta && (
        <CuradoriaPendente
          titulo="Trilha da Galinha Choca"
          nome="Roberto Silva"
          data="27/04/2025"
          texto="Era uma tarde quente em Quixadá quando saímos para a trilha da Pedra da Galinha Choca. O sol parecia mais forte que o normal, refletindo nas rochas e deixando o ar seco, daqueles que fazem a garganta pedir água a cada poucos minutos. Éramos quatro amigos, cada um carregando uma mochila simples, celular no bolso e a falsa confiança de quem acredita conhecer bem o sertão.

        No começo, a subida parecia fácil. Entre risadas e histórias antigas, alguém apontava formações rochosas que lembravam animais, rostos ou objetos. O vento surgia às vezes, breve, quebrando o calor. Mas quanto mais avançávamos, mais o silêncio tomava conta do lugar. A cidade ficava distante e o único som constante era o dos passos sobre pedras soltas."
          tags={["conto", "turismo", "lenda popular", "nostálgico", "lugar"]}
          lugar="Açude do Cedro"
          email="robertoss2016@gmail.com"
          outroContato="(88) 99999-9999"
          foto="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/80/20/ac/img-20190503-092801729.jpg?w=1000&h=1000&s=1"
          onFechar={handleFecharCuradoria}
          onAceitarRecusar={handleAceitarRecusar}
        />
      )}
      {confirmacaoAberta && (
        <PopUpConfirmacao onSim={handleSim} onNao={handleNao} />
      )}
      {sucessoAberto && <PopUpSucesso onFechar={handleFecharSucesso} />}
    </div>
  );
};

export default PendentesDashboard;
