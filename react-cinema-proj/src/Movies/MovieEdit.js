import { useParams, Navigate,  } from 'react-router-dom'
import { isValidString} from '../ValiTools'
import PropTypes from 'prop-types'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import './Movie.css';

export function MovieEdit(params) {
    let { movieId } = useParams();
    const movies = useSelector(state => state.movies)
    const movie = movies.find(p => p.id === +movieId)

    const [title, setTitle] = useState(movie.tytul)
    const [description, setDescription] = useState(movie.opis)
    const [length, setLength] = useState(movie.czas_trwania)
    const [poster, setPoster] = useState(movie.plakat)
    const [edited, setEdited] = useState(false)
    function Edit() {
        if(!iscorrectTitle(title))
        {
            alert("Title must be uppercase, and/or should be longer")
            return
        }
        if(!isValidHttpUrl(poster))
        {
            alert("Incorect html")
            return
        }
        if(+length>300 || +length<30){
            alert("Incorect length")
            return
        }
        if(!isValidString(description))
            {
            alert("Incorect description")
                return
            }
        params.edit({ id: +movieId, tytul: title, opis: description, czas_trwania: length, plakat: poster })
        setEdited(true)
    }
    function isValidHttpUrl(string) {//funkcja sprawdza poprawność czy to link 
        let url;

        try {
            url = new URL(string);
        } catch (_) {
            return false;
        }

        return url.protocol === "http:" || url.protocol === "https:";
    }
    function iscorrectTitle(s)
    {
        if((s.match(/^\d/) || (s.charCodeAt(0)>=65 && s.charCodeAt(0)<=90)) && s.length>1 )
        {
            return true
        }
    }
    return (
        <div class="edycja">
            <div class="field"><input autoComplete="false" id="title" placeholder={movie.tytul} onChange={e => setTitle(e.target.value)} ></input></div>
            <div class="field"><input autoComplete="false" id="description" placeholder={movie.opis} onChange={e => setDescription(e.target.value)} ></input></div>
            <div class="field4"><input type="number" min="0" max="300" autoComplete="false" placeholder={movie.czas_trwania} id="length" onChange={e => setLength(e.target.value)} ></input></div>
            <div class="field"><input autoComplete="false" id='poster' placeholder={movie.plakat} onChange={e => setPoster(e.target.value)} ></input></div>
            <div><button class="button3" onClick={Edit}>Zmien </button></div>
            {edited === true ? <Navigate replace to="/" /> : ""}
        </div>
    )

}

MovieEdit.propTypes = {
    edit: PropTypes.func
}