import Nav from "../Nav/Nav";
import './header.css';

import logo from "../../assets/imgs/logo_gaveta.svg";

import { useLocation } from "react-router-dom";

const Header = () => {

    const location = useLocation();

    const adminRoutes = [
        '/postadasDashboard',
        '/pendentesDashboard',
        '/denunciaDashboard'
    ];

    const isAdmin = adminRoutes.includes(location.pathname);

    return (
        <div className={`header-content ${isAdmin ? 'admin-header' : ''}`}>
            <div className="logo">
                <img
                    src={logo}
                    alt="Logo do site Gaveta 27"
                />
            </div>

            <Nav admin={isAdmin} />
        </div>
    );
};

export default Header;