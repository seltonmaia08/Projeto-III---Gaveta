import "./Tags.css";

import { FaCircle } from "react-icons/fa";
import { useState } from "react";

function Tags({ needTitle, selecionadas, setSelecionadas }) {

    //const [tSelecionadas, setTSelecionadas] = useState([]); //para todasTags

    const todasTags = [
        { nome: "Evento" },
        { nome: "Lugar" },
        { nome: "Saudade" },
        { nome: "Nostalgia" },
        { nome: "Personalidade" },
        { nome: "Orgulho" },
        { nome: "Infância" },
        { nome: "Amigos" },
        { nome: "Família" },
        { nome: "Antigamente" },
        { nome: "Pertencimento" }
    ];

    function toogleTag(nomeTag) {

        if (selecionadas.includes(nomeTag)) { // se já inclui, 
            setSelecionadas(selecionadas.filter(tag => tag !== nomeTag)) //eu tenho que retirar
        }
        else { // se não inclui
            if (selecionadas.length < 5) { setSelecionadas([...selecionadas, nomeTag]) }; // eu coloco junto com as outras
        }
    }

    return (

        <>
            <div id="secTag">{needTitle ? 'Tags' : ''}</div>
            <div className="tags-container">
                {
                    todasTags.map((tag) => {
                        return (
                            <button key={tag.nome} className={
                                `tag  
                                ${selecionadas.includes(tag.nome) ? 'active' : ''}
                                `}
                                style={!needTitle ? {border: '1px solid var(--sertao-chuvoso)'} : {}}
                                onClick={() => toogleTag(tag.nome)}
                            >
                                <FaCircle className="bolinha" /> {tag.nome}
                            </button>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Tags;