import "./PopUpFracasso.css";
import { useEffect, useState } from "react";

function PopUpFracasso({ onFechar, mensagem }) {

  const [saindo, setSaindo] = useState(false);

  useEffect(
    
    () => {

      const timerSaida = setTimeout(() => {setSaindo(true)}, 2500);
      const timer = setTimeout(() => {onFechar()}, 3000);

      return () => {
        clearTimeout(timer);
        clearTimeout(timerSaida);
      }

    }, [onFechar]
)

  return (

    <div className={`container-fracasso ${saindo ? "saindo" : ""}`}>
      <h2 className="titulo-fracasso">Erro!</h2>
      <p className="texto-fracasso">{mensagem}</p>
    </div>

  )
}

export default PopUpFracasso;
