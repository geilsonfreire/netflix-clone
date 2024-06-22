// Imports Bibliotecas
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

// Importa CSS
import './Login.css'

// Import Icons, img, Assets
import Logo from '../../assets/img/logo.png'

// Import Components
import Footer from '../../components/footer/Footer'


const Login = () => {
    const [signState, setSignState] = useState('Entrar'); // Estado do Login

    return (
        <div className='login'>
            <img className='login-logo' src={Logo} alt="Logo" />
            <div className="login-form">
                <h1>{signState}</h1>
                <form>
                    {signState === "sign up" ? <input type="text" placeholder="Usuário" />:<></> }
                    <input type="email" placeholder='Email' />
                    <input type="password" placeholder="Senha" />

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
