import "./LoginAdm.css";

import LogoGaveta from "../../assets/imgs/logo_gaveta.svg"

import { FaEye, FaEyeSlash, FaUserCircle } from "react-icons/fa"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginAdm() {

    const [email, setEmail] = useState("");
    const [emailErro, setEmailErro] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    function emailValido(valor) {
        return /\S+@\S+\.\S+/.test(valor);
    }   

    function validarFormulario(e) {
        e.preventDefault();

        if (!emailValido(email)) {
            setEmailErro(true);
            return;
        }

        navigate('/postadasDashboard')
    }

    function validarEmail() {
    console.log("blur disparou");
    setEmailErro(!emailValido(email));
}

    function handleEmail(e) {
        const valor = e.target.value;

        setEmail(valor);

        setEmailErro(!emailValido(valor));
    }

    const toggleShow = () => {
        setShowPassword(prev => !prev);
    };

    return (
        <div className="login_adm_container">
            <div className="lado_esquerdo">
                <img src={LogoGaveta}/>
            </div>

            <div className="login_container lado_direito">

                <FaUserCircle className="login_icon" />

                <form onSubmit={validarFormulario} noValidate>

                    <div className="form_group">

                        <label htmlFor="login">LOGIN</label>

                        <div className="email_container">

                            <input
                                type="text"
                                name="login"
                                id="login"
                                placeholder="Digite seu login. Ex.: usuario@email.com"
                                value={email}
                                onChange={handleEmail}
                                onBlur={validarEmail}
                            />
                            
                            {
                                emailErro && 
                                <span id="mensagem_erro">Email inválido</span>
                            }
                        </div>

                    </div>

                    <div className="form_group">

                        <label htmlFor="senha">SENHA</label>

                        <div className="password_container">

                            <input
                                type={showPassword ? "text" : "password"}
                                name="senha"
                                id="senha"
                                placeholder="Digite sua senha"
                            />

                            <span onClick={toggleShow}>
                                {
                                    showPassword
                                        ? <FaEye />
                                        : <FaEyeSlash />
                                }
                            </span>

                        </div>

                    </div>

                    <button type="submit" id="entrar">
                        ENTRAR
                    </button>

                </form>

            </div>
        </div>
        
    );
}

export default LoginAdm;