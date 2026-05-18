import { useState } from 'react';
import Polaroide from '../../components/polaroide/Polaroide'

import './denuncia.css'

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

const DenunciaDashboard = () => {
    const [curadoriaAberta, setCuradoriaAberta] = useState(false);

    function handlePopUpCuradoria() {
        setCuradoriaAberta(true);
    }

    return (
        <div className='denuncia-dashboard'>
            {memorias.map((memoria) => (
                <Polaroide
                    key={memoria.id}
                    title={memoria.title}
                    image={memoria.image}
                    rotation={false}
                    onclick={handlePopUpCuradoria}
                />
            ))}
        </div>
    )

}

export default DenunciaDashboard