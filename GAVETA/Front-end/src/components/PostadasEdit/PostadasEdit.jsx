import { useState } from "react";
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
      <form className="container" onSubmit={handleSalvar}>
        <div className="coluna-esquerda">
          
          <div className="campo">
            <label className="label">Título:</label>
            <input 
              type="text" 
              className="input-edit"
              value={titulo} 
              onChange={(e) => setTitulo(e.target.value)} 
            />
          </div>

          <div className="campo">
            <label className="label">Nome:</label>
            <input 
              type="text" 
              className="input-edit"
              value={nome} 
              onChange={(e) => setNome(e.target.value)} 
            />
            
            <label className="label nome-data-gap">Data:</label>
            <input 
              type="text" 
              className="input-edit input-data"
              value={data} 
              onChange={(e) => setData(e.target.value)} 
            />
          </div>

          <div className="campo">
            <label className="label">Texto:</label>
            <textarea 
              className="textarea-edit"
              value={texto} 
              onChange={(e) => setTexto(e.target.value)}
              rows={6}
            />
          </div>

          <div className="campo">
            <span className="label">Tags:</span>
            <div className="tags-container">
              {tagsIniciais.map((tag) => (
                <span className="tag" key={tag}>
                  <span className="tag-bolinha"></span>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="campo">
            <label className="label">Lugar:</label>
            <input 
              type="text" 
              className="input-edit"
              value={lugar} 
              onChange={(e) => setLugar(e.target.value)} 
            />
          </div>

          <div className="contato-categoria">
            <div className="campo">
              <label className="label">Contato:</label>
              <div className="contatos">
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

            <div className="campo">
              <label className="label">Categoria:</label>
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

        <div className="coluna-right">
          <div className="direita-topo">
            {/* O botão X agora chama a função onClose vinda do Dashboard */}
            <button type="button" className="btn-fechar" onClick={onClose}>
              X
            </button>
            <div className="campo">
              <span className="label">Foto:</span>
              <img className="foto" src={foto} alt="Foto da memória" />
            </div>
          </div>

          <div className="direita-botoes">
            {/* type="submit" faz disparar o handleSalvar no onSubmit do formulário */}
            <button type="submit" className="btn-aceitar">
              SALVAR ALTERAÇÕES
            </button>
            <button type="button" className="btn-recusar" onClick={onDelete}>
              DELETAR
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default PostadasEdit;