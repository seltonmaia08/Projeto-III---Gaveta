import { useState } from "react";
import { IoCheckmarkOutline } from "react-icons/io5";
import { DenunciarMemorias } from "../../services/api";

import "./PopUpDenuncia.css";

function PopUpDenuncia({ fecharPopup, mostrarSucesso, idMemoria }) {

    const [selecionado, setSelecionado] = useState("");

    const denuncias = [
        "Direito de Imagem",
        "Difamação",
        "Conteúdo Falso",
        "Linguagem Inadequada",
        "Conteúdo Impróprio",
        "Dados Pessoais"
    ];

    function toggleSelecionado(item) {
        if (selecionado === item) {
            setSelecionado("");
        } else {
            setSelecionado(item);
        }
    }
    
    async function enviarDenuncia() {
        if (!selecionado) return;

        const novaDenuncia = {
            id_memoria: idMemoria,
            motivo: selecionado,
        }
        try{
            await DenunciarMemorias(novaDenuncia)
        } catch(error) {
            console.log(error.message)
        }

        fecharPopup();
        mostrarSucesso();
    }

    return (
        <div className="container-denuncia">
            {denuncias.map((item) => (
                <p
                    key={item}
                    className={`item-denuncia ${
                        selecionado === item ? "ativo" : ""
                    }`}
                    onClick={() => toggleSelecionado(item)}
                >
                    {item}
                    <span>
                        {selecionado === item && (
                            <IoCheckmarkOutline />
                        )}
                    </span>
                </p>
            ))}

            <button
                className={`btn-enviar ${ selecionado ? "ativo" : "" }`}
                onClick={enviarDenuncia}
                disabled={!selecionado}
            >
                ENVIAR
            </button>
        </div>
    );
}

export default PopUpDenuncia;