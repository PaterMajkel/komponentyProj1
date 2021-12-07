import { useState, useEffect } from "react"
import PropTypes from 'prop-types'
import './Reservation.css';

export default function Seat(params){
    const [isReserved, setIsReserved] = useState(false)

    function ChangeCount(num){
        params.ChangeCount(num, params.id)
    }
    useEffect(() => {
        return () => {
        }
    }, [])
    
    return(<div id={params.id} className={params.isTaken?'seat occupied':'seat'}   onClick={e=>{
        if(params.isTaken)
            return;
            if(isReserved)
            {
                setIsReserved(false)
                e.target.classList.toggle('selected')
                ChangeCount(-1, params.id)
            }
            else
            {
                e.target.classList.toggle('selected')
                setIsReserved(true)
                ChangeCount(+1,params.id)
            }
        }
        
    }>{params.id}</div>)
}
Seat.propTypes={
    isTaken: PropTypes.bool,
    id: PropTypes.string,
    ChangeCount: PropTypes.func
}