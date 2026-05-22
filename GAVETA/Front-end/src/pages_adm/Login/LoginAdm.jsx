import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaUserCircle } from "react-icons/fa";

import "./LoginAdm.css";
import LogoGaveta from "../../assets/imgs/logo_gaveta.svg";

function LoginAdm() {
    const [email, setEmail] = useState("");
    const [emailErro, setEmailErro] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    function emailValido(valor) {
        return /\S+@\S+\.\S+/.test(valor);
    }

    function validarEmail(valor) {
        if (valor.trim() === "") {
                return "";
            }
        return emailValido(valor) ? "" : "Digite um email válido";
    }

    function handleEmail(e) {
        const valor = e.target.value;
        setEmail(valor);

        if (emailErro) {
            setEmailErro(validarEmail(valor));
        }
    }

    function validarFormulario(e) {
        e.preventDefault();
        const form = e.target;
        
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }
        const erro = validarEmail(email);
        setEmailErro(erro);

        if (erro) {
            return;
        }

        navigate("/postadasDashboard");
    }
    const toggleShow = () => {
        setShowPassword(prev => !prev);
    };

    return (

        <div className="login_adm_container">
            <div className="lado_esquerdo">
                <img src={LogoGaveta} />
            </div>

            <div className="login_container lado_direito">
                <FaUserCircle className="login_icon" />

                <form onSubmit={validarFormulario}>
                    <div className="form_group">
                        <label htmlFor="login">EMAIL</label>
                        <div className="email_container">
                            <input
                                type="text"
                                id="login"
                                name="email"
                                required
                                placeholder="Digite seu email. Ex.: exemplo@email.com"
                                value={email}
                                onChange={handleEmail}
                                onBlur={() => setEmailErro(validarEmail(email))}
                            />
                        </div>
                        {
                            emailErro &&
                            <span className="mensagem_erro">
                                {emailErro}
                            </span>
                        }
                    </div>

                    <div className="form_group">
                        <label htmlFor="senha">SENHA</label>
                        <div className="password_container">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="senha"
                                name="senha"
                                required
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