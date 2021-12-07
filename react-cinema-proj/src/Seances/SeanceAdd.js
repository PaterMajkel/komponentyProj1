import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import PropTypes from 'prop-types'

export default function SeanceAdd(params){
    const [data, setDate] = useState('');
    const [godzina, setHour] = useState('');
    const [salaID, setRoomId] = useState('');
    const [filmID, setMovieId] = useState('');
    const seances = useSelector(state => state.seances)
    const salas = useSelector(state => state.salas)
    const movies = useSelector(state => state.movies)
    var today = new Date();
    const navigate = useNavigate()
    function add(){
        if(data===null){
            alert("Wrong date")
            return
        }
        if(godzina === null)
        {alert("Wrong date")
        return}
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
        if(+data.split('-')[0]>today.getUTCFullYear)
        {
            alert("Wrong year")
            return
        }
        if(movies.find(m=> m.id === +filmID)===undefined)
        {
            alert("That movie doesn't exist")
            return

        }
        if(salas.find(m=> m.id === +salaID)===undefined)
        {
            alert("That room doesn't exist")
            return

        }
        console.log("DEBUG: " + seances[seances.length-1]);
        params.addSeance({id: +seances[seances.length-1].id, data: data.split('-')[2]+"."+data.split('-')[1]+"."+data.split('-')[0], godzina,salaID: +salaID,filmID: +filmID, liczba_sprzedanych_biletow: 0, liczba_dostepnych_miejsc: salas.find(s=>s.id===+salaID).ilosc_miejsc});
        navigate(-1)
    }

    return(
        <div class="adds"> 
            <div class="field4"><input type="date"  min={today} autoComplete="false" id="date" placeholder="Data seansu" onChange={e => setDate(e.target.value)} required/></div>
            <div class="field4"><input type="time" autoComplete="false" id="hour" placeholder="Godzina seansu" onChange={e => setHour(e.target.value)} required /></div>
            <div class="field2"><input autoComplete="false" id="roomId" placeholder="Numer sali" onChange={e => setRoomId(e.target.value)} required/></div>
            <div class="field2"><input autoComplete="false" id="movieId" placeholder="Film ID" onChange={e => setMovieId(e.target.value)} required/></div>

            <button class="button5" onClick={add}>Dodaj</button>
        </div>
    )
}

SeanceAdd.propTypes = {
    addSeance: PropTypes.func
}