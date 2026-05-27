import Formulario from '../../components/formularioUsuario/Formulario'
import './compartilharMemoria.css'

import { useState, useEffect } from 'react';


//------------
const CompartilharMemoria = () => {

    const [termos, setTermos] = useState(false);
    console.log(termos)

    useEffect(
        () => {

            if (termos) {
                document.body.style.overflow = "hidden";
                document.documentElement.style.overflow = "hidden"; // Trava a rolagem na tag <html>
            } else {
                document.body.style.overflow = "auto";
                document.documentElement.style.overflow = "auto"; // Destrava a rolagem
            }
            // Função de limpeza: destrava o scroll se o usuário sair da página
            return () => {
                document.body.style.overflow = "auto";
                document.documentElement.style.overflow = "auto";
            };

        }, [termos]
    );

    return (
        <div className='comp-memoria'>
            <Formulario termos={termos} setTermos={setTermos} />
        </div>
    )
}

export default CompartilharMemoria;