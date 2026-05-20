import "./PopUpSucesso.css";
import { useEffect } from "react";

function PopUpSucesso({ onFechar }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFechar();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onFechar]);

  return (
    <div className="container-sucesso">
      <h2 className="titulo-sucesso">Sucesso!</h2>
      <p className="texto-sucesso">Sua ação foi concluída com êxito!</p>
    </div>
  );
}

export default PopUpSucesso;
