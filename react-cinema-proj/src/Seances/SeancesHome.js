import { Link, Outlet } from 'react-router-dom'
import './Seance.css';
export function SeancesHome(){
    return(
        <div>
            <Link to='all'><button class="button4">Show me all scheduled seances</button></Link>
            <Link to='add'><button class="button4">Add Seance</button></Link>
            <Outlet/>
        </div>
    )
}