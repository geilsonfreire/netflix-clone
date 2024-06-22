// Imports Bibliotecas
import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';

// Importa CSS
import './TitleCards.css'

// Import icon, img, assets
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

// import Components
import Cards_Data from '../../assets/cards/Cards_data'


const TitleCards = ({ title, category }) => {

    // Declaraçao de constants e funçoes
    const [apiData, setApiData] = useState([]);
    const cardsRef = useRef();

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYjZmNDFiYzRmZGNmYmI2MWNmNmM4MzBlOTdkNTFhMyIsIm5iZiI6MTcxOTA1ODgzMC44OTQ2Mywic3ViIjoiNjY3NjA0Y2M2NjBmOWVhNWIwMzRiYjhhIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.c5dfWNfbNJosO2D3wBESEWK5n11lHoMrNAmhqyW3Mjs'
        }
    };

    useEffect(() => {

        fetch(`https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=1`, options)
            .then(response => response.json())
            .then(response => setApiData(response.results))
            .catch(err => console.error(err));

        cardsRef.current.addEventListener('wheel', handleWheel);
    }, [])


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

   
    return (
        <div className='title-cards'>
            <h2>{title ? title : "Novidades na Netflix"}</h2>
            <BsChevronLeft className="scroll-icon left" onClick={scrollLeft} />
            <div className="cards-list" ref={cardsRef}>
                {apiData.map((card, index) => {
                    return <Link to={`/player/${card.id}`} className='card' key={index}>
                        <img src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path} alt="Logo do card" />
                        <p>{card.original_title}</p>
                    </Link>
                })}
            </div>
            <BsChevronRight className="scroll-icon right" onClick={scrollRight} />
        </div>
    )
}

export default TitleCards
