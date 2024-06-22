// Imports Bibliotecas
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

// Importa CSS
import './Login.css'

// Import Icons, img, Assets
import Logo from '../../assets/img/logo.png'

// Import Components
import Footer from '../../components/footer/Footer'
import { login, signup } from '../../Firebase/FirebaseAuth'


const Login = () => {
    const [signState, setSignState] = useState('Sign In'); // Estado do Login
    const [name, setName] = useState(''); // Estado inicial do usuario
    const [email, setEmail] = useState(''); // Estado inicial do email
    const [password, setPassword] = useState(''); // Estado inicial da senha

    const user_auth = async (e) => {
        e.preventDefault();
        if(signState === 'sign In'){
            await login( email, password);
        }else{
            await signup(name, email, password);
        }
    }

    return (
        <div className='login'>
            <img className='login-logo' src={Logo} alt="Logo" />
            <div className="login-form">
                <h1>Sign In</h1>
                <form>
                    {signState === "sign up" ? 
                    <input type="text" placeholder="Usuário" 
                        value={name}
                        onChange={(e) => {setName(e.target.value)}}
                    />:<></> }

                    <input type="email" placeholder='Email' 
                        value={email}
                        onChange={(e) => {setEmail(e.target.value)}}
                    />

                    <input type="password" placeholder="Senha" 
                        value={password}
                        onChange={(e) =>{ setPassword(e.target.value)}}
                    />

                    <div className="login-buttons">
                        <button type="submit" onClick={user_auth}>Entrar</button>
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
