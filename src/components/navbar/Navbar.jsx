// imports Bibliotecas
import React from 'react'

// Importa CSS  
import './Navbar.css'

// Imports icon, img, assets
import logo from '../../assets/logo.png'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="navbar-left">
                <img src={logo} alt="logo" />
                <ul>
                    <li>Inicio</li>
                    <li>Séries</li>
                    <li>Filmes</li>
                    <li>Novos & Populares</li>
                    <li>Minha lista</li>
                    <li>Navegar por idiomas</li>
                </ul>
            </div>
            <div className="navbar-right"></div>
        </div>
    )
}

export default Navbar
