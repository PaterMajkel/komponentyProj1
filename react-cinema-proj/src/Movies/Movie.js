import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Movie.css'
export function Movie(params){

 
    return(
    <div> {params.movie===undefined ? '' : 
        <div class="film">
            <img src={params.movie.plakat} alt="Movie poster"></img>
            <div class="Opis">
                <h4>{params.movie.tytul}</h4>
                <p>Czas trwania: {params.movie.czas_trwania}</p>
                <p>streszczenie: {params.movie.opis}</p>
                
            </div>
        </div>
        }
    </div>
    )
}

