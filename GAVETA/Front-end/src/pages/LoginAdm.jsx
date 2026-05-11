import "./LoginAdm.css";

import imagem from "../../assets/icon_login.png";
import LogoGaveta from '../../assets/imgs/logo_gaveta.png'

import { FaEye, FaEyeSlash } from "react-icons/fa"
import { useState } from "react";

function FormsLogin() {

    const [email, setEmail] = useState("");
    const [emailErro, setEmailErro] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    function emailValido(valor) {
        return valor.includes("@") && valor.includes(".");
    }

    function validarFormulario(e) {

        e.preventDefault();

        if (!emailValido(email)) {
            setEmailErro(true);
            return;
        }

        alert("Formulário enviado");
    }

    function validarEmail() {
        setEmailErro(!emailValido(email));
    }

    function handleEmail(e) {

        const valor = e.target.value;

        setEmail(valor);

        if (emailValido(valor)) {
            setEmailErro(false);
        }

    }

    const toggleShow = () => {
        setShowPassword(prev => !prev);
    };

    return (
        <>
            <div className="lado_esquerdo">
                <img src={LogoGaveta}/>
            </div>

            <div className="login_container lado_direito">

                <img src={imagem} alt="Ícone login" />

                <form onSubmit={validarFormulario} noValidate>

                    <div className="form_group">

                        <label htmlFor="login">LOGIN</label>

                        <div className="email_container">

                            <input
                                type="email"
                                name="login"
                                id="login"
                                placeholder="Digite seu login"
                                value={email}
                                onBlur={validarEmail}
                                onChange={handleEmail}
                            />

                            {
                                emailErro &&
                                <p id="mensagem_erro">
                                    Email inválido
                                </p>
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
        </>
        
    );
}

export default FormsLogin;