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
    <div>
      <navbar>
        <span><Link to='/'>Home</Link></span>
          <Link to='/seances'><span>Seances</span></Link>
          <Link to='/movies'><span>Movies</span></Link>
          <button onClick={() => showSeances()}>bruh</button>
      </navbar>
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
    </Routes>
    </div>
  );
}

export default App;
