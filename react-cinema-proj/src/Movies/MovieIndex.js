import { Link, useParams, Outlet, Navigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react'
import { getMovieById } from '../Redux/Actions/movieActions';
import { Movie } from './Movie';
import './Movie.css';
export function MovieIndex(params) {
    const [deleted, setDeleted] = useState(false)
    let { movieId } = useParams();

    function deleteMovie() {
        params.deleteMovie(movieId)
        setDeleted(true)
    }

    const movies = useSelector(state => state.movies)
    const movie = movies.find(p => p.id == movieId)
    return (
        <div class="all">
            <Movie movie={movie} index={true}></Movie>
            <div class="editable"> 
                <div><Link to={`edit`}><button class="button1">Edit</button></Link></div>
                <div>{params.deleteMovie !== undefined ? <button class="button2" onClick={deleteMovie}>Usuń</button> : ""}</div>
                {deleted === true ? <Navigate replace to="/" /> : ""}
            </div>
            <Outlet />
        </div>
    )
}