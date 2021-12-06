import { useState, useEffect } from "react"
import './Reservation.css';

export default function Seat(params){
    const [isTaken, setIsTaken] = useState(params.taken)
    const [isReserved, setIsReserved] = useState(false)

    function ChangeCount(num){
        params.ChangeCount(num, params.id)
    }
    useEffect(() => {
        setIsTaken(params.takenIds.includes(params.id))
        return () => {
        }
    }, [])
    
    return(<div id={params.id} className="seat" onClick={e=>{
        if(isTaken){
            e.target.classList.toggle('occupied')
            return '';
        }
        else{
            if(isReserved)
            {
                setIsReserved(false)
                e.target.classList.toggle('selected')
                //zmienic wyglad
                ChangeCount(-1, params.id)
            }
            else
            {
                e.target.classList.toggle('selected')
                setIsReserved(true)
                ChangeCount(+1,params.id)

                //zmienic wyglad
            }
        }
        
    }}></div>)
}