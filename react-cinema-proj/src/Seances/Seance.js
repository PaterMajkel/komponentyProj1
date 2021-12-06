import { Link } from 'react-router-dom';
export function Seance(seance){

    return (<div class="seance">
        <img src={seance.plakat} alt="Movie poster"></img>
        <div class="Opis">
            <h4>{seance.tytul}</h4>
            <p>Wolne miejsca: {seance.wolne_miejsca}</p>
            <p>Data seansu: {seance.data}</p>
            <p>Godzina seansu: {seance.godzina}</p>
            <p><Link to={`/movies/${seance.filmID}`}><button class="button3">Strona Filmu</button></Link></p>
            {seance.index? '' :  <p><Link to={`/seances/${seance.id}`}><button class="button3">Strona Seansu</button></Link></p>}
           
        </div>
    </div>)
}