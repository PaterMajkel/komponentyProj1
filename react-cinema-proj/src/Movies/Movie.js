import { Link } from 'react-router-dom';
import './Movie.css'
export function Movie(params){
    return(
        <div class="film">
            <img src={params.movie.plakat} alt="Movie poster"></img>
            <div class="Opis">
                <h4>{params.movie.tytul}</h4>
                <p>streszczenie //TODO</p>
                <p>Czas trwania: {params.movie.czas_trwania}</p>
            </div>
        </div>
    )
}

