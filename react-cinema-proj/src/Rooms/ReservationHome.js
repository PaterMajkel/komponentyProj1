
import { Link, Outlet } from 'react-router-dom'
export default function ReservationHome()
{
    return(
        <div>
            <p>Please select your seats and input a valid email into the input box</p>
            <Outlet/>
        </div>
    )
}