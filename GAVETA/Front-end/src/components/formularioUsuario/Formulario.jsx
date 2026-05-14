import "./Formulario.css";
import TermosDeUso from "./TermosDeUso";
import Tags from "../Tags/Tags";

import { useState } from "react";


function Formulario() {

    const [termos, setTermos] = useState(false);

    return (
        <div className="geral">

            {
                termos ? <TermosDeUso
                    fechar={() => setTermos(false)}
                />
                    : null
            }

            <div className="aviso">

                <div className="aviso_titulo">Compartilhe uma memória</div>
                <div>Pense nisso como uma <b>gaveta:</b> um lugar para guardar aquilo que importa.
                    Deixe aqui uma memória que ainda vive em você. Mas antes disso, <u onClick={() => setTermos(true)}>LEIA OS TERMOS DE USO!</u>
                </div>

            </div>

            <div className="formulario">

                <div className="item">
                    <label htmlFor="nome">Nome: </label>
                    <input id="nome" type="text" placeholder="Qual o seu nome?" required />
                    <div className="observacao">(Essa informação não será exibida)</div>
                </div>

                <div className="item">
                    <label htmlFor="titulo">Título: </label>
                    <input id="titulo" type="text" placeholder="Qual o título da memória?" required />
                </div>

                <div className="item">
                    <label htmlFor="texto">Memória: </label>
                    <textarea required id="texto" placeholder="Qual memória você quer guardar?" maxLength={5000}></textarea>
                    <div className="observacao">(Máximo: 5000 caracteres)</div>
                </div>

                <div className="item">
                    <label htmlFor="data">Data da memória: </label>
                    <input id="data" type="date" required />
                </div>

                <div className="tags-content">
                    <Tags needTitle={true} />
                </div>

                <div className="item">
                    <label htmlFor="locais">Local: </label>
                    <select id="locais" required>
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
                    <div className="observacao">(Certifique-se de ter a permissão de todas as pessoas na imagem!)</div>
                </div>

                <div className="item">
                    <label htmlFor="email">Email: </label>
                    <input id="email" type="email" placeholder="Qual o seu email?" required />
                </div>

                <div className="item">
                    <label htmlFor="marcadores">Contato: </label>
                    <input id="marcadores" type="text" placeholder="Algum outro contato?" />
                </div>

                <div className="li_termos">
                    <input id="concordo" type="checkbox" required />
                    <label htmlFor="concordo"> Li e concordo com os </label><u onClick={() => setTermos(true)}>termos de uso</u>.
                </div>
            </div>
            <button id="enviar" type="submit">ENVIAR</button>
        </div>
    )
}

export default Formulario;