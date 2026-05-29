import { useState } from "react";
import { IoCheckmarkOutline } from "react-icons/io5";

import "./PopUpDenuncia.css";

function PopUpDenuncia({ fecharPopup, mostrarSucesso }) {

    const [selecionados, setSelecionados] = useState([]);

    const denuncias = [
        "Direito de Imagem",
        "Conteúdo Sensível",
        "Difamação",
        "Conteúdo Falso",
        "Linguagem Inadequada",
        "Conteúdo Impróprio",
        "Dados Pessoais"
    ];

    function toggleSelecionado(item) {
        if (selecionados.includes(item)) {
            setSelecionados(selecionados.filter(denuncia => denuncia !== item));
        } else {
            setSelecionados([...selecionados, item]);
        }
    }

    function enviarDenuncia() {
        fecharPopup();
        mostrarSucesso();
    }

    return (

        <div className="container-denuncia">
            {
                denuncias.map((item) => (
                    <p
                        key={item}
                        className={`item-denuncia ${ selecionados.includes(item) ? "ativo" : "" }`}
                        onClick={() => toggleSelecionado(item)}
                    >
                        {item}
                        <span>
                            {
                                selecionados.includes(item) &&
                                <IoCheckmarkOutline />
                            }
                        </span>
                    </p>
                ))
                
            }
            <button
                className={`btn-enviar ${ selecionados.length >= 1 ? "ativo" : "" }`}
                onClick={enviarDenuncia}
            >
                ENVIAR
            </button>
        </div>

    );
}

export default PopUpDenuncia;