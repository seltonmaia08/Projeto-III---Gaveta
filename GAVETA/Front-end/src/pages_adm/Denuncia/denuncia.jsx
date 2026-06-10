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
        <h3>Denúncia</h3>
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
          texto="Era uma tarde quente em Quixadá quando saímos para a trilha da Pedra da Galinha Choca. O sol parecia mais forte que o normal, refletindo nas rochas e deixando o ar seco, daqueles que fazem a garganta pedir água a cada poucos minutos. Éramos quatro amigos, cada um carregando uma mochila simples, celular no bolso e a falsa confiança de quem acredita conhecer bem o sertão.

        No começo, a subida parecia fácil. Entre risadas e histórias antigas, alguém apontava formações rochosas que lembravam animais, rostos ou objetos. O vento surgia às vezes, breve, quebrando o calor. Mas quanto mais avançávamos, mais o silêncio tomava conta do lugar. A cidade ficava distante e o único som constante era o dos passos sobre pedras soltas.
        
        Foi perto do topo que encontramos algo estranho: uma pequena cruz de madeira fincada entre duas rochas, envelhecida pelo tempo, sem nome ou data. A madeira estava tão desgastada que parecia ter passado décadas enfrentando sol, chuva e ventania. Ao lado dela havia uma garrafa de vidro parcialmente enterrada na areia avermelhada. A curiosidade falou mais alto. Um dos meus amigos retirou a garrafa com cuidado e percebeu que havia um papel dobrado dentro. Depois de alguma dificuldade para abrir a tampa enferrujada, conseguimos retirar o bilhete. A mensagem era curta, escrita com uma letra irregular e já desbotada pelo tempo: “Nem toda memória quer ser lembrada.” Por alguns segundos ficamos em silêncio, encarando aquelas palavras. Tentamos imaginar quem teria escrito aquilo, por qual motivo e há quanto tempo o bilhete estava ali. Surgiram hipóteses de todo tipo: uma brincadeira de turistas, uma lenda local ou até alguma espécie de homenagem esquecida. Apesar das piadas que fazíamos para aliviar a tensão, havia algo naquele lugar que despertava um desconforto difícil de explicar.

        Decidimos continuar a caminhada, mas o clima já não era o mesmo. O caminho parecia mais longo e o silêncio mais pesado, como se o sertão ao nosso redor tivesse mudado de comportamento. As conversas diminuíram e passamos a prestar atenção em detalhes que antes ignorávamos: marcas estranhas em algumas pedras, o som distante de algo que parecia um assobio levado pelo vento e a sensação constante de que não estávamos sozinhos. Quando finalmente alcançamos um ponto mais alto da trilha e olhamos para a imensidão de Quixadá, o cenário continuava tão bonito quanto antes, mas nenhum de nós conseguiu apreciar a vista da mesma forma. Havia uma estranha impressão de que aquele bilhete não tinha sido deixado para qualquer pessoa, mas para alguém que um dia pisaria exatamente naquele lugar. E, pela primeira vez desde que começamos a subida, tive a sensação de que a trilha não era apenas um caminho entre as pedras: era um lugar onde histórias antigas permaneciam vivas, escondidas entre as rochas, esperando por alguém disposto a encontrá-las."
          tags={["conto", "turismo"]}
          lugar="Açude do Cedro"
          email="robertoss2016@gmail.com"
          outroContato="(88) 99999-9999"
          denuncia="Conteúdo Impróprio"
          foto="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/80/20/ac/img-20190503-092801729.jpg?w=1000&h=1000&s=1"
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