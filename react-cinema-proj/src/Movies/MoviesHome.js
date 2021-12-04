import { Link, Outlet } from 'react-router-dom'
export function MoviesHome(){
    return(
        <div>
            <p>Welcome to Erebus cinema!</p>
            <br/>
            <Link to='add'><button>Add Movie</button></Link>
            <Link to='all'><span>Show me all available movies</span></Link>
            <Outlet/>
        </div>
    )
}