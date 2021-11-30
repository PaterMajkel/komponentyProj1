import {useParams} from 'react-router-dom'
export function MovieIndex(params){
    let {movieId} = useParams();
    return( 
    <div>
        <p>i am the seance nr {movieId}</p>
    </div>
    )
}