import "./CuradoriaPendente.css";
import { IoCloseOutline } from "react-icons/io5";

function CuradoriaPendente({
  titulo,
  nome,
  data,
  texto,
  tags,
  lugar,
  email,
  outroContato,
  foto,
  onFechar,
  onAceitarRecusar,
}) {
  return (
    <div className="overlay">
      <div className="container">
        <div className="coluna-esquerda">
          <div className="campo">
            <span className="label">Título:</span>
            <span className="valor">{titulo}</span>
          </div>

          <div className="campo">
            <span className="label">Nome:</span>
            <span className="valor">{nome}</span>
            <span className="label nome-data-gap">Data:</span>
            <span className="valor">{data}</span>
          </div>

          <div className="campo">
            <span className="label">Texto:</span>
            <span className="v-texto">{texto}</span>
          </div>

          <div className="campo">
            <span className="label">Tags:</span>
            <div className="tags-container-curadoria">
              {tags.map((tag) => (
                <span className="tag" key={tag}>
                  <span className="tag-bolinha"></span>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="campo">
            <span className="label">Lugar:</span>
            <span className="valor">{lugar}</span>
          </div>

          <div className="contato-categoria">
            <div className="campo">
              <span className="label">Contato:</span>
              <div className="contatos">
                <span className="valor">{email}</span>
                {outroContato && <span className="valor">{outroContato}</span>}
              </div>
            </div>

            <div className="campo">
              <span className="label">Categoria:</span>
              <select className="menu-categoria">
                <option value="">Selecione...</option>
                <option value="historica">Memória histórica</option>
                <option value="cotidiana">Memória cotidiana</option>
              </select>
            </div>
          </div>
        </div>

        <div className="coluna-direita">
          <div className="direita-topo">
            <button className="btn-fechar" onClick={onFechar}> <IoCloseOutline/> </button>
            <div className="campo">
              <span className="label">Foto:</span>
              <img className="foto" src={foto} alt="Foto da memória" />
            </div>
          </div>

          <div className="direita-botoes">
            <button className="btn-recusar" onClick={onAceitarRecusar}>
              RECUSAR
            </button>
            <button className="btn-aceitar" onClick={onAceitarRecusar}>
              ACEITAR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CuradoriaPendente;
