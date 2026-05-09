import Nav from "../Nav/Nav"
import './header.css'
import logo from "../../assets/imgs/logo_gaveta.svg"

const Header = () => {
    return (
        <div className="header-content">
            <div className="logo">
                <img src={logo} alt="Logo do site Gaveta 27" />
            </div>
            <Nav/>            
        </div>
    )
}

export default Header