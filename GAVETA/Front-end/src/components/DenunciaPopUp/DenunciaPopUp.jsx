import "./DenunciaPopUp.css";
import { IoCloseOutline } from "react-icons/io5";

function DenunciaPopUp({
  titulo,
  nome,
  data,
  texto,
  tags,
  lugar,
  email,
  outroContato,
  denuncia,
  foto,
  onFechar,
  onDelete,
  onIgnore,
}) {
  return (
    <div className="overlay">
      <div className="container-denu">
        <div className="coluna-esquerda-denu">
          <div className="campo-denu">
            <span className="label-denu">Título:</span>
            <span style={{width: '100%'}} className="valor-denu">{titulo}</span>
          </div>

          <div className="campo-denu">
            <span className="label-denu">Nome:</span>
            <span className="valor-denu">{nome}</span>
            <span className="label-denu nome-data-gap-denu">Data:</span>
            <span className="valor-denu">{String(data).replace(/[-]/g, '/')}</span>
          </div>

          <div className="campo-denu">
            <span className="label-denu">Texto:</span>
            <span className="v-texto-denu">{texto}</span>
          </div>

          <div className="campo-denu">
            <span className="label-denu">Tags:</span>
            <div className="tags-container-denu">
              {tags.map((tag) => (
                <span className="tag-denu" key={tag}>
                  <span className="tag-bolinha-denu"></span>
                  {tag}
                </span>
              ))}
            </div>
          </div>


          <div className="contato-categoria-denu">
            <div className="campo-denu">
              <span className="label-denu">Lugar:</span>
              <span style={{width: '70%'}} className="valor-denu">{lugar}</span>
            </div>

            <div className="campo-denu">
              <span className="label-denu">Contato:</span>
              <div className="contatos-denu">
                <span className="valor-denu">{email}</span>
                {outroContato && <span className="valor-denu">{outroContato}</span>}
              </div>
            </div>

            <div className="campo-denu">
              <span className="label-denu">Categoria:</span>
              <span className="valor-denu">Memória histórica</span>
            </div>
          </div>

          <div className="denuncia"> 
              <span className="label-denu">Denúncia:</span>
              <span className="valor-denu">{denuncia}</span>
            </div>
        </div>

        <div className="coluna-direita-denu">
          <div className="direita-topo-denu">
            <button className="btn-fechar-denu" onClick={onFechar}> <IoCloseOutline/> </button>
            <div className="campo-denu">
              <span className="label-denu">Foto:</span>
              <img className="foto-denu" src={foto} alt="Foto da memória" />
            </div>
          </div>

          <div className="direita-botoes-denu">
            <button className="btn-excluir-memoria" onClick={onDelete}> 
              EXCLUIR MEMÓRIA
            </button>
            <button className="btn-ignorar" onClick={onIgnore}>
              IGNORAR DENÚNCIA
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DenunciaPopUp;
