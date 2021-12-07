import { Link, Outlet } from 'react-router-dom'
import React, {useState, useEffect} from 'react'
import {Movie} from './Movie'
import { useSelector, useDispatch } from 'react-redux'
import { reloadMovies } from '../Redux/Actions/movieActions'

export function Movies(){

    const movies = useSelector(state=> state.movies)
    const dispatch = useDispatch()
    
      if(movies===undefined)
        dispatch(reloadMovies())

    return(
        <div>
            {movies.map(movie => {
            return (<Movie plakat={movie.plakat} tytul={movie.tytul} opis={movie.opis} czas_trwania={movie.czas_trwania} id={movie.id}></Movie>)})}
        </div>
    )
}

