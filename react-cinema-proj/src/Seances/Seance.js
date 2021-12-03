import { Link } from 'react-router-dom';
import './Seance.css'
export function Seance(seance){

    return (<div class="seans">
        <img src={seance.plakat} alt="Movie poster"></img>
        <div class="opis">
            <h4>{seance.tytul}</h4>
            <p>Wolne miejsca: {seance.wolne_miejsca}</p>
            <p>Data seansu: {seance.data}</p>
            <p>Godzina seansu: {seance.godzina}</p>
            <p><Link to={`/movies/${seance.filmID}`}>Strona Filmu</Link></p>
            <p><Link to={`/seances/${seance.id}`}>Zarezerwuj</Link></p>
        </div>
    </div>)
}