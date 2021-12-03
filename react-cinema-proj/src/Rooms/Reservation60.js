import { Link } from 'react-router-dom';
import './Reservation.css';
export function Reservation60(reserv){


    //const container = Reservation60.querySelector('.container');
    //const seats=document.querySelectorAll('.row.seat:not(.occupied)');
    //var count=document.getElementById('count');

    function updateSelectedCount(){
        const selectedSeats=document.querySelectorAll('.row .seat.selected')
        const selectedSeatsCount=selectedSeats.length;
        console.log(selectedSeatsCount)
        //count.innerText=selectedSeatsCount;
    }

    window.addEventListener('click',(e)=>{
        if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
            //e.target.classList.toggle('selected');
            updateSelectedCount()
        }
    });
    return (
    <div className="center">
        <ul className="showcase">
            <li>
                <div className="seatx"></div>
                    <small>Wolne</small>
                </li>

            <li>
                 <div className="seatx selected"></div>
                 <small>Wybrane</small>
            </li>

            <li>
                <div className="seatx occupied"></div>
                <small>Zajęte</small>
            </li>
        </ul>
        <div className="container">
            <div className="ekran"></div>
            <div className="row">
                <div id="1" className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
            </div>
            <div className="row">
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
            </div>
            <div className="row">
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
            </div>
            <div className="row">
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
            </div>
            <div className="row">
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
            </div>
            <div className="row">
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
            </div>
        </div>
        <p className="text">
            Zostało wybrane <span id="count">0</span> miejsc
        </p>
    </div>)
}