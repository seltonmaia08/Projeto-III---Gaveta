import { useNavigate } from 'react-router-dom'

import Search from '../../components/Campo_Busca/Search'
import Polaroide from '../../components/polaroide/Polaroide'

import './pontosTuristicos.css'

const memorias = [
    {
        id: 1,
        title: 'Titulo para a polaroide do mural',
        image: 'https://fundacaomarquesdemelo.org/wp-content/uploads/2022/06/GalinhaChoca.png?w=640'
    },
    {
        id: 2,
        title: 'Titulo para a polaroide do mural',
        image: 'https://fundacaomarquesdemelo.org/wp-content/uploads/2022/06/GalinhaChoca.png?w=640'
    },
    {
        id: 3,
        title: 'Titulo para a polaroide do mural',
        image: 'https://fundacaomarquesdemelo.org/wp-content/uploads/2022/06/GalinhaChoca.png?w=640'
    },
    {
        id: 4,
        title: 'Titulo para a polaroide do mural',
        image: 'https://fundacaomarquesdemelo.org/wp-content/uploads/2022/06/GalinhaChoca.png?w=640'
    },
]

const PontoTuristico = () => {

    const navigate = useNavigate()

    const abrirPontoTuristico = (id) => {
        navigate(`/ponto-turistico-especifico/${id}`)
    }

    return (
        <div className='ponto-turistico'>

            <div className='campo-busca'>
                <Search />
            </div>

            <div className='content-ponto-turistico'>

                {memorias.map((memoria) => (

                    <div
                        key={memoria.id}
                        onClick={() => abrirPontoTuristico(memoria.id)}
                        style={{ cursor: 'pointer' }}
                    >
                        <Polaroide
                            title={memoria.title}
                            image={memoria.image}
                            rotation={false}
                        />
                    </div>

                ))}

            </div>
        </div>
    )
}

export default PontoTuristico