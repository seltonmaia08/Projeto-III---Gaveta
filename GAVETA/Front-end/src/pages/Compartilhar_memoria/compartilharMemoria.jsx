import Formulario from '../../components/formularioUsuario/Formulario'
import './compartilharMemoria.css'

import { useState, useEffect } from 'react';


//------------
const CompartilharMemoria = () => {

    const [termos, setTermos] = useState(false);

    useEffect(
        () => {

            if(termos){document.body.style.overflow = "hidden"}
            else {document.body.style.overflow = "auto"}

        }, [termos]
    );

    return (
        <div className='comp-memoria'>
           <Formulario termos = {termos} setTermos = {setTermos}/>
        </div>
    )
}

export default CompartilharMemoria;