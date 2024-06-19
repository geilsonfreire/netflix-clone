// Imports Bibliotecas
import React from 'react'

// Importa CSS
import './Login.css'

// Import Icons, img, Assets
import Logo from '../../assets/img/logo.png'

const Login = () => {
    return (
        <div className='login'>
            <img className='login-logo' src={Logo} alt="Logo" />
            <div className="login-form">
                <h1>Entrar</h1>
                <form>
                    <input type="text" placeholder="Usuário" />
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
                            <a href="#">Assine agora.</a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
