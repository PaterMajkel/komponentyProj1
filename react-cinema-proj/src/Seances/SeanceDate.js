import { Link, Outlet } from 'react-router-dom'
import React, {useState, useEffect} from 'react'
import { Seance } from './Seance'
import { useSelector, useDispatch } from 'react-redux'
import { reloadSeances } from '../Redux/Actions/seanceActions'
import { reloadMovies  } from '../Redux/Actions/movieActions' 
import './Seance.css'
export function SeanceDate(){

    function show()
    {

    }

    var today = new Date();
    today=today.toISOString().substring(0, 10);//nie działa wrr
    return (<div class="movecenter">
          <div><p>Wybierz Datę z którego dnia chcesz zobaczyć seanse</p></div> 
          <div class="field3"><input type="date"  min={today} autoComplete="false" id="date" placeholder="Data seansu" required/></div>
          <div><button class="button5" onClick={show}>Pokaż</button></div>
    </div>)
}