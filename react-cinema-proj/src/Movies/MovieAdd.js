import { useState } from "react"
import { Navigate } from "react-router-dom"
import { useSelector } from "react-redux"

export default function MovieAdd(params){
    const [added, setAdded] = useState(false)
    const [tytul, setTytul] = useState('')
    const [czas_trwania, setCzas] = useState('')
    const [plakat, setPlakat] = useState('')
    const [opis, setOpis] = useState('')
    const movies = useSelector(state=> state.movies)

    function add(){
        console.log(movies[movies.length-1])

        params.addMovie({id: movies[movies.length-1].id,tytul, czas_trwania, plakat, opis})
        setAdded(true)
    }

    return(
        <div>
             <input autoComplete="false" id="title" placeholder= "Tytul" onChange={e => setTytul(e.target.value)}></input>
            <input autoComplete="false" id="description" placeholder= "Streszczenie" onChange={e => setOpis(e.target.value)}></input>
            <input autoComplete="false" id="length" placeholder= "Czas trwania" onChange={e => setCzas(e.target.value)}></input>
            <input autoComplete="false" id='poster' placeholder= "Plakat" onChange={e => setPlakat(e.target.value)}></input>
            <button onClick={add}>Dodaj </button>
            {added===true? <Navigate replace to="/" /> : ""}
        </div>
    )
}