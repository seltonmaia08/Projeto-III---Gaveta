import { useNavigate } from "react-router-dom";
import "./ButtonExit.css"

function ButtonExit() {

    const navigate = useNavigate();
    const logout = () => {navigate("/login")}

    return (

        <>
            <button className="sairAdm" onClick={logout}><RxExit></RxExit><span>SAIR</span></button>        
        </>
    )
}

export default ButtonExit;