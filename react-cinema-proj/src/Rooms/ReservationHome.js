
import { Outlet } from 'react-router-dom'
export default function ReservationHome()
{
    return(
        <div>
            <p class="movecent">Proszę wybrać miejsca które chce się kupić oraz wpisać email w polu</p>
            <Outlet/>
        </div>
    )
}