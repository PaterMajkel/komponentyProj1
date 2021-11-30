import {useParams} from 'react-router-dom'
export function SeanceIndex(params){
    let {seanceId} = useParams();
    return( 
    <div>
        <p>i am the seance nr {seanceId}</p>
    </div>
    )
}