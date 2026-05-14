import "./Tags.css";
import { useState } from "react";

function Tags ({needTitle}) {

    const [selecionadas, setSelecionadas] = useState([]); //para todasTags

    const todasTags = [
        {nome: "Evento"},
        {nome: "Lugar"},
        {nome: "Saudade"},
        {nome: "Nostalgia"},
        {nome: "Personalidade"},
        {nome: "Orgulho"},
        {nome: "Infância"},
        {nome: "Amigos"},
        {nome: "Família"},
        {nome: "Antigamente"},
        {nome: "Pertencimento"}
    ];

    function toogleTag (nomeTag) {

        if(selecionadas.includes(nomeTag)) { // se já inclui, 
            setSelecionadas(selecionadas.filter(tag => tag !== nomeTag)) //eu tenho que retirar
        }
        else { // se não inclui
            if(selecionadas.length < 5){setSelecionadas([...selecionadas, nomeTag])}; // eu coloco junto com as outras
        }
    }

    return (

        <>
            <div id="secTag">{ needTitle ? 'Tags' : '' }</div>
            <div className="tags-container">
                {
                    todasTags.map((tag) => {
                        return(
                        <button key={tag.nome} className={
                            
                            selecionadas.includes(tag.nome)
                            ? `active`  : 'tag' }
                        onClick={() => toogleTag(tag.nome)}
                        >
                            ● {tag.nome}
                        </button>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Tags;