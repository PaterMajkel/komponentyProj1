import { Link, Outlet } from 'react-router-dom'
import React, {useState, useEffect} from 'react'
import {getSeances} from '../ApiCalls'
import {Movie} from './Movie'

export function Movies(props){
    const [movies, setMovies] = useState(props.movies)
    //const [seances, setSeances] = useState([])

    useEffect(() => {
        //api()
      }, [])
      
      async function api(){
        const x = await getSeances()
        setMovies(x)
      }

    return(
        <div>
            {movies.map(movie => {
            return (<Movie movie={movie}></Movie>)})}
        </div>
    )
}

