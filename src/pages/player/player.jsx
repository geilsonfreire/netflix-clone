// Imports bibliotecas
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

// Importa css
import './Player.css'

// Import icons, img, Assets
import { BsArrowLeftCircle } from "react-icons/bs";

const player = () => {

    const { id } = useParams();
    const Navigate = useNavigate();
    const [apiData, setApiData] = useState({
        name: "",
        published_at: "",
        type: ""
    })



    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYjZmNDFiYzRmZGNmYmI2MWNmNmM4MzBlOTdkNTFhMyIsIm5iZiI6MTcxOTA1ODgzMC44OTQ2Mywic3ViIjoiNjY3NjA0Y2M2NjBmOWVhNWIwMzRiYjhhIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.c5dfWNfbNJosO2D3wBESEWK5n11lHoMrNAmhqyW3Mjs'
        }
    };

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
            .then(response => response.json())
            .then(response => setApiData(response.results[0]))
            .catch(err => console.error(err));
    }, [id])


    return (
        <div className='player'>
            <i onClick={() => Navigate("/")}><BsArrowLeftCircle /></i>
            {apiData ? (

                <iframe
                    src={`https://www.youtube.com/embed/yAZxx8t9zig${apiData.key}`}
                    title="Trailer"
                    width={"90%"}
                    height={"90%"}
                    frameborder="0"
                    allowFullScreen
                ></iframe>
            ) : (
                <p>Carregando...</p> // Placeholder de carregamento
            )}
            {apiData && (
                <div className="player-info">
                    <p>{apiData.published_at.slice(0, 10)}</p>
                    <h1>{apiData.name}</h1>
                    <p>{apiData.type}</p>
                </div>
            )}
        </div>
    );
};

export default player
