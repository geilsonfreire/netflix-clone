// imports bibliotecas
import React from 'react'

// importa css
import './Home.css'

// Imports Icon, IMG, Assets 
import Hero_Banner from '../../assets/img/hero_banner.jpg'
import Hero_Title from '../../assets/img/hero_title.png'
import { BsPlayFill, BsInfoCircle } from "react-icons/bs";

// Imports Components
import Navbar from '../../components/navbar/Navbar'
import TitleCards from '../../components/tile-cards/TitleCards';
import Footer from '../../components/footer/Footer';

const Home = () => {
    return (
        <div className='home'>
            <Navbar />
            <div className="hero">
                <img className='banner-img' src={Hero_Banner} alt="Banner" />
                <div className="hero-caption">
                    <img className='caption-img' src={Hero_Title} alt="Banner titulo" />
                    <p className='caption-text'>
                        Depois de descobrir os seus laços com uma antiga ordem secreta, um homem que vive em Istambul embarca numa missão para salvar a cidade de um inimigo imortal.
                    </p>

                    <div className="hero-btns">
                        <button className='btn'><i><BsPlayFill /></i>Assistir</button>
                        <button className='btn btn-info'><i><BsInfoCircle /></i>Mais  informações</button>
                    </div>
                    <TitleCards />
                </div>
            </div>
            <div className="other-cards">
                <TitleCards title={"Continuar assistindo"} category={"top_rated"}/>
                <TitleCards title={"Top 10 de hoje"} category={"popular"}/>
                <TitleCards title={"So na Netflix"} category={"upcoming"} />
                <TitleCards title={"séries favoritas da familia"} category={"now_playing"}/>
            </div>
            <Footer />
        </div>
    )
}

export default Home
