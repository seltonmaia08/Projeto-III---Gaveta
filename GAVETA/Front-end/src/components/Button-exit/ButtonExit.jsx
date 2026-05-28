import { useNavigate } from "react-router-dom";
import { RxExit } from "react-icons/rx";
import "./ButtonExit.css"

function ButtonExit() {

    const navigate = useNavigate();
    const logout = () => {navigate("/login")}

    return (

        <>
            <button className="sairAdm" onClick={logout}><RxExit></RxExit>SAIR</button>
        </>
    )
}

export default ButtonExit;