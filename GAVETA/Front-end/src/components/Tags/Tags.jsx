import "./Tags.css";

import { FaCircle } from "react-icons/fa";
import { useState } from "react";

function Tags({ needTitle, selecionadas, setSelecionadas }) {

    //const [tSelecionadas, setTSelecionadas] = useState([]); //para todasTags

    const todasTags = [
         {nome: "Evento", tipo: "media"},
        {nome: "Lugar", tipo: "media"},
        {nome: "Saudade", tipo: "media"},
        {nome: "Nostalgia", tipo: "media"},
        {nome: "Personalidade", tipo: "grande"},
        {nome: "Orgulho", tipo: "media"},
        {nome: "Infância", tipo: "media"},
        {nome: "Amigos", tipo: "media"},
        {nome: "Família", tipo: "media"},
        {nome: "Antigamente", tipo: "grande"},
        {nome: "Pertencimento", tipo: "grande"}
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
                    todasTags.map(tag => {
                        return(
                        <button key={tag.nome} className={
                            selecionadas.includes(tag.nome)
                            ? `tag${tag.tipo} active` : `tag${tag.tipo}`
                        }
                        style={!needTitle ? {border: '2px solid var(--sertao-chuvoso)'} : ''}
                        onClick={() => toogleTag(tag.nome)}
                        >
                            <FaCircle className="bolinha"/> {tag.nome}
                        </button>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Tags;