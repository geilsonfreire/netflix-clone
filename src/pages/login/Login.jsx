// Imports Bibliotecas
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify'; 
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// Importa CSS
import './Login.css'
import 'react-toastify/dist/ReactToastify.css'; // Importa o CSS do Toastify

// Import Icons, img, Assets
import Logo from '../../assets/img/logo.png'


// Import Components
import Footer from '../../components/footer/Footer'
import { login } from '../../Firebase/FirebaseAuth'


const Login = () => {
    const [email, setEmail] = useState(''); // Estado inicial do email
    const [password, setPassword] = useState(''); // Estado inicial da senha
    const Navigate = useNavigate();
    const auth = getAuth();
    

    const user_auth = async (e) => {
        e.preventDefault();

        // Verifica se os campos de email e senha estão preenchidos
        if (!email || !password) {
            toast.error('Por favor, preencha todos os campos.');
            return; // Impede a continuação da função se os campos não estiverem preenchidos
        }
        
        try {
            const user = await login(email, password);
            if (user) {
                toast.success('Logado com sucesso!');
                Navigate('/'); // Redireciona para a Home
            } else {
                toast.error('Erro ao fazer login. Tente novamente.');
            }
        } catch (error) {
            toast.error(error.message);
        }
        
    }

    return (
        <div className='login'>
            <ToastContainer /> {/* Adiciona o container para exibir as mensagens */}
            <img className='login-logo' src={Logo} alt="Logo" />
            <div className="login-form">
                <h1>Login</h1>
                <form onSubmit={user_auth}>
                    <input type="email" placeholder='Email' 
                        value={email}
                        onChange={(e) => {setEmail(e.target.value)}}
                    />

                    <input type="password" placeholder="Senha" 
                        value={password}
                        onChange={(e) =>{ setPassword(e.target.value)}}
                    />

                    <div className="login-buttons">
                        <button type="submit">Entrar</button>
                        <span className='OU'>OU</span>
                        <button className='codigo-acesso' type="submit">Usar um código de acesso</button>
                    </div>

                    <div className="form-help">
                        <a href="#">Esqueceu a senha?</a>

                        <div className="lembrar">
                            <input type="checkbox" />
                            <label>Lembre-se de mim</label>
                        </div>
                        
                        <p>
                            Novo por aqui? 
                            <Link to="/AssineNetflix">Assine agora.</Link>
                        </p>
                    </div>
                </form>
            </div>
            <Footer/>
        </div>
    )
}

export default Login
