import Search from '../../components/Campo_Busca/Search'
import Polaroide from '../../components/polaroide/Polaroide'
import './pontosTuristicos.css'

const memorias = [
    { id: 1, title: 'Titulo para a polaroide do mural', image: 'https://fundacaomarquesdemelo.org/wp-content/uploads/2022/06/GalinhaChoca.png?w=640' },
    { id: 2, title: 'Titulo para a polaroide do mural', image: 'https://fundacaomarquesdemelo.org/wp-content/uploads/2022/06/GalinhaChoca.png?w=640' },
    { id: 3, title: 'Titulo para a polaroide do mural', image: 'https://fundacaomarquesdemelo.org/wp-content/uploads/2022/06/GalinhaChoca.png?w=640' },
    { id: 4, title: 'Titulo para a polaroide do mural', image: 'https://fundacaomarquesdemelo.org/wp-content/uploads/2022/06/GalinhaChoca.png?w=640' },
]


const PontoTuristico = () => {
    return (
        <div className='ponto-turistico'>
            <div className='campo-busca'>
                <Search />
            </div>
            <div className='content-ponto'>
                {
                    memorias.map((memoria) =>
                        <Polaroide
                            key={memoria.id}
                            title={memoria.title}
                            image={memoria.image}
                            rotation={false} />
                    )
                }
            </div>
        </div>
    )
}

export default PontoTuristico