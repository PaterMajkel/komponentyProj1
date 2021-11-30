import { Link } from 'react-router-dom';

export function Movie(params){
    return(
        <div>
            <img src={params.movie.plakat} alt="Movie poster"></img>
            <h4>{params.movie.tytul}</h4>
            <p>streszczenie //TODO</p>
            <p>Czas trwania: {params.movie.czas_trwania}</p>
        </div>
    )
}

