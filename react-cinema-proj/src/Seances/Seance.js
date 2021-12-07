import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
export function Seance(seance){

    return (<div class="seance">
        <img src={seance.plakat} alt="Movie poster"></img>
        <div class="Opis">
            <h4>{seance.tytul}</h4>
            <p>Wolne miejsca: {seance.wolne_miejsca}</p>
            <p>Data seansu: {seance.data}</p>
            <p>Godzina seansu: {seance.godzina}</p>
            <p><Link to={`/movies/${seance.filmID}`}><button class="button6">Strona Filmu</button></Link></p>
            {seance.index? '' :  <p><Link to={`/seances/${seance.id}`}><button class="button6">Strona Seansu</button></Link></p>}
           
        </div>
    </div>)
}

const isValidImgUrl=function(props, propName, componentName) {
    let url;

    try {
        url = new URL(props);
    } catch (_) {
        return false;
    }

    return url.protocol === "http:" || url.protocol === "https:";
}

Seance.propTypes={
    plakat: isValidImgUrl,
    tytul: PropTypes.string,
    godzina: PropTypes.string,
    filmId: PropTypes.number,
    wolne_miejsca: PropTypes.string,
    data: PropTypes.string,
    id: PropTypes.number
}