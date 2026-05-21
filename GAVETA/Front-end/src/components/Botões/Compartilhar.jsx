import { PiShareFatBold } from "react-icons/pi";
import { useState } from "react";

import "./Compartilhar.css";

function Compartilhar() {
  const [mostrarModal, setMostrarModal] = useState(false);
  const [saindo, setSaindo] = useState(false);

  const compartilhar = async () => {
    const link = window.location.href;

    try {
      await navigator.clipboard.writeText(link);

      setMostrarModal(true);
      setSaindo(false);

      setTimeout(() => {
        setSaindo(true);

        setTimeout(() => {
          setMostrarModal(false);
        }, 300);

      }, 3000);

    } catch (erro) {
      console.log("Erro ao copiar:", erro);
    }
  };

  return (
    <div>
      <button
        onClick={compartilhar}
        className="icone-compartilhar"
      >
        <PiShareFatBold />
      </button>

      {mostrarModal && (
        <div className={`modal-copiado ${saindo ? "saindo" : ""}`}>
          Link copiado para a área de transferência!
        </div>
      )}
    </div>
  );
}

export default Compartilhar;