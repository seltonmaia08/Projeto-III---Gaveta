import { IoMailOutline, IoLogoInstagram, IoLogoWhatsapp  } from "react-icons/io5";
import { FaRegCopyright } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import logo from "../../assets/imgs/logo_gaveta.svg"
import './footer.css'
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-infor">
                <section className="site-map">
                    <h3>Mapa do Site</h3>
                    <Link className="link" to="/">Mural</Link>
                    <Link className="link" to="/memoria">Memória</Link>
                    <Link className="link" to="/ponto-turistico">Pontos turísticos</Link>
                    <Link className="link" to="/compartilhar-memoria">Compartilhar memória</Link>
                </section>
                <section className="contacts">
                    <h3>Contatos</h3>
                    <a><IoMailOutline/> gaveta027@gmail.com</a>
                    <a><IoLogoInstagram/> @gaveta.27</a>
                    <a><IoLogoWhatsapp /> (88) 9 94002-8922</a>
                </section>
                <section className='logo'>
                    <img src={logo} alt="" />
                </section>
            </div>
            <div className="copyright">
                <p>
                    <b>Copyright </b> 
                     <FaRegCopyright/>
                    <b> 2026 GAVETA27 </b>. Todos os direitos reservados.
                    Nenhuma parte deste site pode ser reproduzida, distribuida
                    ou transmitida por qualquer meio sem autorização prévia.</p>
            </div>

        </div>
    )
}

export default Footer