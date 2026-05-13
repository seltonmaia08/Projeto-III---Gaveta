import { memo } from 'react'
import Search from '../../components/Campo_Busca/Search'
import CardMemories from '../../components/Card/CardMemories'
import FilterMemories from '../../components/filter-memories/FilterMemories'
import './memoria.css'

const memorias = [
    {
        id: 1,
        title: 'Titulo para a polaroide do mural',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt qui expedita maxime voluptatum eligendi voluptates rerum! Error consequuntur velit laudantium illum atque possimus perferendis officia? Ipsam sunt quibusdam quidem alias?',
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
                <FilterMemories/>
            </div>
            {
                memorias.map((memoria) =>
                    <CardMemories
                        key = { memoria.id }
                        title = { memoria.title }
                        description = { memoria.description }
                        image = { memoria.image }
                        tags = { memoria.tags }
                    />
                )
            }
        </div>
    )
}

export default Memoria