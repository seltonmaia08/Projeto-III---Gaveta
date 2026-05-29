import { MdArrowBack } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import './Voltar.css'

function Voltar() {
    const navigate = useNavigate();

    return(
        <button className="icone-back" onClick={() => navigate(-1)}>
            <MdArrowBack />
        </button>
    )
}

export default Voltar