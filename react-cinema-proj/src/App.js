import logo from './logo.svg';
import './App.css';
import {Routes, Route, Link} from 'react-router-dom'
import {Home} from './Home'
import {Seances} from './Seances'
import { Seance } from './Seance'
import {Movies} from './Movies'
function App() {
  return (
    <div>
      <navbar>
        <span><Link to='/'>Home</Link></span>
          <Link to='/seances'><span>Seances</span></Link>
          <Link to='/movies'><span>Movies</span></Link>
      </navbar>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='seances' element={<Seances/>}/>
      <Route path='seances/:seanceId' element={<Seance/>}/>
      <Route path='movies' element={<Movies/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
