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
import {MovieEdit} from './Movies/MovieEdit'
import {ReservationHome} from './Rooms/ReservationHome'
import {Reservation60} from './Rooms/Reservation60'
import {Reservation90} from './Rooms/Reservation90'
import { useSelector, useDispatch } from 'react-redux'; 
import {reload, editMovie, deleteMovieById } from './Actions/movieActions'
function App() {
  const movies = useSelector(state=> state.movies)
  const dispatch = useDispatch()
  useEffect(() => {
      api()
  }, [])
  
  function editMovieApp(movie){
    dispatch(editMovie(movie))
  }
  function api(){
    console.log("here")
    dispatch(reload())
  }

  function deleteMovieApp(id){
    dispatch(deleteMovieById(id))

  }

  function showMovies(){
    console.log(movies)
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
            </ul>
          </nav>
        </div>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='seances' element={<SeancesHome/>}>
        <Route path='all' element={<Seances/>}/>
        <Route path=':seanceId' element={<SeanceIndex/>}/>
      </Route>
      
      <Route path='movies' element={<MoviesHome/>}>
        <Route path='all' element={<Movies/>}/>
        <Route path=':movieId' element={<MovieIndex deleteMovie={deleteMovieApp}/>}>
         <Route path='edit' element={<MovieEdit edit={editMovieApp}/>}/>
        </Route>
       
      </Route>
      <Route path='reservation60' element={<Reservation60/>}/>
      <Route path='reservation90' element={<Reservation90/>}/>
    </Routes>
    </div>
  );
}

export default App;
