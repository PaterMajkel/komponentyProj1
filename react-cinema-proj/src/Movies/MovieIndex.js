import {Link, useParams, Outlet} from 'react-router-dom'
import { useSelector, useDispatch} from 'react-redux';
import {useState} from 'react'
import { getMovieById } from '../Actions/movieActions';
import { Movie } from './Movie';
export function MovieIndex(){
    let {movieId} = useParams();

    const movies = useSelector(state=> state.movies)
    const movie = movies.find(p=> p.id ==movieId)
    return( 
        <div>
        <Movie movie={movie}></Movie>
        <Link to={`edit`}><button>Edit</button></Link>
        <Outlet/>
    </div>
    )
}