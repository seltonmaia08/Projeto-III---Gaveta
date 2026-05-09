import { useState } from "react";
import ButtonNav from "../Button-nav/button-nav";
import './nav.css'

const buttons = [
    {id: 1, title: 'Mural', color: '#FDCD9D', colorText: '#313131', router: '/'},
    {id: 2, title: 'Memória', color: '#5C766D', colorText: '#EDE9E6', router: '/memoria'},
    {id: 3, title: 'Pontos turísticos', color: '#43251D', colorText: '#EDE9E6', router: '/ponto-turistico'},
    {id: 4, title: 'Compartilhar memórias', color: '#7A6047', colorText: '#EDE9E6', router: '/compartilhar-memoria'},
]

const Nav = () => {

    const [activeIndex, setActiveIndex] = useState('mural')    

    return (
        <nav className="nav-content">
            {
                buttons.map((button) =>
                    <ButtonNav
                        key={button.id}
                        title={button.title}
                        color={button.color}
                        colorText={button.colorText}
                        router={button.router}
                        isActive={activeIndex === button.id}
                        onClick={() => setActiveIndex(button.id)}
                    />
                )
            }
        </nav>
    )
}

export default Nav
