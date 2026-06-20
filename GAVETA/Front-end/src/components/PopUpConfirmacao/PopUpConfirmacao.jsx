import { useEffect, useState } from "react";
import "./PopUpConfirmacao.css";

function PopUpConfirmacao({ onSim, onNao, avisoEnvio }) {
  const [status, setStatus] = useState(false)

  useEffect(() => {
    if (status) {
      setStatus(false)
    } else setStatus(true)
  }, [avisoEnvio])
  return (
    <div className="overlay-confir">
      <div className="container-confir">
        <p className="texto-confir">Tem certeza que quer concluir essa ação?</p>
        <div className="botoes-confir">
          {
            status ?
              <>
                <button className="btn-nao" onClick={onNao}>
                  NÃO
                </button>
                <button className="btn-sim" onClick={onSim}>
                  SIM
                </button>
              </>
              :
              <button className="btn-status" >ENVIANDO...</button>}
        </div>
      </div>
    </div>
  );
}

export default PopUpConfirmacao;
