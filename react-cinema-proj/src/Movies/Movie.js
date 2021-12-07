import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Movie.css'
export function Movie(params){

 
    return(
    <div> {params===undefined ? '' : 
        <div class="film">
            <img src={params.plakat} alt="Movie poster"></img>
            <div class="Opis">
                <h4>{params.tytul}</h4>
                <p>Czas trwania: {params.czas_trwania} min</p>
                <p>streszczenie: {params.opis}</p>
                {params.index? '' :  <p><Link to={`/movies/${params.id}`}><button class="button3">Strona Filmu</button></Link></p>}
                
            </div>
        </div>
        }
    </div>
    )
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

Movie.propTypes={
    
        plakat: isValidImgUrl,
        opis: PropTypes.string,
        czas_trwania: PropTypes.string,
        id: PropTypes.number,
        tytul: PropTypes.string,
    index: PropTypes.bool
}

