// Imports Bibliotecas
import React, { useEffect, useRef } from 'react'

// Importa CSS
import './TitleCards.css'

// Import icon, img, assets
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

// import Components
import Cards_Data from '../../assets/cards/Cards_data'


const TitleCards = ({title, category}) => {

    // Declaraçao de constants e funçoes
    const cardsRef = useRef();

    const handleWheel = (e) => {
        e.preventDefault();
        cardsRef.current.scrollLeft += e.deltaY;
    }

    const scrollLeft = () => {
        cardsRef.current.scrollLeft -= cardsRef.current.offsetWidth;
    }

    const scrollRight = () => {
        cardsRef.current.scrollLeft += cardsRef.current.offsetWidth;
    }

    useEffect(() => {
        cardsRef.current.addEventListener('wheel', handleWheel);
    }, [])

    return (
        <div className='title-cards'>
            <h2>{title ? title : "Novidades na Netflix"}</h2>
            <BsChevronLeft className="scroll-icon left" onClick={scrollLeft} />
            <div className="cards-list" ref={cardsRef}>
                {Cards_Data.map((card, index) => {
                    return <div className='card' key={index}>
                        <img src={card.image} alt="Imagem" />
                    </div>
                })}
            </div>
            <BsChevronRight className="scroll-icon right" onClick={scrollRight} />
        </div>
    )
}

export default TitleCards
