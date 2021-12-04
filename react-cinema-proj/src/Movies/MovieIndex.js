import {Link, useParams, Outlet, Navigate} from 'react-router-dom'
import { useSelector, useDispatch} from 'react-redux';
import {useState} from 'react'
import { getMovieById } from '../Actions/movieActions';
import { Movie } from './Movie';
export function MovieIndex(params){
    const [deleted, setDeleted] = useState(false)
    let {movieId} = useParams();

    function deleteMovie(){
        params.deleteMovie(movieId)
        setDeleted(true)
    }

    const movies = useSelector(state=> state.movies)
    const movie = movies.find(p=> p.id == movieId)
    return( 
        <div>
        <Movie movie={movie}></Movie>
        <Link to={`edit`}><button>Edit</button></Link>
        {params.deleteMovie !==undefined ? <button onClick={deleteMovie}>Usuń</button> : ""}
        {deleted===true? <Navigate replace to="/" /> : ""}

        <Outlet/>
    </div>
    )
}