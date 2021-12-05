import { Link, Outlet } from 'react-router-dom'
import React, {useState, useEffect} from 'react'
import { Seance } from './Seance'
import { useSelector, useDispatch } from 'react-redux'
import { reloadSeances } from '../Redux/Actions/seanceActions'
import { reloadMovies  } from '../Redux/Actions/movieActions' 
export function Seances(props){
    //const [seances, setSeances] = useState([])
    const seances = useSelector(seancesState => seancesState.seances)
    const movies = useSelector(moviesState=> moviesState.movies)
    const dispatch = useDispatch()
    if(seances===undefined)
      dispatch(reloadSeances())
    if(movies===undefined)
      dispatch(reloadMovies())
    console.log(seances)
    return(
        <div>
            {seances.map(seance => {const movie=movies.find(p=> p.id===seance.filmID)
            return (<Seance plakat={movie.plakat} tytul={movie.tytul} wolne_miejsca={seance.liczba_dostepnych_miejsc-seance.liczba_sprzedanych_biletow}
            data={seance.data} filmID={seance.filmID} id={seance.id}></Seance>)})}
        </div>
    )
}