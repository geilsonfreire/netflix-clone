// Imports Bibliotecas
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

// Import Icons img Assets
import { BsChevronRight } from "react-icons/bs";

// Importa CSS
import './AssineNetflix.css'

// Import Icons, img, Assets
import Logo from '../../assets/img/logo.png'

// Import Components


const AssineNetflix = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    

    const goToLogin = () => {
        navigate('/login');
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Previne o comportamento padrão do formulário
        // Exemplo de redirecionamento com email
        if (email) {
            navigate('/registry', { state: { email: email } });
        } else { 
            alert('Por favor, informe um email válido');
        }
    };

    return (
        <div className='assine-page'>
            <div className="header">
                <img className='assine-logo' src={Logo} alt="Logo" />
                <button className='entrar' onClick={goToLogin}>Entrar</button>
            </div>

            <div className="Assine-ja">
                <h1>Filmes, Série e muito mais, sem limites</h1>
                <h3>Assista onde quiser. cancele quando quiser.</h3>
                <p>Pronto para assistir? Informe seu email para criar ou reiniciar sua assinatura.</p>

                <form className='Assine-form' onSubmit={handleSubmit} >
                    <input
                        className='Assine-input'
                        type="email"
                        placeholder='Email'
                        value={email}
                        onChange={handleEmailChange}
                    />

                    <div className="Assine-buttons">
                        <button onClick={handleSubmit} className='Assine-button' type="submit">Vamos la
                            <i><BsChevronRight/></i>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AssineNetflix
