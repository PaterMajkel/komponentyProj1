import { Link, Outlet } from 'react-router-dom'
import React, {useState, useEffect} from 'react'
import {getSeances} from '../API/SeanceAPI'
import { Seance } from './Seance'
import { useSelector, useDispatch } from 'react-redux'
import { reload } from '../Redux/Actions/seanceActions'
import { reload  as movieReload } from '../Redux/Actions/movieActions' 
export function Seances(props){
    //const [seances, setSeances] = useState([])
    const seances = useSelector(state=> state.seances)
    const movies = useSelector(state=> state.movies)
    const dispatch = useDispatch()
    if(seances===undefined)
      dispatch(reload())
    if(movies===undefined)
      dispatch(movieReload())
    console.log(seances)
    return(
        <div>
            {seances.map(seance => {const movie=movies.find(p=> p.id===seance.filmID)
            return (<Seance plakat={movie.plakat} tytul={movie.tytul} wolne_miejsca={seance.liczba_dostepnych_miejsc-seance.liczba_sprzedanych_biletow}
            data={seance.data} filmID={seance.filmID} id={seance.id}></Seance>)})}
        </div>
    )
}