// imports Bibliotecas
import React from 'react'

// Importa CSS  
import './Navbar.css'

// Imports icon, img, assets
import logo from '../../assets/img/logo.png'
import Profile_img from '../../assets/img/profile_img.png'
import { BsSearch, BsBell, BsCaretDown } from "react-icons/bs";

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
            <div className="navbar-right">
                <i className='icons'>{<BsSearch />}</i>
                <p>Infantil</p>
                <i className='icons'>{<BsBell />}</i>

                <div className="navbar-profile">
                    <img className='profile' src={Profile_img} alt="Perfil" />
                    <i className='navbar-profile'>{<BsCaretDown />}</i>

                    <div className="dropdown">
                        <p>Sair da Netflix</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Navbar
