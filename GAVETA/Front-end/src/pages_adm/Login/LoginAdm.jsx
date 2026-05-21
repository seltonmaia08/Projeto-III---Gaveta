import "./LoginAdm.css";

import LogoGaveta from "../../assets/imgs/logo_gaveta.svg";

import { FaEye, FaEyeSlash, FaUserCircle } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginAdm() {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const [emailErro, setEmailErro] = useState("");
    const [senhaErro, setSenhaErro] = useState("");

    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    function campoVazio(valor) {
        return valor.trim() === "";
    }

    function emailValido(valor) {
        return /\S+@\S+\.\S+/.test(valor);
    }

    function validarEmail(valor) {

        if (campoVazio(valor)) {
            return "O email é obrigatório";
        }

        if (!emailValido(valor)) {
            return "Digite um email válido";
        }

        return "";
    }

    function validarSenha(valor) {

        if (campoVazio(valor)) {
            return "A senha é obrigatória";
        }

        return "";
    }

    function handleEmail(e) {

        const valor = e.target.value;

        setEmail(valor);

        if (emailErro) {
            setEmailErro(validarEmail(valor));
        }
    }

    function handleSenha(e) {

        const valor = e.target.value;

        setSenha(valor);

        if (senhaErro) {
            setSenhaErro(validarSenha(valor));
        }
    }

    function validarFormulario(e) {

        e.preventDefault();

        const erroEmail = validarEmail(email);
        const erroSenha = validarSenha(senha);

        setEmailErro(erroEmail);
        setSenhaErro(erroSenha);

        if (erroEmail || erroSenha) {
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

                <form onSubmit={validarFormulario} noValidate>

                    <div className="form_group">

                        <label htmlFor="login">EMAIL</label>

                        <div className="email_container">

                            <input
                                type="text"
                                id="login"
                                placeholder="Digite seu email"
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
                                placeholder="Digite sua senha"
                                value={senha}
                                onChange={handleSenha}
                            />

                            <span onClick={toggleShow}>

                                {
                                    showPassword
                                        ? <FaEye />
                                        : <FaEyeSlash />
                                }

                            </span>

                        </div>

                        {
                            senhaErro &&
                            <span className="mensagem_erro">
                                {senhaErro}
                            </span>
                        }

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