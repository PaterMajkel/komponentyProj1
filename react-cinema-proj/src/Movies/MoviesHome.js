import { Link, Outlet } from 'react-router-dom'
export function MoviesHome(){
    return(
        <div>
            <p>Welcome to Erebus cinema!</p>
            <br/>
            <Link to='add'><button>Add Movie</button></Link>
            <Link to='all'><button>Show me all available movies</button></Link>
            <Outlet/>
        </div>
    )
}