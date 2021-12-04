import { Link } from 'react-router-dom';
import { useState } from 'react';
export function Movie(params){

    return(
        <div> {params.movie===undefined ? '' : 
        <div>
            <img src={params.movie.plakat} alt="Movie poster"></img>
            <h4>{params.movie.tytul}</h4>
            <p>streszczenie: {params.movie.opis}</p>
            <p>Czas trwania: {params.movie.czas_trwania}</p>
        </div>
        }
    </div>
    )
}

