import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react'
import {Routes, Route, Link, matchPath} from 'react-router-dom'
import {Home} from './Home'
import {Seances} from './Seances/Seances'
import { SeanceIndex } from './Seances/SeanceIndex'
import { SeancesHome } from './Seances/SeancesHome'
import Axios from 'axios'
import {Movies} from './Movies/Movies'
import {MoviesHome} from './Movies/MoviesHome'
import {MovieIndex} from './Movies/MovieIndex'
import {ReservationHome} from './Rooms/ReservationHome'
import {Reservation60} from './Rooms/Reservation60'
import {Reservation90} from './Rooms/Reservation90'
import {getSeances, getMovies} from './ApiCalls'
import { connect, Provider } from 'react-redux'; 
function App() {
  const [seances, setSeances] = useState([])
  const [movies, setMovies] = useState([])
  
  useEffect(() => {
    api()
  }, [])
  
  async function api(){
    const x = await getSeances()
    setSeances(x)
    const y = await getMovies()
    setMovies(y)
  }
  const showSeances = () =>{
    console.log(seances)
  }
  return (
    <div className="background">
      <div className="body">
          <nav>
            <ul>
              <li><a class="nav-link" href="/">Erebus Cinema</a></li>
              <li><a class="nav-link" href="/seances">Seances</a></li>
              <li><a class="nav-link" href="/movies">Movies</a></li>
              <li><a class="nav-link" href="/reservation60">Reservation60 /TODO</a></li>
              <li><a class="nav-link" href="/reservation90">Reservation90 /TODO</a></li>
              <button onClick={() => showSeances()}>bruh</button>
            </ul>
          </nav>
        </div>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='seances' element={<SeancesHome/>}>
        <Route path='all' element={<Seances seances={seances} movies={movies}/>}/>
        <Route path=':seanceId' element={<SeanceIndex/>}/>
      </Route>
      
      <Route path='movies' element={<MoviesHome/>}>
        <Route path='all' element={<Movies movies={movies}/>}/>
        <Route path=':movieId' element={<MovieIndex/>}/>
      </Route>
      <Route path='reservation60' element={<Reservation60/>}/>
      <Route path='reservation90' element={<Reservation90/>}/>
    </Routes>
    </div>
  );
}

export default App;
