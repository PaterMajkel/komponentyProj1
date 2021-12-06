import './App.css';
import { Link, Outlet } from 'react-router-dom'
//import './Seance.css';
export function Home(){
    
    return(<div>
        <Link to='seances/date'><button class="button4">Show me seances by date</button></Link>
        <Link to='seances/now'><button class="button4">Show now playing seances</button></Link>
        <Outlet/>
        <div class="welcome">Welcome to Erebus cinema!</div>
        </div>
    )
}