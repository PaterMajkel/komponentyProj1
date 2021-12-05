import { Link, useParams, Outlet, Navigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { Seance } from './Seance'
import { Movie } from '../Movies/Movie';

export function SeanceIndex(params) {
    const [deleted, setDeleted] = useState(false);
    let {seanceId} = useParams();

    function deleteSeance() {
        params.deleteSeance(seanceId);
        setDeleted(true);
    }

    const movies = useSelector(state => state.movies)
    const seances = useSelector(state => state.seances);
    const seance = seances.find(s => s.id == seanceId);
    const movie = movies.find(p => p.id===seance.filmID)
    return (
        <div>
            <Seance plakat={movie.plakat} tytul={movie.tytul} wolne_miejsca={seance.liczba_dostepnych_miejsc-seance.liczba_sprzedanych_biletow}
            data={seance.data} filmID={seance.filmID} id={seance.id} index={true}></Seance>
            <Link to={`edit`}><button>Edit</button></Link>
            {params.deleteSeance !== undefined ? <button onClick={deleteSeance}>Usuń</button> : ""}
            {deleted === true ? <Navigate replace to="/" /> : "" }

            <Outlet />
        </div>
    )
}