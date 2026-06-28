import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaUserCircle } from "react-icons/fa";

import "./LoginAdm.css";
import LogoGaveta from "../../assets/imgs/logo_gaveta.svg";
import { auth } from '../../services/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

function LoginAdm() {
    const [showPassword, setShowPassword] = useState(false);
    const [erro, setErro] = useState("");

    const [dados, setDados] = useState({
        email: "",
        senha: ""
    });

    const navigate = useNavigate();

    const alterarDados = (e) => {
        const { name, value } = e.target;
        setErro("")
        setDados({
            ...dados,
            [name]: value
        });
    };

    async function validarFormulario(e) {
        e.preventDefault();

        try {
            await signInWithEmailAndPassword(auth, dados.email, dados.senha)
            navigate("/postadasDashboard")
        } catch (error) {
            setErro("Email ou senha incorretos. Por favor, tente novamente.")
            console.log('Erro ao fazer o login...', error.message)
        }
    }

    const toggleShow = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <div className="login_adm_container">
            <div className="lado_esquerdo">
                <img src={LogoGaveta} alt="Logo Gaveta27" />
            </div>

            <div className="login_container lado_direito">
                <FaUserCircle className="login_icon" />

                <form onSubmit={validarFormulario}>
                    <div className="form_group">
                        <label htmlFor="login">EMAIL</label>

                        <div className="email_container">
                            <input
                                type="email"
                                id="login"
                                name="email"
                                required
                                onInvalid={(e) =>
                                    e.target.setCustomValidity(
                                        "Digite um email válido no formato exemplo@email.com"
                                    )
                                }
                                onInput={(e) => e.target.setCustomValidity("")}
                                placeholder="Digite seu email. Ex.: exemplo@email.com"
                                value={dados.email}
                                onChange={alterarDados}
                            />
                        </div>
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
                                value={dados.senha}
                                onChange={alterarDados}
                            />

                            <span onClick={toggleShow}>
                                {showPassword ? <FaEye /> : <FaEyeSlash />}
                            </span>
                        </div>
                    </div>

                    {
                    erro && 
                    <p className="textErro">{erro}</p>}
                    <button type="submit" id="entrar">
                        ENTRAR
                    </button>
                </form>
            </div>
        </div>
    );
}

export default LoginAdm;