import "./PopUpConfirmacao.css";

function PopUpConfirmacao({ onSim, onNao }) {
  return (
    <div className="overlay-confir">
      <div className="container-confir">
        <p className="texto-confir">Tem certeza que quer concluir essa ação?</p>
        <div className="botoes-confir">
          <button className="btn-sim" onClick={onSim}>
            SIM
          </button>
          <button className="btn-nao" onClick={onNao}>
            NÃO
          </button>
        </div>
      </div>
    </div>
  );
}

export default PopUpConfirmacao;
