import { useParams, Navigate } from 'react-router-dom'
import { useState } from 'react'
import { useSelector } from 'react-redux'

export function SeanceEdit(params) {
    let {seanceId} = useParams();

    const seances = useSelector(state => state.seances);
    const seance = seances.find(s => s.id == seanceId);

    const [date, setDate] = useState(seance.data);
    const [hour, setHour] = useState(seance.godzina);
    const [roomId, setRoomId] = useState(seance.salaID);
    const [movieId, setMovieId] = useState(seance.filmID);
    const [soldTickets, setSoldTickets] = useState(seance.liczba_sprzedanych_biletow);
    const [availableTickets, setAvailableTickets] = useState(seance.liczba_dostepnych_miejsc);
    const [edited, setEdited] = useState(false);


    function Edit() {
        params.edit({id: seanceId, data: date, godzina: hour, salaID: roomId, filmID: movieId, liczba_sprzedanych_biletow: soldTickets, liczba_dostepnych_miejsc: availableTickets});
        setEdited(true);
    }

    return (
        <div>
            <input autoComplete="false" id="date" placeholder="Data seansu" onChange={e => setDate(e.target.value)} />
            <input autoComplete="false" id="hour" placeholder="Godzina seansu" onChange={e => setHour(e.target.value)} />
            <input autoComplete="false" id="roomId" placeholder="Numer sali" onChange={e => setRoomId(e.target.value)} />
            <input autoComplete="false" id="movieId" placeholder="Film" onChange={e => setMovieId(e.target.value)} />
            <input autoComplete="false" id="soldTickets" placeholder="Ilość sprzedanych biletów" onChange={e => setSoldTickets(e.target.value)} />
            <input autoComplete="false" id="availableTickets" placeholder="Numer sali" onChange={e => setAvailableTickets(e.target.value)} />
            <button onClick={Edit}>Edytuj seans</button>
            {edited === true ? <Navigate replace to="/" /> : ""}
        </div>
    )
}