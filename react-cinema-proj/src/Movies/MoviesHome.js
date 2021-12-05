import { Link, Outlet } from 'react-router-dom'
import './Movie.css';
export function MoviesHome(){
    return(
        <div>
            <Link to='all'><button class="button4">Show me all available movies</button></Link>
            <Link to='add'><button class="button4">Add Movie</button></Link>
            <Outlet/>
        </div>
    )
}