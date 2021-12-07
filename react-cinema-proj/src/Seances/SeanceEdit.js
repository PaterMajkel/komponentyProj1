import PropTypes from 'prop-types';
import { useParams, Navigate } from 'react-router-dom'
import { useState } from 'react'
import { useSelector } from 'react-redux'
export function SeanceEdit(params) {
    let {seanceId} = useParams();

    const seances = useSelector(state => state.seances);
    const seance = seances.find(s => s.id === +seanceId);

    const [date, setDate] = useState(seance.data);
    const [hour, setHour] = useState(seance.godzina);
    const [roomId, setRoomId] = useState(seance.salaID);
    const [movieId, setMovieId] = useState(seance.filmID);
    const [soldTickets, setSoldTickets] = useState(seance.liczba_sprzedanych_biletow);
    const [availableTickets, setAvailableTickets] = useState(seance.liczba_dostepnych_miejsc);
    const [edited, setEdited] = useState(false);
    var today = new Date();
    function Edit() {
        if(+date.split('-')[2]<today.getUTCDate())
        {
            alert("Wrong date")
            return
        }
        if(+date.split('-')[1]<today.getUTCMonth()+1)
        {
            alert("Wrong date")
            return
        }
        if(+date.split('-')[2]===today.getUTCDate())
        {
            if(+hour.split(':')[0]<today.getUTCHours())
            {
                alert("Wrong time")
            return
            }
        }
        if(+date.split('-')[0]===today.getUTCFullYear)
        params.edit({id: seanceId, data: date, godzina: hour, salaID: roomId, filmID: movieId, liczba_sprzedanych_biletow: soldTickets, liczba_dostepnych_miejsc: availableTickets});
        setEdited(true);
    }
    
    return (
        <div class="edycja">
            <div class="field3"><input type="date" min={today}  autoComplete="false" id="date" placeholder={date} onChange={e => setDate(e.target.value)} /></div>
            <div class="field3"><input type="time" autoComplete="false" id="hour" placeholder={hour} onChange={e => setHour(e.target.value)} /></div>
            <div class="field"><input autoComplete="false" id="roomId" placeholder={roomId} onChange={e => setRoomId(e.target.value)} /></div>
            <div class="field"><input autoComplete="false" id="movieId" placeholder={movieId} onChange={e => setMovieId(e.target.value)} /></div>
            <button class="button3" onClick={Edit}>Edytuj</button>
            {edited === true ? <Navigate replace to="/" /> : ""}
        </div>
    )
}

SeanceEdit.propTypes = {
    edit: PropTypes.func
}