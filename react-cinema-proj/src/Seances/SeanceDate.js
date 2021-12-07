import React, {useState, } from 'react'
import { Seance } from './Seance'
import { useSelector } from 'react-redux'
import './Seance.css'
export function SeanceDate(){
    const [seancesToday, setSeancesToday] = useState([])
    const [pickedDate, setPickedDate] = useState([])
    const seances = useSelector(state => state.seances)
    const movies = useSelector(state => state.movies) 

    function show(){
        setSeancesToday(seances.filter(x=>+x.data.split('.')[0]===+pickedDate.split('-')[2] && +x.data.split('.')[1]===+pickedDate.split('-')[1]))
    }

    var today = new Date();
    today=today.toISOString().substring(0, 10);
    return (<div class="movecenter">
          <div><p>Wybierz Datę z którego dnia chcesz zobaczyć seanse</p></div> 
          <div class="field1"><input type="date"  min={today} autoComplete="false" id="date" placeholder="Data seansu" required onChange={e => setPickedDate(e.target.value)}/></div>
          <button class="button5" onClick={show}>Pokaż</button>
          <div>
          {seancesToday.map(seance => {const movie=movies.find(p=> p.id===seance.filmID)
            return (<Seance plakat={movie.plakat} tytul={movie.tytul} wolne_miejsca={seance.liczba_dostepnych_miejsc} godzina={seance.godzina}
            data={seance.data} filmID={seance.filmID} id={seance.id}></Seance>)})}
          </div>
    </div>)
}