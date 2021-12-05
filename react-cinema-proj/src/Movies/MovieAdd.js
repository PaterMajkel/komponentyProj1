import { useState } from "react"
import { Navigate } from "react-router-dom"
import { useSelector } from "react-redux"
import './Movie.css';
export default function MovieAdd(params) {
    const [added, setAdded] = useState(false)
    const [tytul, setTytul] = useState('')
    const [czas_trwania, setCzas] = useState('')
    const [plakat, setPlakat] = useState('')
    const [opis, setOpis] = useState('')
    const movies = useSelector(state => state.movies)

    function add() {
        console.log(movies[movies.length - 1])

        params.addMovie({ id: movies[movies.length - 1].id, tytul, czas_trwania: czas_trwania + " min", plakat, opis })
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
    return (
        <div class="adds">
            <div class="field2"><input autoComplete="false" id="title" placeholder="Tytul" onChange={e => setTytul(e.target.value)} required></input></div>
            <div class="field2"><input autoComplete="false" id="description" placeholder="Streszczenie" onChange={e => setOpis(e.target.value)} required></input></div>
            <div class="field2"><input type="number" autoComplete="false" id="length" placeholder="Czas trwania" onChange={e => setCzas(e.target.value)} required ></input></div>
            <div class="field2"><input autoComplete="false" id='poster' placeholder="Plakat" onChange={e => setPlakat(e.target.value)} required></input></div>
            <button class="button5" onClick={add}>Dodaj </button>
            {added === true ? <Navigate replace to="/" /> : ""}
        </div>
    )
}