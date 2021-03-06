import { Link, useParams, Outlet, Navigate, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import { Seance } from './Seance'
import PropTypes from 'prop-types';
import { reloadMovies } from '../Redux/Actions/movieActions';
import { reloadSeances } from '../Redux/Actions/seanceActions';

export function SeanceIndex(params) {
    const [deleted, setDeleted] = useState(false);
    const movies = useSelector(state => state.movies)
    const seances = useSelector(state => state.seances);
    let { seanceId } = useParams();
    const salas = useSelector(state=>state.salas)
    function deleteSeance() {
        params.deleteSeance(+seanceId);
        setDeleted(true);
    }

    const seance = seances.find(s => s.id === +seanceId);
    const movie = movies.find(p => p.id === seance.filmID)
    return (
        <div>
        <div class="all">
            <Seance plakat={movie.plakat} tytul={movie.tytul} wolne_miejsca={seance.liczba_dostepnych_miejsc} godzina={seance.godzina}
                data={seance.data} filmID={seance.filmID} id={seance.id} index={true}></Seance>
            <div class="editable">
                <div><Link to={`edit`}><button class="button1">Edit</button></Link></div>
                <div>{params.deleteSeance !== undefined ? <button class="button2" onClick={deleteSeance}>Usuń</button> : ""}</div>
                <div><Link to={`reservation/${salas.find(sala=>sala.id===seance.salaID).ilosc_miejsc}`}><button class="button1">Wybierz miejsca</button></Link></div>
            </div>
        </div>
            <Outlet />
                {deleted === true ? <Navigate replace to="/" /> : ""}
        </div>
    )
}
SeanceIndex.propTypes = {
    deleteSeance: PropTypes.func
  };