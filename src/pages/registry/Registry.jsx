// Imports Bibliotecas
import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';

// Importa CSS
import './Registry.css'

// Import Icons, img, Assets
import Logo from '../../assets/img/logo.png'

// Import Components
import Footer from '../../components/footer/Footer'
import { signup } from '../../Firebase/FirebaseAuth'


const Registry = () => {
    const [name, setName] = useState(''); // Estado inicial do usuario
    const [email, setEmail] = useState(''); // Estado inicial do email
    const [password, setPassword] = useState(''); // Estado inicial da senha
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const emailFromAssineNetflix = location.state?.email || '';

    useEffect(() => {
        const emailFromAssineNetflix = location.state?.email || '';
        if (emailFromAssineNetflix) {
            setEmail(emailFromAssineNetflix);
        }
    }, [location]);

    const user_auth = async (e) => {
        e.preventDefault();

        // Verifica se todos os campos estão preenchidos
        if (!name || !email || !password) {
            alert("Todos os campos são obrigatórios!");
            return;
        }

        // Verifica o comprimento da senha
        if (password.length < 6) {
            alert("A senha deve ter pelo menos 6 caracteres!");
            return;
        }

        // Verifica se a senha contém números, letras e caracteres especiais
        const hasNumber = /\d/.test(password);
        const hasLetter = /[a-zA-Z]/.test(password);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

        if (!hasNumber || !hasLetter || !hasSpecialChar) {
            alert("A senha deve conter números, letras e caracteres especiais!");
            return;
        }

        // Se passar por todas as verificações, chama a função de cadastro
        await signup(name, email, password);
        setShowSuccessMessage(true); // Mostra a mensagem de sucesso
        setTimeout(() => {
            setShowSuccessMessage(false); // Esconde a mensagem após 3 segundos
            navigate('/login'); // Redireciona para a página de login
        }, 3000);
    }

    return (
        <div className='registry'>
            {showSuccessMessage && (
                <div className="success-message">Registrado com sucesso!</div>
            )}
            <img className='registry-logo' src={Logo} alt="Logo" />
            <div className="registry-form">
                <h1>Registar</h1>

                <form>

                    <input type="text" placeholder="Usuário"
                        value={name}
                        onChange={(e) => setName(e.target.value) }
                    />

                    <input type="email" placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value) }
                    />

                    <input type="password" placeholder="Senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <div className="registry-buttons">
                        <button type="submit" onClick={user_auth}>Enviar</button>
                    </div>

                    <div className="form-help">
                        <div className="lembrar">
                            <input type="checkbox" />
                            <label>Lembre-se de mim</label>
                        </div>

                        <p>
                            Já é um inscrito?
                            <Link to="/login">Faça o login agora.</Link>
                        </p>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default Registry
