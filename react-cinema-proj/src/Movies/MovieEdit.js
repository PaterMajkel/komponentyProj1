import {useParams, Navigate} from 'react-router-dom'
import { useState } from 'react';
import { useSelector} from 'react-redux';

export function MovieEdit(params){
    let {movieId} = useParams();

    const movies = useSelector(state=> state.movies)
    const movie = movies.find(p=> p.id == movieId)

    const [title, setTitle] = useState(movie.tytul)
    const [description, setDescription] = useState(movie.opis)
    const [length, setLength] = useState(movie.czas_trwania)
    const [poster, setPoster] = useState(movie.plakat)
    const [edited, setEdited] = useState(false)
    function Edit(){
        
        params.edit({id: movieId, tytul: title, opis: description, czas_trwania: length + " min", plakat: poster})
        setEdited(true)
    }

    return( 
        <div>
            <input autoComplete="false" id="title" placeholder= {movie.tytul} onChange={e => setTitle(e.target.value)}></input>
            <input autoComplete="false" id="description" placeholder= "Streszczenie" onChange={e => setDescription(e.target.value)}></input>
            <input autoComplete="false" id="length" placeholder= "Czas trwania" onChange={e => setLength(e.target.value)}></input>
            <input autoComplete="false" id='poster' placeholder= "Plakat" onChange={e => setPoster(e.target.value)}></input>
            <button onClick={Edit}>Zmien </button>
            {edited===true? <Navigate replace to="/" /> : ""}
        </div>
    )
    
}