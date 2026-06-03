import "./PopUpFracasso.css";
import { useEffect } from "react";

function PopUpFracasso({ onFechar, mensagem }) {

  useEffect(
    
    () => {
        const timer = setTimeout(() => {
        onFechar();
        }, 3000);

        return () => clearTimeout(timer);
    }, [onFechar]
)

  return (

    <div className="container-fracasso">
      <h2 className="titulo-fracasso">Falha!</h2>
      <p className="texto-fracasso">{mensagem}</p>
    </div>

  )
}

export default PopUpFracasso;
