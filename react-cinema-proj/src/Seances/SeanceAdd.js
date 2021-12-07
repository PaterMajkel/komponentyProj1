import { useState } from "react"
import { Navigate } from "react-router-dom"
import { useSelector } from "react-redux"
import PropTypes from 'prop-types'

export default function SeanceAdd(params){
    const [added, setAdded] = useState(false)
    const [data, setDate] = useState('');
    const [godzina, setHour] = useState('');
    const [salaID, setRoomId] = useState('');
    const [filmID, setMovieId] = useState('');
    const [liczba_sprzedanych_biletow, setSoldTickets] = useState('');
    const [liczba_dostepnych_miejsc, setAvailableTickets] = useState('');
    const seances = useSelector(state => state.seances)
    const salas = useSelector(state => state.salas)
    var today = new Date();
    //today=today.toISOString().substring(0, 10);//nie działa wrr
    function add(){
        if(+data.split('-')[2]<today.getUTCDate())
        {
            alert("Wrong date")
            return
        }
        if(+data.split('-')[1]<today.getUTCMonth()+1)
        {
            alert("Wrong date")
            return
        }
        if(+data.split('-')[2]===today.getUTCDate())
        {
            if(+godzina.split(':')[0]<today.getUTCHours())
            {
                alert("Wrong time")
            return
            }
        }
        if(+data.split('-')[0]===today.getUTCFullYear)
        console.log("DEBUG: " + seances[seances.length-1]);
        params.addSeance({id: +seances[seances.length-1].id, data: data.split('-')[2]+"."+data.split('-')[1]+"."+data.split('-')[0], godzina,salaID: +salaID,filmID: +filmID, liczba_sprzedanych_biletow: 0, liczba_dostepnych_miejsc: salas.find(s=>s.id===+salaID).ilosc_miejsc});
        setAdded(true);
    }

    return(
        <div class="adds"> 
            <div class="field3"><input type="date"  min={today} autoComplete="false" id="date" placeholder="Data seansu" onChange={e => setDate(e.target.value)} required/></div>
            <div class="field3"><input type="time" autoComplete="false" id="hour" placeholder="Godzina seansu" onChange={e => setHour(e.target.value)} required /></div>
            <div class="field2"><input autoComplete="false" id="roomId" placeholder="Numer sali" onChange={e => setRoomId(e.target.value)} required/></div>
            <div class="field2"><input autoComplete="false" id="movieId" placeholder="Film" onChange={e => setMovieId(e.target.value)} required/></div>

            <button class="button5" onClick={add}>Dodaj</button>
            { added===true ? <Navigate replace to="/" /> : ""}
        </div>
    )
}

SeanceAdd.propTypes = {
    addSeance: PropTypes.func
}