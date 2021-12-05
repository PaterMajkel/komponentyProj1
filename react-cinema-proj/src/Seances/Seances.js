import { Link, Outlet } from 'react-router-dom'
import React, {useState, useEffect} from 'react'
import {getSeances} from '../API/SeanceAPI'
import { Seance } from './Seance'


export function Seances(props){
    const [seances, setSeances] = useState(props.seances)
    const [movies, setMovies] = useState(props.movies)
    //const [seances, setSeances] = useState([])

    useEffect(() => {
        //api()
      }, [])
      
      async function api(){
        const x = await getSeances()
        setSeances(x)
      }

    console.log(seances)
    return(
        <div>
            {seances.map(seance => {const movie=movies.find(p=> p.id===seance.filmID)
            return (<Seance plakat={movie.plakat} tytul={movie.tytul} wolne_miejsca={seance.liczba_dostepnych_miejsc-seance.liczba_sprzedanych_biletow}
            data={seance.data} filmID={seance.filmID} id={seance.id}></Seance>)})}
        </div>
    )
}