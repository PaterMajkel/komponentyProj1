import { Link, useParams, Outlet, Navigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { Seance } from './Seance'

export function SeanceIndex(params) {
    const [deleted, setDeleted] = useState(false);
    let {seanceId} = useParams();

    function deleteSeance() {
        params.deleteSeance(seanceId);
        setDeleted(true);
    }

    const seances = useSelector(state => state.seances);
    const seance = seances.find(s => s.id == seanceId);

    return (
        <div>
            <Seance seance={seance}></Seance>
            <Link to={`edit`}><button>Edit</button></Link>
            {params.deleteSeance !== undefined ? <button onClick={deleteSeance}>Usuń</button> : ""}
            {deleted === true ? <Navigate replace to="/" /> : "" }

            <Outlet />
        </div>
    )
}