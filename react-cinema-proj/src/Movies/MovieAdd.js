import { useState } from "react"
import { Navigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { isValidString} from '../ValiTools'
import PropTypes from 'prop-types';
import './Movie.css';

export default function MovieAdd(params) {
    const [added, setAdded] = useState(false)
    const [tytul, setTytul] = useState('')
    const [czas_trwania, setCzas] = useState('')
    const [plakat, setPlakat] = useState('')
    const [opis, setOpis] = useState('')
    const movies = useSelector(state => state.movies)

    function add() {
        
        if(!iscorrectTitle(tytul))
        {
            alert("Title must be uppercase, and/or should be longer")
            return
        }
        if(!isValidHttpUrl(plakat))
        {
            alert("Incorect html")
            return
        }
        if(+czas_trwania>300 || +czas_trwania<30){
            alert("Incorect length")
            return
        }
        if(!isValidString(opis))
            {
            alert("Incorect description")
                return
            }
        params.addMovie({ id: movies[movies.length - 1].id + 1, tytul, czas_trwania: czas_trwania + " min", plakat, opis })
        setAdded(true)
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
        <div class="adds">
            <div class="field2"><input autoComplete="false" id="title" placeholder="Tytul" onChange={e => setTytul(e.target.value)} required></input></div>
            <div class="field2"><input autoComplete="false" id="description" placeholder="Streszczenie" onChange={e => setOpis(e.target.value)} required></input></div>
            <div class="field3"><input type="number" min="30" max="300" autoComplete="false" id="length" placeholder="Czas trwania" onChange={e => setCzas(e.target.value)} required ></input></div>
            <div class="field2"><input autoComplete="false" id='poster' placeholder="Plakat" onChange={e => setPlakat(e.target.value)} required></input></div>
            <button class="button5" onClick={add}>Dodaj </button>
            {added === true ? <Navigate replace to="/" /> : ""}
        </div>
    )
}

MovieAdd.propTypes = {
    addMovie: PropTypes.func
}