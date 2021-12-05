import { useState } from "react"
import { Navigate } from "react-router-dom"
import { useSelector } from "react-redux"

export default function SeanceAdd(params){
    const [added, setAdded] = useState(false)
    const [data, setDate] = useState('');
    const [godzina, setHour] = useState('');
    const [salaID, setRoomId] = useState('');
    const [filmID, setMovieId] = useState('');
    const [liczba_sprzedanych_biletow, setSoldTickets] = useState('');
    const [liczba_dostepnych_miejsc, setAvailableTickets] = useState('');
    const seances = useSelector(state => state.seances)

    function add(){
        console.log("DEBUG: " + seances[seances.length-1]);
        params.addSeance({id: seances[seances.length-1].id, data, godzina, salaID, filmID, liczba_sprzedanych_biletow, liczba_dostepnych_miejsc});
        setAdded(true);
    }

    return(
        <div>
            <input autoComplete="false" id="date" placeholder="Data seansu" onChange={e => setDate(e.target.value)} />
            <input autoComplete="false" id="hour" placeholder="Godzina seansu" onChange={e => setHour(e.target.value)} />
            <input autoComplete="false" id="roomId" placeholder="Numer sali" onChange={e => setRoomId(e.target.value)} />
            <input autoComplete="false" id="movieId" placeholder="Film" onChange={e => setMovieId(e.target.value)} />
            <input autoComplete="false" id="soldTickets" placeholder="Ilość sprzedanych biletów" onChange={e => setSoldTickets(e.target.value)} />
            <input autoComplete="false" id="availableTickets" placeholder="Numer sali" onChange={e => setAvailableTickets(e.target.value)} />

            <button onClick={add}>Dodaj seans</button>
            { added===true ? <Navigate replace to="/" /> : ""}
        </div>
    )
}