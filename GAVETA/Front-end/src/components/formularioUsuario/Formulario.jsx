import "./Formulario.css";

function Formulario () {

    return (
        <>
            <div className="geral">

                <div className="aviso">

                    <div className="aviso_titulo">Compartilhe uma memória</div>
                    <div>Pense nisso como uma <b>gaveta:</b> um lugar para guardar
                    aquilo que importa. Deixe aqui uma memória que ainda vive em você. Mas antes disso, <u>LEIA OS TERMOS DE USO!</u>
                    </div>

                </div>

                <form className="formulario">

                    <div className="item">
                        <label htmlFor="nome">Nome: </label>
                        <input id="nome" type="text" placeholder="Qual o seu nome?"/>
                        <div className="observacao">(Lembre-se: essa informação não será exibida)</div>
                    </div>

                    <div className="item">
                        <label htmlFor="titulo">Título: </label>
                        <input id="titulo" type="text" placeholder="Qual o título da memória?"/>
                    </div>

                    <div className="item">
                        <label htmlFor="texto">Memória: </label>
                        <textarea id="texto" placeholder="Qual memória você quer guardar?"></textarea>
                        <div className="observacao">(Seu texto deve ter no máximo 5000 caracteres)</div>
                    </div>

                    <div className="item">
                        <label htmlFor="data">Data da memória: </label>
                        <input id="data" type="date"/>
                        <div className="observacao">(data de quando a memória aconteceu)</div>
                    </div>

                    <div className="item">
                        <label htmlFor="marcadores">Tags: </label>
                        <input id="marcadores" type="text" placeholder="..."/>
                    </div>

                    <div className="item">
                        <label htmlFor="locais">Local: </label>
                        <select id="locais">
                            <option id="local_padrao" value="" disabled selected>Selecione um local</option>
                            <option>Açude do Cedro</option>
                            <option>Pedra da Galinha Choca</option>
                            <option>Museu Jacinto de Sousa</option>
                            <option>Praça do Leão</option>
                            <option>Outro</option>
                        </select>
                    </div>

                    <div className="item">
                        <label htmlFor="imagem">Imagem: </label>
                        <button id="imagem" type="text" placeholder="...">Fazer Upload</button>
                        <div className="observacao">(Certifique-se de ter a permissão de todas as pessoas na imagem!</div>
                        <div className="observacao">Envie na proporção 1:1 - sugerido 1080x1080)</div>
                    </div>

                    <div className="item">
                        <label htmlFor="email">Email: </label>
                        <input id="email" type="email" placeholder="Qual o seu email?"/>
                        <div className="observacao">(Obrigatório. Entraremos em contato para comunicar falhas/denúncias)</div>
                    </div>

                    <div className="item">
                        <label htmlFor="marcadores">Contato: </label>
                        <input id="marcadores" type="text" placeholder="Algum outro contato?"/>
                        <div className="observacao">(Opcional)</div>
                    </div>

                    <div className="li_termos">
                        <input id="concordo" type="checkbox"/>
                        <label htmlFor="concordo"> Li e concordo com os <u>termos de uso</u>.</label>
                    </div>

                </form>

                <button id="enviar" type="submit">ENVIAR</button>
            </div>
        </>
    )
}

export default Formulario;