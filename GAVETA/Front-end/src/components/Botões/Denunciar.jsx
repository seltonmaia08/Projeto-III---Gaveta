import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { MdOutlineReport } from "react-icons/md";

import "./Denunciar.css";

import PopUpDenuncia from "../PopUpDenuncia/PopUpDenuncia";
import PopUpSucesso from "../PopUpSucesso/PopUpSucesso";

function Denunciar() {

    const [abrirPopup, setAbrirPopup] = useState(false);
    const [mostrarPopupSucesso, setMostrarPopupSucesso] = useState(false);
    const [posicao, setPosicao] = useState({ top: 0, right: 0 });
    const botaoRef = useRef(null);

    useEffect(() => {
        if (!abrirPopup) {
            return;
        }

        const rect = botaoRef.current.getBoundingClientRect();
        const alturaPopup = 410;
        const temEspacoAcima = rect.top > alturaPopup;

        setPosicao({
            top: temEspacoAcima
                ? rect.top + window.scrollY - alturaPopup
                : rect.bottom + window.scrollY,

            right: window.innerWidth - rect.right
        });
    }, [abrirPopup]);

    useEffect(() => {
        function fecharPopup(event) {
            const clicouNoPopup = event.target.closest(".popup-denuncia-portal");
            const clicouNoBotao = event.target.closest(".icone-denunciar");

            if (!clicouNoPopup && !clicouNoBotao) {
                setAbrirPopup(false);
            }
        }

        if (abrirPopup) {
            document.addEventListener("mousedown", fecharPopup);
        }

        return () => {
            document.removeEventListener("mousedown", fecharPopup);
        };
    }, [abrirPopup]);

    function abrirPopupSucesso() {
        setAbrirPopup(false);
        setMostrarPopupSucesso(true);
        setTimeout(() => {
            setMostrarPopupSucesso(false);
        }, 3000);
    }

    return (
        <div className="container-denunciar">
            <button
                ref={botaoRef}
                className="icone-denunciar"
                onClick={() => setAbrirPopup(prev => !prev)}
            >
                <MdOutlineReport />
            </button>

            {
                abrirPopup &&
                createPortal(
                    <div
                        className="popup-denuncia-portal"
                        style={{
                            top: `${posicao.top}px`,
                            right: `${posicao.right}px`
                        }}
                    >
                        <PopUpDenuncia
                            fecharPopup={() => setAbrirPopup(false)}
                            mostrarSucesso={abrirPopupSucesso}
                        />
                    </div>,
                    document.body
                )
            }
            {
                mostrarPopupSucesso &&
                createPortal(
                    <div className="popup-sucesso-global">
                        <PopUpSucesso
                            onFechar={() => setMostrarPopupSucesso(false)}
                        />
                    </div>,
                    document.body
                )
            }
        </div>
    );
}

export default Denunciar;