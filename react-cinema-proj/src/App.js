import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react'
import { Routes, Route, Link, matchPath } from 'react-router-dom'
import { Home } from './Home'
import { Seances } from './Seances/Seances'
import { SeanceIndex } from './Seances/SeanceIndex'
import { SeancesHome } from './Seances/SeancesHome'
import Axios from 'axios'
import { Movies } from './Movies/Movies'
import { MoviesHome } from './Movies/MoviesHome'
import { MovieIndex } from './Movies/MovieIndex'
import { MovieEdit } from './Movies/MovieEdit'
import { Reservation60 } from './Rooms/Reservation60'
import { Reservation90 } from './Rooms/Reservation90'
import { useSelector, useDispatch } from 'react-redux';
import { reloadMovies, editMovie, deleteMovieById, addMovie } from './Redux/Actions/movieActions'
import MovieAdd from './Movies/MovieAdd';
import SeanceAdd from './Seances/SeanceAdd';
import { addSeance, deleteSeanceById, editSeance } from './Redux/Actions/seanceActions';
import { reloadSeances } from './Redux/Actions/seanceActions';
import { SeanceEdit } from './Seances/SeanceEdit';
import { SeanceDate } from './Seances/SeanceDate';
import { SeanceNow } from './Seances/SeanceNow';
import { reloadSalas } from './Redux/Actions/SalaAction';
import { addTicket, reloadTickets } from './Redux/Actions/ticketActions';
import ReservationHome from './Rooms/ReservationHome'
function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    getData()
  }, [])

  function editMovieApp(movie) {
    dispatch(editMovie(movie))
  }
  function getData() {
    console.log("here")
    dispatch(reloadMovies())
    dispatch(reloadSeances())
    dispatch(reloadTickets())
    dispatch(reloadSalas())
  }

  function deleteMovieApp(id) {
    dispatch(deleteMovieById(id))

  }

  function addMovieApp(movie) {
    dispatch(addMovie(movie))
  }
  function deleteSeanceApp(id) {
    dispatch(deleteSeanceById(id))
  }
  function addSeanceApp(seance) {
    dispatch(addSeance(seance))
  }
  function editSeanceApp(seance) {
    dispatch(editSeance(seance))
  }
  function addTicketAPP(ticket){
    dispatch(addTicket(ticket))
  }
  return (
    <div className="background">
      <div className="body">
        <nav>
          <ul>
            <li><a class="nav-link" href="/">Erebus Cinema</a></li>
            <li><a class="nav-link" href="/seances">Seances</a></li>
            <li><a class="nav-link" href="/movies">Movies</a></li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='seances' element={<SeancesHome />}>
          <Route path='date' element={<SeanceDate/>}/>
          <Route path='now' element={<SeanceNow/>}/>
          <Route path='all' element={<Seances />} />
          <Route path='add' element={<SeanceAdd addSeance={addSeanceApp} />} />
          <Route path=':seanceId' element={<SeanceIndex deleteSeance={deleteSeanceApp} />}>
            <Route path='reservation' element={<ReservationHome/>}>
              <Route path='60' element={<Reservation60 addTicket={addTicketAPP}  editSeance={editSeanceApp}/>} />
              <Route path='90' element={<Reservation90 addTicket={addTicketAPP} editSeance={editSeanceApp}/>} />
            </Route>
            <Route path='edit' element={<SeanceEdit edit={editSeanceApp} />} />
          </Route>
        </Route>

        <Route path='movies' element={<MoviesHome />}>
          <Route path='add' element={<MovieAdd addMovie={addMovieApp} />} />
          <Route path='all' element={<Movies />} />
          <Route path=':movieId' element={<MovieIndex deleteMovie={deleteMovieApp} />}>
            <Route path='edit' element={<MovieEdit edit={editMovieApp} />} />
          </Route>

        </Route>
        
      </Routes>
    </div>
  );
}

export default App;
