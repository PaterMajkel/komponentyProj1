import { Link, Outlet } from 'react-router-dom'
import React, {useState, useEffect} from 'react'
import { Seance } from './Seance'
import { useSelector, useDispatch } from 'react-redux'
import { reloadSeances } from '../Redux/Actions/seanceActions'
import { reloadMovies  } from '../Redux/Actions/movieActions' 
import './Seance.css'
export function SeanceDate(){
    const [seancesToday, setSeancesToday] = useState([])
    const [pickedDate, setPickedDate] = useState([])
    const seances = useSelector(state => state.seances)
    const movies = useSelector(state => state.movies) 

    function show(){
        console.log(pickedDate.split('-'))
        console.log(seances.filter(x=>x.data.split('.')[0]===pickedDate.split('-')[2]))
        setSeancesToday(seances.filter(x=>+x.data.split('.')[0]===+pickedDate.split('-')[2] && +x.data.split('.')[1]===+pickedDate.split('-')[1]))
        console.log(seancesToday)
    }

    var today = new Date();
    console.log(today.getDate())
    today=today.toISOString().substring(0, 10);
    return (<div class="movecenter">
          <div><p>Wybierz Datę z którego dnia chcesz zobaczyć seanse</p></div> 
          <div class="field3"><input type="date"  min={today} autoComplete="false" id="date" placeholder="Data seansu" required onChange={e => setPickedDate(e.target.value)}/></div>
          <div><button class="button5" onClick={show}>Pokaż</button></div>
          <div>
          {seancesToday.map(seance => {const movie=movies.find(p=> p.id===seance.filmID)
            return (<Seance plakat={movie.plakat} tytul={movie.tytul} wolne_miejsca={seance.liczba_dostepnych_miejsc-seance.liczba_sprzedanych_biletow}
            data={seance.data} filmID={seance.filmID} id={seance.id}></Seance>)})}
          </div>
    </div>)
}