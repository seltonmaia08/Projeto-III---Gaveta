import "./Formulario.css";

import TermosDeUso from "./TermosDeUso";
import Tags from "./Tags";

import { IoArrowDownSharp } from "react-icons/io5";
import { LuUpload } from "react-icons/lu";
import { useState, useEffect, useRef } from "react";


function Formulario() {

    //-------------------
    //Variáveis

    const [termos, setTermos] = useState(false);
    const [setaCima, setSetaCima] = useState(false);
    const [selecionadas, setSelecionadas] = useState([]); //para todasTags
    const [dados, setDados] = useState({

        nome: "",
        titulo: "",
        texto: "",
        data: "",
        tags: selecionadas,
        local: 0,
        imagem: null,
        email: "",
        contato: "",
        termos: false
    });

    const inputImagem = useRef(null); // essa variável recebe a referência HTML do meu input escondido de enviar imagem
    // esse input é escondido porque se eu usasse ele como vem padrão, eu conseguiria alterar poucas coisas no CSS dele.
    // então tenho que criar um novo, um "botão fantasioso", que na verdade é só uma referência pro input verdadeiro.

    //-------------------
    //UseEffect para atualizar a lista de tags selecionadas

    useEffect(

        () => {setDados({...dados, tags: selecionadas})

        }, [selecionadas]
    );

    //-------------------
    //funções

    const sumbit = (evento) => {

        evento.preventDefault();
        alert(JSON.stringify(dados));
    }

    const alterarDados = (evento) => {

        const {name, value} = evento.target;
        setDados({...dados, [name]: value});
    }

    const leituraTermos = () => {setDados({...dados, termos: !dados.termos})}

    const pegarImagem = (evento) => {

        const imagemAtual = evento.target.files[0]; // o arquivo selecionado pelo usuário ao apertar no botão fica guardado
        //no alvo → arquivos[], que é um vetor de arquivos. Nesse caso, o elemento que disparou o evento não é o botão
        //"fazer upload", mas é o input escondido, com seu html referenciado pela variável de referência inputImagem.
        setDados({...dados, imagem: imagemAtual});
        console.log(imagemAtual.name);
    }

    return (
        <div className="geral">

            {
                termos ? <TermosDeUso
                    fechar = {() => setTermos(false)}
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
                    <input id="nome" type="text" placeholder="Qual o seu nome?" required name="nome" onChange={alterarDados}/>
                    <div className="observacao">(Essa informação não será exibida)</div>
                </div>

                <div className="item">
                    <label htmlFor="titulo">Título: </label>
                    <input id="titulo" type="text" placeholder="Qual o título da memória?" required name="titulo" onChange={alterarDados}/>
                </div>

                <div className="item">
                    <label htmlFor="texto">Memória: </label>
                    <textarea required id="texto" placeholder="Qual memória você quer guardar?" maxLength={5000} name="texto" onChange={alterarDados}></textarea>
                    <div className="observacao">(Máximo: 5000 caracteres)</div>
                </div>

                <div className="item">
                    <label htmlFor="data">Data da memória: </label>
                    <input id="data" type="date" required name="data" onChange={alterarDados}/>
                </div>

                <Tags
                    selecionadas = {selecionadas}
                    setSelecionadas = {setSelecionadas}
                />

                <div id="newsetinha" className="item">
                    <label htmlFor="locais">Local: </label>
                    <select id="locais" required name="local" onChange={alterarDados} onClick={() => setSetaCima(!setaCima)} onBlur={() => setSetaCima(false)}>
                        <option id="local_padrao" value={0} disabled selected>Selecione um local</option>
                        <option value={1}>Açude do Cedro</option>
                        <option value={2}>Pedra da Galinha Choca</option>
                        <option value={3}>Museu Jacinto de Sousa</option>
                        <option value={4}>Praça do Leão</option>
                        <option value={5}>Outro</option>
                    </select>
                    <IoArrowDownSharp
                        className={setaCima ? "setaON" : "setaOFF"}
                    />
                </div>

                <input id="inputEscondido" type="file" accept="image/*" ref={inputImagem} onChange={pegarImagem}/>

                <div className="item">
                    <label htmlFor="imagem">Imagem: </label>
                    <button id="imagem" type="button" onClick={() => inputImagem.current.click()} placeholder="..."><LuUpload id="loadfoto"/> Fazer Upload</button>
                    <div className="observacao">(Certifique-se de ter a permissão de todas as pessoas na imagem!)</div>
                </div>

                <div className="item">
                    <label htmlFor="email">Email: </label>
                    <input id="email" type="email" name="email" placeholder="Qual o seu email?" required onChange={alterarDados}/>
                </div>

                <div className="item">
                    <label htmlFor="contatos">Contato: </label>
                    <input id="contatos" type="text" placeholder="Algum outro contato?" name="contato" onChange={alterarDados}/>
                </div>

                <div className="li_termos">
                    <input id="concordo" type="checkbox" required name="termos" onClick={leituraTermos}/>
                    <label htmlFor="concordo"> Li e concordo com os </label><u onClick={() => setTermos(true)}>termos de uso</u>.
                </div>
            </div>
            <button id="enviar" type="submit" onClick={sumbit}>ENVIAR</button>

            <div>{JSON.stringify(dados)}</div>
        </div>
    )
}

export default Formulario;