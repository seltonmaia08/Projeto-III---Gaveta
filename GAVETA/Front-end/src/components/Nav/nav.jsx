import { useState } from "react";
import ButtonNav from "../Button-nav/button-nav";
import './nav.css'

const buttons = [
    {id: 1, title: 'Mural', color: '#FDCD9D', colorText: '#313131', router: '/', admin: false},
    {id: 2, title: 'Memória', color: '#5C766D', colorText: '#EDE9E6', router: '/memoria', admin: false},
    {id: 3, title: 'Pontos turísticos', color: '#43251D', colorText: '#EDE9E6', router: '/ponto-turistico', admin: false},
    {id: 4, title: 'Compartilhar memórias', color: '#7A6047', colorText: '#EDE9E6', router: '/compartilhar-memoria', admin: false},

    // admin
    {id: 5, title: 'Postadas', color: '#5C766D', colorText: '#EDE9E6', router: '/postadasDashboard', admin: true},
    {id: 6, title: 'Pendentes', color: '#5C766D', colorText: '#EDE9E6', router: '/pendentesDashboard', admin: true},
    {id: 7, title: 'Denuncia', color: '#5C766D', colorText: '#EDE9E6', router: '/denunciaDashboard', admin: true}
]


const Nav = ({ admin = false }) => {

    const [activeIndex, setActiveIndex] = useState(null);

    const filteredButtons = buttons.filter(
        button => button.admin === admin
    );

    return (
        <nav className="nav-content">
            {
                filteredButtons.map((button) =>
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

export default Nav;
