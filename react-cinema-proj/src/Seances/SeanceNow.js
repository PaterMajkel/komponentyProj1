import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Seance } from './Seance';
import './Seance.css'
export function SeanceNow(){
    const [seancesToday, setSeancesToday] = useState([])
    const seances = useSelector(state => state.seances);
    const movies = useSelector(state => state.movies) 
    var today = new Date();

    useEffect(() => {
        show()
        return () => {
        }
    }, [])

    function show(){
        setSeancesToday(seances.filter(x=>+x.data.split('.')[0]===today.getUTCDate() && +x.data.split('.')[1]===today.getUTCMonth()+1 && x.godzina>=today.getUTCHours))
    }

    return(
        <div>
          {seancesToday.map(seance => {const movie=movies.find(p=> p.id===seance.filmID)
            return (<Seance plakat={movie.plakat} tytul={movie.tytul} wolne_miejsca={seance.liczba_dostepnych_miejsc-seance.liczba_sprzedanych_biletow}
            data={seance.data} filmID={seance.filmID} id={seance.id}></Seance>)})}
          </div>
    )

}