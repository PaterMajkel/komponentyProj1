import logo from './logo.svg';
import './App.css';
import {Routes, Route, Link} from 'react-router-dom'
import {Home} from './Home'
import {Seances} from './Seances'
import { Seance } from './Seance'
import {Movies} from './Movies'
import { Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
function App() {
  //document.body.style.backgroundColor = "rgb(38, 39, 37)";
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="/"> Kino w pyte</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/seances">Seances</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/movies">Movies</a>
            </li>
          </ul>
        </div>
      </nav>
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
