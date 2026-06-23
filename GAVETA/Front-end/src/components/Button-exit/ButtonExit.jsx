import { useNavigate } from "react-router-dom";
import { RxExit } from "react-icons/rx";
import "./ButtonExit.css"
import { auth } from '../../services/firebase'
import { signOut } from 'firebase/auth'

function ButtonExit() {

    const navigate = useNavigate();
    const logout = async () => {
        try{
            await signOut(auth)
            navigate("/login")
        } catch (error) {
            console.log("Error ao tentar sair...", error.message)
        }
    }

    return (

        <>
            <button className="sairAdm" onClick={logout}><RxExit></RxExit>SAIR</button>
        </>
    )
}

export default ButtonExit;