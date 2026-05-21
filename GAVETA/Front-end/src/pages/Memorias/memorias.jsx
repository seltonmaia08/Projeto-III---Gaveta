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
        text: 'Não foi a primeira vez que ouvi alguém dizer que a Pedra da Galinha tinha um som próprio. Mas sempre vinham com aquele riso no canto da boca, como quem conta uma história só pra ver até onde o outro acredita. Eu nunca fui desses. Sempre tratei a pedra como o que ela aparenta ser: um acidente geológico curioso, bonito, silencioso — principalmente silencioso. Só que silêncio demais também começa a incomodar.Naquele dia, o céu estava indeciso.Nem sol, nem chuva, uma luz meio opaca que deixava tudo com aparência de fotografia antiga. Eu tinha ido sem motivo específico, como quem repete um caminho só pra confirmar que ele ainda existe. Não havia quase ninguém por perto, o que já era estranho.Até o vento parecia ter desistido de circular. Foi aí que ouvi. Não foi alto.Nem claro.Mas também não dava pra ignorar. Não foi a primeira vez que ouvi alguém dizer que a Pedra da Galinha tinha um som próprio. Mas sempre vinham com aquele riso no canto da boca, como quem conta uma história só pra ver até onde o outro acredita. Eu nunca fui desses. Sempre tratei a pedra como o que ela aparenta ser: um acidente geológico curioso, bonito, silencioso — principalmente silencioso. Só que silêncio demais também começa a incomodar.Naquele dia, o céu estava indeciso.Nem sol, nem chuva, uma luz meio opaca que deixava tudo com aparência de fotografia antiga. Eu tinha ido sem motivo específico, como quem repete um caminho só pra confirmar que ele ainda existe. Não havia quase ninguém por perto, o que já era estranho.Até o vento parecia ter desistido de circular. Foi aí que ouvi. Não foi alto.Nem claro.Mas também não dava pra ignorar.Não foi a primeira vez que ouvi alguém dizer que a Pedra da Galinha tinha um som próprio. Mas sempre vinham com aquele riso no canto da boca, como quem conta uma história só pra ver até onde o outro acredita. Eu nunca fui desses. Sempre tratei a pedra como o que ela aparenta ser: um acidente geológico curioso, bonito, silencioso — principalmente silencioso. Só que silêncio demais também começa a incomodar.Naquele dia, o céu estava indeciso.Nem sol, nem chuva, uma luz meio opaca que deixava tudo com aparência de fotografia antiga. Eu tinha ido sem motivo específico, como quem repete um caminho só pra confirmar que ele ainda existe. Não havia quase ninguém por perto, o que já era estranho.Até o vento parecia ter desistido de circular. Foi aí que ouvi. Não foi alto.Nem claro.Mas também não dava pra ignorar. Naquele dia, o céu estava indeciso.Nem sol, nem chuva, uma luz meio opaca que deixava tudo com aparência de fotografia antiga. Eu tinha ido sem motivo específico, como quem repete um caminho só pra confirmar que ele ainda existe. Não havia quase ninguém por perto, o que já era estranho.Até o vento parecia ter desistido de circular. Foi aí que ouvi. Não foi alto.Nem claro.Mas também não dava pra ignorar. Naquele dia, o céu estava indeciso.Nem sol, nem chuva, uma luz meio opaca que deixava tudo com aparência de fotografia antiga. Eu tinha ido sem motivo específico, como quem repete um caminho só pra confirmar que ele ainda existe. Não havia quase ninguém por perto, o que já era estranho.Até o vento parecia ter desistido de circular. Foi aí que ouvi. Não foi alto.Nem claro.Mas também não dava pra ignorar. Naquele dia, o céu estava indeciso.Nem sol, nem chuva, uma luz meio opaca que deixava tudo com aparência de fotografia antiga. Eu tinha ido sem motivo específico, como quem repete um caminho só pra confirmar que ele ainda existe. Não havia quase ninguém por perto, o que já era estranho.Até o vento parecia ter desistido de circular. Foi aí que ouvi. Não foi alto.Nem claro.Mas também não dava pra ignorar.',
        image: 'https://fundacaomarquesdemelo.org/wp-content/uploads/2022/06/GalinhaChoca.png?w=640',
        tags: ['Memória afetiva', 'Lugar', 'Saudade', 'Lenda']
    },
    {
        id: 2,
        title: 'Titulo para a polaroide do mural',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt qui expedita maxime voluptatum eligendi voluptates rerum! Error consequuntur velit laudantium illum atque possimus perferendis officia? Ipsam sunt quibusdam quidem alias?',
        image: 'https://fundacaomarquesdemelo.org/wp-content/uploads/2022/06/GalinhaChoca.png?w=640',
        text: 'Não foi a primeira vez que ouvi alguém dizer que a Pedra da Galinha tinha um som próprio. Mas sempre vinham com aquele riso no canto da boca, como quem conta uma história só pra ver até onde o outro acredita. Eu nunca fui desses. Sempre tratei a pedra como o que ela aparenta ser: um acidente geológico curioso, bonito, silencioso — principalmente silencioso. Só que silêncio demais também começa a incomodar.Naquele dia, o céu estava indeciso.Nem sol, nem chuva, uma luz meio opaca que deixava tudo com aparência de fotografia antiga. Eu tinha ido sem motivo específico, como quem repete um caminho só pra confirmar que ele ainda existe. Não havia quase ninguém por perto, o que já era estranho.Até o vento parecia ter desistido de circular. Foi aí que ouvi. Não foi alto.Nem claro.Mas também não dava pra ignorar.',
        tags: ['Memória afetiva', 'Lugar', 'Saudade', 'Lenda']
    },
    {
        id: 3,
        title: 'Titulo para a polaroide do mural',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt qui expedita maxime voluptatum eligendi voluptates rerum! Error consequuntur velit laudantium illum atque possimus perferendis officia? Ipsam sunt quibusdam quidem alias?',
        text: 'Não foi a primeira vez que ouvi alguém dizer que a Pedra da Galinha tinha um som próprio. Mas sempre vinham com aquele riso no canto da boca, como quem conta uma história só pra ver até onde o outro acredita. Eu nunca fui desses. Sempre tratei a pedra como o que ela aparenta ser: um acidente geológico curioso, bonito, silencioso — principalmente silencioso. Só que silêncio demais também começa a incomodar.Naquele dia, o céu estava indeciso.Nem sol, nem chuva, uma luz meio opaca que deixava tudo com aparência de fotografia antiga. Eu tinha ido sem motivo específico, como quem repete um caminho só pra confirmar que ele ainda existe. Não havia quase ninguém por perto, o que já era estranho.Até o vento parecia ter desistido de circular. Foi aí que ouvi. Não foi alto.Nem claro.Mas também não dava pra ignorar.',
        image: 'https://fundacaomarquesdemelo.org/wp-content/uploads/2022/06/GalinhaChoca.png?w=640',
        tags: ['Memória afetiva', 'Lugar', 'Saudade', 'Lenda']
    },
    {
        id: 4,
        title: 'Titulo para a polaroide do mural',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt qui expedita maxime voluptatum eligendi voluptates rerum! Error consequuntur velit laudantium illum atque possimus perferendis officia? Ipsam sunt quibusdam quidem alias?',
        text: 'Não foi a primeira vez que ouvi alguém dizer que a Pedra da Galinha tinha um som próprio. Mas sempre vinham com aquele riso no canto da boca, como quem conta uma história só pra ver até onde o outro acredita. Eu nunca fui desses. Sempre tratei a pedra como o que ela aparenta ser: um acidente geológico curioso, bonito, silencioso — principalmente silencioso. Só que silêncio demais também começa a incomodar.Naquele dia, o céu estava indeciso.Nem sol, nem chuva, uma luz meio opaca que deixava tudo com aparência de fotografia antiga. Eu tinha ido sem motivo específico, como quem repete um caminho só pra confirmar que ele ainda existe. Não havia quase ninguém por perto, o que já era estranho.Até o vento parecia ter desistido de circular. Foi aí que ouvi. Não foi alto.Nem claro.Mas também não dava pra ignorar.',
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