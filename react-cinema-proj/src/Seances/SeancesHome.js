import { Link, Outlet } from 'react-router-dom'
export function SeancesHome(){
    return(
        <div>
            <p>Welcome to Erebus cinema!</p>
            <br/>
            <Link to='all'><span>Show me all scheduled seances</span></Link>
            <Outlet/>
        </div>
    )
}