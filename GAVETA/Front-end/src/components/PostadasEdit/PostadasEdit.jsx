import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import "./PostadasEdit.css";

function PostadasEdit({
  titulo: tituloInicial,
  nome: nomeInicial,
  data: dataInicial,
  texto: textoInicial,
  tags: tagsIniciais = [],
  lugar: lugarInicial,
  email: emailInicial,
  outroContato: outroContatoInicial,
  foto,
  onClose,              // Função vinda do Dashboard para fechar a edição
  onSave,               // Nova: Para salvar as alterações feitas
  onDelete,             // Para manter a opção de excluir se desejar
}) {

  //const hoje = new Date().toISOString().split("T")[0]; //nova data, em string padrão internacional, dividida em data/hora,
  // separada por T, mas só quero o primeiro resultado (a data);

  // Estados para gerenciar as edições do formulário
  const [titulo, setTitulo] = useState(tituloInicial);
  const [nome, setNome] = useState(nomeInicial);
  const [data, setData] = useState(dataInicial);
  const [texto, setTexto] = useState(textoInicial);
  const [lugar, setLugar] = useState(lugarInicial);
  const [email, setEmail] = useState(emailInicial);
  const [outroContato, setOutroContato] = useState(outroContatoInicial);
  const [categoria, setCategoria] = useState("");

  // Handler para quando o usuário clicar em Salvar/Aceitar Edição
  function handleSalvar(e) {
    e.preventDefault();
    // Monta o objeto com os dados atualizados
    const dadosAtualizados = {
      titulo,
      nome,
      data,
      texto,
      lugar,
      email,
      outroContato,
      categoria,
    };
    
    if (onSave) {
      onSave(dadosAtualizados);
    }
  }

  return (
    <div className="overlay">
      <form className="container-editando" onSubmit={handleSalvar}>
        <div className="coluna-esquerda-editando">
          
          <div className="campo-editando">
            <label className="label-editando">Título:</label>
            <input 
              type="text" 
              className="input-edit"
              value={titulo} 
              onChange={(e) => setTitulo(e.target.value)} 
            />
          </div>

          <div className="campo-postada">
            <span className="label-postada">Nome:</span>
            <span className="input-edit-bloqueado">{nome}</span>
            <span className="label-postada nome-data-gap-postada">Data:</span>
            <span className="input-edit-bloqueado">{data}</span>
          </div>

          <div className="campo-editando-topo">
            <label className="label-editando">Texto:</label>
            <textarea 
              className="v-texto-editando"
              value={texto} 
              onChange={(e) => setTexto(e.target.value)}
              rows={6}
            />
          </div>

          <div className="campo-editando">
            <span className="label-editando">Tags:</span>
            <div className="tags-container-editando">
              {tagsIniciais.map((tag) => (
                <span className="tag" key={tag}>
                  <span className="tag-bolinha"></span>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="campo-postada">
            <span className="label-postada">Lugar:</span>
            <span className="input-edit-bloqueado">{lugar}</span>
          </div>

          <div className="contato-categoria-editando">
            <div className="campo-postada-topo">
              <span className="label-postada">Contato:</span>
              <div className="contatos-postada">
                <span className="input-edit-bloqueado">{email}</span>
                {outroContato && <span className="input-edit-bloqueado">{outroContato}</span>}
              </div>
            </div>

            <div className="campo-editando">
              <label className="label-editando">Categoria:</label>
              <select 
                className="menu-categoria"
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
              >
                <option value="">Selecione...</option>
                <option value="historica">Memória histórica</option>
                <option value="cotidiana">Memória cotidiana</option>
              </select>
            </div>
          </div>
        </div>

        <div className="coluna-direita-editando">
          <div className="direita-topo-editando">
            {/* O botão X agora chama a função onClose vinda do Dashboard */}
            <button type="button" className="btn-fechar" onClick={onClose}>
              <IoCloseOutline/>
            </button>
            <div className="campo-editando-topo">
              <span className="label-editando">Foto:</span>
              <img className="foto-editando" src={foto} alt="Foto da memória" />
            </div>
          </div>

          <div className="direita-botoes-editando">
            {/* type="submit" faz disparar o handleSalvar no onSubmit do formulário */}
            <button type="button" className="btn-recusar-edit" onClick={onDelete}>
              <span>DESCARTAR</span>
            </button>
            <button type="submit" className="btn-aceitar-edit" onClick={onSave}>
              <span>SALVAR</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  )

  /*
    <div className="campo-editando">
      <label className="label-editando">Nome:</label>
      <input 
        type="text" 
        className="input-edit"
        value={nome} 
        onChange={(e) => setNome(e.target.value)} 
      />
      
      <label className="label-editando nome-data-gap-editando">Data:</label>
      <input 
        type="date"
        max={hoje}
        className="input-edit input-data"
        value={data} 
        onChange={(e) => setData(e.target.value)} 
      />
    </div>
    <div className="campo-editando">
      <label className="label-editando">Lugar:</label>
      <input 
        type="text" 
        className="input-edit"
        value={lugar} 
        onChange={(e) => setLugar(e.target.value)} 
      />
    </div>
    <div className="campo-editando-topo">
      <label className="label-editando">Contato:</label>
      <div className="contatos-editando">
        <input 
          type="email" 
          className="input-edit"
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <input 
          type="text" 
          className="input-edit"
          value={outroContato} 
          placeholder="Outro contato"
          onChange={(e) => setOutroContato(e.target.value)} 
        />
      </div>
    </div>
  */
}

export default PostadasEdit;