import { memo } from 'react'
import Search from '../../components/Campo_Busca/Search'
import CardMemories from '../../components/Card/CardMemories'
import FilterMemories from '../../components/filter-memories/FilterMemories'
import './memoria.css'

export const memorias = [
    {
        id: 1,
        title: 'Titulo para a polaroide do mural',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt qui expedita maxime voluptatum eligendi voluptates rerum! Error consequuntur velit laudantium illum atque possimus perferendis officia? Ipsam sunt quibusdam quidem alias?',
        text: 'Não foi a primeira vez que ouvi alguém dizer que a Pedra da Galinha tinha um som próprio. Mas sempre vinham com aquele riso no canto da boca, como quem conta uma história só pra ver até onde o outro acredita. Eu nunca fui desses. Sempre tratei a pedra como o que ela aparenta ser: um acidente geológico curioso, bonito, silencioso — principalmente silencioso. Só que silêncio demais também começa a incomodar.Naquele dia, o céu estava indeciso.Nem sol, nem chuva, uma luz meio opaca que deixava tudo com aparência de fotografia antiga. Eu tinha ido sem motivo específico, como quem repete um caminho só pra confirmar que ele ainda existe. Não havia quase ninguém por perto, o que já era estranho.Até o vento parecia ter desistido de circular. Foi aí que ouvi. Não foi alto.Nem claro.Mas também não dava pra ignorar.Um som curto, seco, deslocado daquele cenário.Não parecia vir de nenhum ponto específico — e, ao mesmo tempo, parecia vir de todos.Eu parei, mais por curiosidade do que por qualquer outra coisa.Esperei.O corpo reconhece certas coisas antes da cabeça, e havia algo ali que não encaixava. Veio de novo. Dessa vez, mais definido.Um cacarejo.Inconfundível.      Agora, você pode dizer que havia alguma galinha por perto.É uma explicação razoável.Eu mesmo pensei nisso.Olhei ao redor, procurei movimento, sombra, qualquer sinal de vida que justificasse aquilo.Nada.Nem cerca, nem casa, nem bicho.Só pedra, chão seco e aquele céu suspenso. Eu poderia ter ido embora ali mesmo.Teria sido a decisão mais sensata. Mas fiquei. Existe um tipo de insistência que não nasce da coragem, mas da incapacidade de aceitar uma explicação fácil demais.Dei alguns passos em direção à pedra.O som não veio de novo imediatamente, o que quase me fez acreditar que tudo tinha sido uma coincidência mal interpretada.Só que, quanto mais eu me aproximava, mais tinha a sensação de que estava entrando em algo — não um lugar físico, mas uma espécie de intervalo. Foi então que aconteceu de novo. Mais longo dessa vez.Não exatamente alto, mas presente.Um cacarejo que não ecoou — ele simplesmente existiu, como se o ar tivesse sido moldado pra produzir aquilo.E foi nesse momento que eu tive a impressão, rápida demais pra ser analisada com calma, de que a pedra não estava completamente imóvel.         Não, ela não se mexeu como um animal.Não houve deslocamento, nem transformação evidente.Mas havia uma vibração mínima, quase imperceptível, como quando você encosta a mão numa caixa de som e sente a música antes de ouvi- la.Foi algo assim.Um tremor contido, interno, como se o som viesse de dentro. Eu não toquei nela.Não naquele momento. Fiquei parado, observando, esperando que alguma lógica aparecesse e organizasse aquilo tudo.Mas a lógica tem esse defeito: ela demora quando a gente mais precisa dela.E o silêncio voltou.Completo, absoluto, como se o som anterior tivesse sido apagado da realidade. Eu poderia dizer que acabou aí. Mas não acabou.      Porque, enquanto eu ainda estava ali, tentando decidir o que fazer com aquilo, um terceiro som surgiu — mais baixo, quase um resquício do anterior.E dessa vez, não veio sozinho.Veio acompanhado de uma sensação difícil de nomear.Não era medo.Não era exatamente fascínio.Era mais próximo de reconhecimento.Como se aquilo não fosse totalmente estranho, só… esquecido. Foi nesse ponto que resolvi encostar. A pedra estava quente, como sempre.Nada fora do normal ao toque.Mas fiquei com a mão ali por alguns segundos a mais do que o necessário, esperando sentir de novo aquela vibração.Não senti.Ou talvez tenha sentido e não quis admitir. Quando me afastei, o céu já tinha mudado.A luz indecisa tinha dado lugar a um sol comum, quase irritantemente normal.Algumas pessoas começaram a aparecer ao longe, conversando, tirando fotos, como se aquele lugar nunca tivesse sido outra coisa além do que sempre foi. Eu não comentei com ninguém naquele dia. Nem no seguinte.     E, se você perguntar agora, eu provavelmente vou dizer que foi só impressão.Que o som poderia ter vindo de algum lugar distante, que a acústica fez o resto, que a mente completa o que não entende.Tudo isso faz sentido.São explicações possíveis. Mas, ainda assim, tem uma coisa. Desde aquele dia, toda vez que passo perto da Pedra da Galinha, eu diminuo o passo sem perceber.Às vezes paro.Não por muito tempo — só o suficiente pra escutar. E, curiosamente, nunca mais ouvi nada. O que, dependendo de como você pensa, pode ser ainda mais estranho.',
        image: 'https://fundacaomarquesdemelo.org/wp-content/uploads/2022/06/GalinhaChoca.png?w=640',
        tags: ['Memória afetiva', 'Lugar', 'Saudade', 'Lenda']
    },
    {
        id: 2,
        title: 'Titulo para a polaroide do mural',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt qui expedita maxime voluptatum eligendi voluptates rerum! Error consequuntur velit laudantium illum atque possimus perferendis officia? Ipsam sunt quibusdam quidem alias?',
        image: 'https://fundacaomarquesdemelo.org/wp-content/uploads/2022/06/GalinhaChoca.png?w=640',
        tags: ['Memória afetiva', 'Lugar', 'Saudade', 'Lenda']
    },
    {
        id: 3,
        title: 'Titulo para a polaroide do mural',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt qui expedita maxime voluptatum eligendi voluptates rerum! Error consequuntur velit laudantium illum atque possimus perferendis officia? Ipsam sunt quibusdam quidem alias?',
        image: 'https://fundacaomarquesdemelo.org/wp-content/uploads/2022/06/GalinhaChoca.png?w=640',
        tags: ['Memória afetiva', 'Lugar', 'Saudade', 'Lenda']
    },
    {
        id: 4,
        title: 'Titulo para a polaroide do mural',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt qui expedita maxime voluptatum eligendi voluptates rerum! Error consequuntur velit laudantium illum atque possimus perferendis officia? Ipsam sunt quibusdam quidem alias?',
        image: 'https://fundacaomarquesdemelo.org/wp-content/uploads/2022/06/GalinhaChoca.png?w=640',
        tags: ['Memória afetiva', 'Lugar', 'Saudade', 'Lenda']
    },
]

const Memoria = () => {
    return (
        <div className="memoria">
            <div className='area-search'>
                <Search />
                <FilterMemories />
            </div>
            {
                memorias.map((memoria) => (

                    <CardMemories
                        key={memoria.id}
                        id={memoria.id}
                        title={memoria.title}
                        description={memoria.description}
                        image={memoria.image}
                        tags={memoria.tags}
                    />

                ))
            }
        </div>
    )
}

export default Memoria