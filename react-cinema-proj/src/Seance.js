import {useParams} from 'react-router-dom'
export function Seance(){
    let {seanceId} = useParams();
    return( 
    <div>
        <p>Hello from seance ID: {seanceId}</p>
    </div>
    )
}