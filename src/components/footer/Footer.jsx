// Imports Bibliotecas
import React from 'react'

// imports de icons, img, Assets
import { BsGithub, BsLinkedin, BsTiktok, BsWhatsapp, BsPlayBtnFill, BsFacebook } from "react-icons/bs";

// Importa CSS
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-icons">
                <a href="#" target="_blank" rel="noreferrer">
                    <i className="footer-ico"><BsGithub /></i>
                </a>
                <a href="#" target="_blank" rel="noreferrer">
                    <i className="footer-ico"><BsLinkedin /></i>
                </a>
                <a href="#" target="_blank" rel="noreferrer">
                    <i className="footer-ico"><BsTiktok /></i>
                </a>
                <a href="#" target="_blank" rel="noreferrer">
                    <i className="footer-ico"><BsWhatsapp /></i>
                </a>
                <a href="#" target="_blank" rel="noreferrer">
                    <i className="footer-ico"><BsPlayBtnFill /></i>
                </a>
                <a href="#" target="_blank" rel="noreferrer">
                    <i className="footer-ico"><BsFacebook /></i>
                </a>
            </div>

            <div className="footer-text">
                <ul>
                    <a href="#">
                        <li>Audiodescrição</li>
                    </a>
                    <a href="#">
                        <li>Relações com investidores</li>
                    </a>
                    <a href="#">
                        <li>Avisos legais</li>
                    </a>
                
                    <a href="#">
                        <li>Central de Ajuda</li>
                    </a>
                    <a href="#">
                        <li>Carreiras</li>
                    </a>
                    <a href="#">
                        <li>Preferência de cookies</li>
                    </a>
            
                    <a href="#">
                        <li>Cartão pré-pago</li>
                    </a>
                    <a href="#">
                        <li>Termo de Uso</li>
                    </a>
                    <a href="#">
                        <li>Informações corporativas</li>
                    </a>
            
                    <a href="#">
                        <li>Impresa</li>
                    </a>
                    <a href="#">
                        <li>Privacidade</li>
                    </a>
                    <a href="#">
                        <li>Entre em contato</li>
                    </a>
                </ul>
            </div>
            <button>Código de serviços</button>
            <p className='copyright-text'>© 1997 - 2024 Netflix Clone, Inc</p>

        </div>
    )
}

export default Footer
