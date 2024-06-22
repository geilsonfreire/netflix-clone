// Imports Bibliotecas
import React from 'react'
import { useNavigate } from 'react-router-dom';

// Import Icons img Assets
import { BsChevronRight } from "react-icons/bs";

// Importa CSS
import './AssineNetflix.css'

// Import Icons, img, Assets
import Logo from '../../assets/img/logo.png'

// Import Components


const AssineNetflix = () => {

    const navigate = useNavigate();

    const goToLogin = () => {
        navigate('/login');
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

                <form className='Assine-form'>
                    <input className='Assine-input' type="email" placeholder='Email' />
                    <div className="Assine-buttons">
                        <button className='Assine-button' type="submit">Vamos la
                            <i><BsChevronRight/></i>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AssineNetflix
