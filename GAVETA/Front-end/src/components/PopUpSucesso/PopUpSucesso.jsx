import "./PopUpSucesso.css";
import { useEffect, useState } from "react";

function PopUpSucesso({ onFechar }) {

  const [saindo, setSaindo] = useState(false);

  useEffect(() => {

      const timerSaida = setTimeout(() => {setSaindo(true)}, 2500);
      const timer = setTimeout(() => {onFechar()}, 3000);

      return () => {
        clearTimeout(timer);
        clearTimeout(timerSaida);
      }

    }, [onFechar]
  );

  return (
    <div className={`container-sucesso ${saindo ? "saindo" : ""}`}>
      <h2 className="titulo-sucesso">Sucesso!</h2>
      <p className="texto-sucesso">Sua ação foi concluída com êxito!</p>
    </div>
  );
}

export default PopUpSucesso;
