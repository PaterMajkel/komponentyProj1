import { Link, useParams, Outlet, Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Movie } from './Movie';
import { reloadMovies } from '../Redux/Actions/movieActions';
import './Movie.css';
export function MovieIndex(params) {
    const movies = useSelector(state => state.movies)
    const [deleted, setDeleted] = useState(false)
    const seances = useSelector(state => state.seances)
    let { movieId } = useParams();
    const [movie, setMovie] = useState(movies.find(p => p.id === +movieId))
    const [seancesOfMovies, setSeancesOfMovies] = useState(seances.filter(seance => seance.filmID === +movieId))
    function deleteMovie() {
        if(seances.find(x=> x.filmID===+movieId))
            {
                alert("there is a seance of this movie")
                return;
            }
        params.deleteMovie(movieId)
        setDeleted(true)
    }
    function prepareData() {
        let dates = seancesOfMovies.map(seance => seance.data)
        let data = []
        for (let i of dates) {
            let counts = seancesOfMovies.filter(seance => seance.data === i).map(x => x.liczba_sprzedanych_biletow)
            let dayCount = 0;
            for (let j of counts) {
                dayCount += +j
            }
            data.push({ date: i, dayCount })
        }
        return data
    }
    return (
        <div class="all">
            <Movie plakat={movie.plakat} opis={movie.opis} tytul={movie.tytul} czas_trwania={movie.czas_trwania} id={movie.id} index={true}></Movie>
            <div>
                    {prepareData().map(x => {
                        return (<div>
                            <dd class="populariti">
                                <div>Sprzedane w danym dniu: {x.date}-{x.dayCount}</div>
                            </dd>
                        </div>
                        )
                    })}
                </div>
            <div class="editable">
                <div><Link to={`edit`}><button class="button1">Edit</button></Link></div>
                <div>{params.deleteMovie !== undefined ? <button class="button2" onClick={deleteMovie}>Usuń</button> : ""}</div>
                {deleted === true ? <Navigate replace to="/" /> : ""}
            </div>
            <Outlet />
        </div>

    )
}

MovieIndex.propTypes = {
    deleteMovie: PropTypes.func

}