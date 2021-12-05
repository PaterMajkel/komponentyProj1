import { Link, Outlet } from 'react-router-dom'
import React, {useState, useEffect} from 'react'
import {getSeances} from '../../API/SeanceAPI'
import {Movie} from './Movie'
import { useSelector, useDispatch } from 'react-redux'
import { reload } from '../Redux/Actions/movieActions'

export function Movies(){

    const movies = useSelector(state=> state.movies)
    const dispatch = useDispatch()
    
      if(movies===undefined)
        dispatch(reload())

    return(
        <div>
            {movies.map(movie => {
            return (<Link to={`/movies/${movie.id}`}><Movie movie={movie}></Movie></Link>)})}
        </div>
    )
}

