import Polaroide from '../../components/polaroide/Polaroide'
import './mural.css'

const memorias = [
    {id: 1, title: 'Titulo para a polaroide do mural', image: 'https://fundacaomarquesdemelo.org/wp-content/uploads/2022/06/GalinhaChoca.png?w=640'},
    {id: 2, title: 'Titulo para a polaroide do mural', image: 'https://fundacaomarquesdemelo.org/wp-content/uploads/2022/06/GalinhaChoca.png?w=640'},
    {id: 3, title: 'Titulo para a polaroide do mural', image: 'https://fundacaomarquesdemelo.org/wp-content/uploads/2022/06/GalinhaChoca.png?w=640'},
    {id: 4, title: 'Titulo para a polaroide do mural', image: 'https://fundacaomarquesdemelo.org/wp-content/uploads/2022/06/GalinhaChoca.png?w=640'},
]

const Mural = () => {
    return (
        <div className="mural">
            
            {
                memorias.map((memoria) => 
                    <Polaroide 
                    key={memoria.id}
                    title={memoria.title}
                    image={memoria.image}
                    rotation={true}/>
                )
            }

        </div>
    )
}

export default Mural