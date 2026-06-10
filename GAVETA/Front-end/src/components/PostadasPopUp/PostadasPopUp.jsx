import "./PostadasPopUp.css";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdOutlineEdit } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";

function PostadasPopUp({
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
  onEditMode,
  onDelete,
}) {
  return (
    <div className="overlay">
      <div className="container-postada">
        <div className="coluna-esquerda-postada">
          <div className="campo-postada">
            <span className="label-postada">Título:</span>
            <span className="valor-postada">{titulo}</span>
          </div>

          <div className="campo-postada">
            <span className="label-postada">Nome:</span>
            <span className="valor-postada">{nome}</span>
            <span className="label-postada nome-data-gap-postada">Data:</span>
            <span className="valor-postada">{data}</span>
          </div>

          <div className="campo-postada-topo">
            <span className="label-postada">Texto:</span>
            <span className="v-texto-postada">{texto}</span>
          </div>

          <div className="campo-postada">
            <span className="label-postada">Tags:</span>
            <div className="tags-container-postada">
              {tags.map((tag) => (
                <span className="tag" key={tag}>
                  <span className="tag-bolinha"></span>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="campo-postada">
            <span className="label-postada">Lugar:</span>
            <span className="valor-postada">{lugar}</span>
          </div>

          <div className="contato-categoria-postada">
            <div className="campo-postada-topo">
              <span className="label-postada">Contato:</span>
              <div className="contatos-postada">
                <span className="valor-postada">{email}</span>
                {outroContato && <span className="valor-postada">{outroContato}</span>}
              </div>
            </div>

            <div className="campo-postada">
              <span className="label-postada">Categoria:</span>
              <span className="valor-postada">Memória histórica</span>
            </div>
          </div>
        </div>

        <div className="coluna-direita-postada">
          <div className="direita-topo-postada">
            <button className="btn-fechar-postada" onClick={onFechar}> <IoCloseOutline/> </button>
            <div className="campo-postada-topo">
              <span className="label-postada">Foto:</span>
              <img className="foto-postada" src={foto} alt="Foto da memória" />
            </div>
          </div>

          <div className="direita-botoes-postada">
            <button className="btn-excluir-postada" onClick={onDelete}> 
              <FaRegTrashAlt/>
            </button>
            <button className="btn-editar-postada" onClick={onEditMode}>
              <MdOutlineEdit/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostadasPopUp;