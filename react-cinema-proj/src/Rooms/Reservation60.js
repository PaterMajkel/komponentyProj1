import { Link } from 'react-router-dom';
import './Reservation.css';
export function Reservation60(reserv){


    //const container = Reservation60.querySelector('.container');
    //const seats=document.querySelectorAll('.row.seat:not(.occupied)');
    const count=document.getElementById('count');

    function updateSelectedCount(){
        const selectedSeats=document.querySelectorAll('.row .seat.selected')
        const selectedSeatsCount=selectedSeats.length;
        console.log(selectedSeatsCount)
        count.innerText=selectedSeatsCount;
    }

    return (
    <div className="center">
        <div>
            <div class="field1"><input autoComplete="false" id="mail" placeholder="Mail" required/></div>
        </div>
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
                <div id="1" className="seat" onClick={e=>{
                    if(!e.target.classList.contains('occupied'))
                    {e.target.classList.toggle('selected')
                    updateSelectedCount()}
                }}></div>
                <div id="2" className="seat" onClick={e=>{
                    if(!e.target.classList.contains('occupied'))
                    {e.target.classList.toggle('selected')
                    updateSelectedCount()}
                }}></div>
                <div id="3" className="seat" onClick={e=>{
                    if(!e.target.classList.contains('occupied'))
                    {e.target.classList.toggle('selected')
                    updateSelectedCount()}
                }}></div>
                <div id="4" className="seat" onClick={e=>{
                    if(!e.target.classList.contains('occupied'))
                    {e.target.classList.toggle('selected')
                    updateSelectedCount()}
                }}></div>
                <div id="5" className="seat" onClick={e=>{
                    if(!e.target.classList.contains('occupied'))
                    {e.target.classList.toggle('selected')
                    updateSelectedCount()}
                }}></div>
                <div id="6" className="seat" onClick={e=>{
                    if(!e.target.classList.contains('occupied'))
                    {e.target.classList.toggle('selected')
                    updateSelectedCount()}
                }}></div>
                <div id="7" className="seat" onClick={e=>{
                    if(!e.target.classList.contains('occupied'))
                    {e.target.classList.toggle('selected')
                    updateSelectedCount()}
                }}></div>
                <div id="8" className="seat" onClick={e=>{
                    if(!e.target.classList.contains('occupied'))
                    {e.target.classList.toggle('selected')
                    updateSelectedCount()}
                }}></div>
                <div id="9" className="seat" onClick={e=>{
                    if(!e.target.classList.contains('occupied'))
                    {e.target.classList.toggle('selected')
                    updateSelectedCount()}
                }}></div>
                <div id="10" className="seat" onClick={e=>{
                    if(!e.target.classList.contains('occupied'))
                    {e.target.classList.toggle('selected')
                    updateSelectedCount()}
                }}></div>
            </div>
            <div className="row">
                <div id="11" className="seat" onClick={e=>{
                    if(!e.target.classList.contains('occupied'))
                    {e.target.classList.toggle('selected')
                    updateSelectedCount()}
                }}></div>
                <div id="12" className="seat" onClick={e=>{
                    if(!e.target.classList.contains('occupied'))
                    {e.target.classList.toggle('selected')
                    updateSelectedCount()}
                }}></div>
                <div id="13" className="seat" onClick={e=>{
                    if(!e.target.classList.contains('occupied'))
                    {e.target.classList.toggle('selected')
                    updateSelectedCount()}
                }}></div>
                <div id="14" className="seat" onClick={e=>{
                    if(!e.target.classList.contains('occupied'))
                    {e.target.classList.toggle('selected')
                    updateSelectedCount()}
                }}></div>
                <div id="15" className="seat" onClick={e=>{
                    if(!e.target.classList.contains('occupied'))
                    {e.target.classList.toggle('selected')
                    updateSelectedCount()}
                }}></div>
                <div id="16" className="seat" onClick={e=>{
                    if(!e.target.classList.contains('occupied'))
                    {e.target.classList.toggle('selected')
                    updateSelectedCount()}
                }}></div>
                <div id="17" className="seat" onClick={e=>{
                    if(!e.target.classList.contains('occupied'))
                    {e.target.classList.toggle('selected')
                    updateSelectedCount()}
                }}></div>
                <div id="18" className="seat" onClick={e=>{
                    if(!e.target.classList.contains('occupied'))
                    {e.target.classList.toggle('selected')
                    updateSelectedCount()}
                }}></div>
                <div id="19" className="seat" onClick={e=>{
                    if(!e.target.classList.contains('occupied'))
                    {e.target.classList.toggle('selected')
                    updateSelectedCount()}
                }}></div>
                <div id="20" className="seat" onClick={e=>{
                    if(!e.target.classList.contains('occupied'))
                    {e.target.classList.toggle('selected')
                    updateSelectedCount()}
                }}></div>
            </div>
            <div className="row">
                <div id="21" className="seat" onClick={e=>{
                    if(!e.target.classList.contains('occupied'))
                    {e.target.classList.toggle('selected')
                    updateSelectedCount()}
                }}></div>
                <div id="22" className="seat" onClick={e=>{
                    if(!e.target.classList.contains('occupied'))
                    {e.target.classList.toggle('selected')
                    updateSelectedCount()}
                }}></div>
                <div id="23" className="seat" onClick={e=>{
                    if(!e.target.classList.contains('occupied'))
                    {e.target.classList.toggle('selected')
                    updateSelectedCount()}
                }}></div>
                <div id="24" className="seat" onClick={e=>{
                    if(!e.target.classList.contains('occupied'))
                    {e.target.classList.toggle('selected')
                    updateSelectedCount()}
                }}></div>
                <div id="25" className="seat" onClick={e=>{
                    if(!e.target.classList.contains('occupied'))
                    {e.target.classList.toggle('selected')
                    updateSelectedCount()}
                }}></div>
                <div id="26" className="seat" onClick={e=>{
                    if(!e.target.classList.contains('occupied'))
                    {e.target.classList.toggle('selected')
                    updateSelectedCount()}
                }}></div>
                <div id="27" className="seat" onClick={e=>{
                    if(!e.target.classList.contains('occupied'))
                    {e.target.classList.toggle('selected')
                    updateSelectedCount()}
                }}></div>
                <div id="28" className="seat" onClick={e=>{
                    if(!e.target.classList.contains('occupied'))
                    {e.target.classList.toggle('selected')
                    updateSelectedCount()}
                }}></div>
                <div id="29" className="seat" onClick={e=>{
                    if(!e.target.classList.contains('occupied'))
                    {e.target.classList.toggle('selected')
                    updateSelectedCount()}
                }}></div>
                <div id="30" className="seat" onClick={e=>{
                    if(!e.target.classList.contains('occupied'))
                    {e.target.classList.toggle('selected')
                    updateSelectedCount()}
                }}></div>
            </div>
            <div className="row">
                <div id="31" className="seat" onClick={e=>{
                    if(!e.target.classList.contains('occupied'))
                    {e.target.classList.toggle('selected')
                    updateSelectedCount()}
                }}></div>
                <div id="32" className="seat" onClick={e=>{
                    if(!e.target.classList.contains('occupied'))
                    {e.target.classList.toggle('selected')
                    updateSelectedCount()}
                }}></div>
                <div id="33" className="seat" onClick={e=>{
                    if(!e.target.classList.contains('occupied'))
                    {e.target.classList.toggle('selected')
                    updateSelectedCount()}
                }}></div>
                <div id="34" className="seat" onClick={e=>{
                    if(!e.target.classList.contains('occupied'))
                    {e.target.classList.toggle('selected')
                    updateSelectedCount()}
                }}></div>
                <div id="35" className="seat" onClick={e=>{
                    if(!e.target.classList.contains('occupied'))
                    {e.target.classList.toggle('selected')
                    updateSelectedCount()}
                }}></div>
                <div id="36" className="seat" onClick={e=>{
                    if(!e.target.classList.contains('occupied'))
                    {e.target.classList.toggle('selected')
                    updateSelectedCount()}
                }}></div>
                <div id="37" className="seat" onClick={e=>{
                    if(!e.target.classList.contains('occupied'))
                    {e.target.classList.toggle('selected')
                    updateSelectedCount()}
                }}></div>
                <div id="38" className="seat" onClick={e=>{
                    if(!e.target.classList.contains('occupied'))
                    {e.target.classList.toggle('selected')
                    updateSelectedCount()}
                }}></div>
                <div id="39" className="seat" onClick={e=>{
                    if(!e.target.classList.contains('occupied'))
                    {e.target.classList.toggle('selected')
                    updateSelectedCount()}
                }}></div>
                <div id="40" className="seat" onClick={e=>{
                    if(!e.target.classList.contains('occupied'))
                    {e.target.classList.toggle('selected')
                    updateSelectedCount()}
                }}></div>
            </div>
            <div className="row">
                <div id="41" className="seat" onClick={e=>{
                    if(!e.target.classList.contains('occupied'))
                    {e.target.classList.toggle('selected')
                    updateSelectedCount()}
                }}></div>
                <div id="42" className="seat" onClick={e=>{
                    if(!e.target.classList.contains('occupied'))
                    {e.target.classList.toggle('selected')
                    updateSelectedCount()}
                }}></div>
                <div id="43" className="seat" onClick={e=>{
                    if(!e.target.classList.contains('occupied'))
                    {e.target.classList.toggle('selected')
                    updateSelectedCount()}
                }}></div>
                <div id="44" className="seat" onClick={e=>{
                    if(!e.target.classList.contains('occupied'))
                    {e.target.classList.toggle('selected')
                    updateSelectedCount()}
                }}></div>
                <div id="45" className="seat" onClick={e=>{
                    if(!e.target.classList.contains('occupied'))
                    {e.target.classList.toggle('selected')
                    updateSelectedCount()}
                }}></div>
                <div id="46" className="seat" onClick={e=>{
                    if(!e.target.classList.contains('occupied'))
                    {e.target.classList.toggle('selected')
                    updateSelectedCount()}
                }}></div>
                <div id="47" className="seat" onClick={e=>{
                    if(!e.target.classList.contains('occupied'))
                    {e.target.classList.toggle('selected')
                    updateSelectedCount()}
                }}></div>
                <div id="48" className="seat" onClick={e=>{
                    if(!e.target.classList.contains('occupied'))
                    {e.target.classList.toggle('selected')
                    updateSelectedCount()}
                }}></div>
                <div id="49" className="seat" onClick={e=>{
                    if(!e.target.classList.contains('occupied'))
                    {e.target.classList.toggle('selected')
                    updateSelectedCount()}
                }}></div>
                <div id="50" className="seat" onClick={e=>{
                    if(!e.target.classList.contains('occupied'))
                    {e.target.classList.toggle('selected')
                    updateSelectedCount()}
                }}></div>
            </div>
            <div className="row">
                <div id="51" className="seat" onClick={e=>{
                    if(!e.target.classList.contains('occupied'))
                    {e.target.classList.toggle('selected')
                    updateSelectedCount()}
                }}></div>
                <div id="52" className="seat" onClick={e=>{
                    if(!e.target.classList.contains('occupied'))
                    {e.target.classList.toggle('selected')
                    updateSelectedCount()}
                }}></div>
                <div id="53" className="seat" onClick={e=>{
                    if(!e.target.classList.contains('occupied'))
                    {e.target.classList.toggle('selected')
                    updateSelectedCount()}
                }}></div>
                <div id="54" className="seat" onClick={e=>{
                    if(!e.target.classList.contains('occupied'))
                    {e.target.classList.toggle('selected')
                    updateSelectedCount()}
                }}></div>
                <div id="55" className="seat" onClick={e=>{
                    if(!e.target.classList.contains('occupied'))
                    {e.target.classList.toggle('selected')
                    updateSelectedCount()}
                }}></div>
                <div id="56" className="seat" onClick={e=>{
                    if(!e.target.classList.contains('occupied'))
                    {e.target.classList.toggle('selected')
                    updateSelectedCount()}
                }}></div>
                <div id="57" className="seat" onClick={e=>{
                    if(!e.target.classList.contains('occupied'))
                    {e.target.classList.toggle('selected')
                    updateSelectedCount()}
                }}></div>
                <div id="58" className="seat" onClick={e=>{
                    if(!e.target.classList.contains('occupied'))
                    {e.target.classList.toggle('selected')
                    updateSelectedCount()}
                }}></div>
                <div id="59" className="seat" onClick={e=>{
                    if(!e.target.classList.contains('occupied'))
                    {e.target.classList.toggle('selected')
                    updateSelectedCount()}
                }}></div>
                <div id="60" className="seat" onClick={e=>{
                    if(!e.target.classList.contains('occupied'))
                    {e.target.classList.toggle('selected')
                    updateSelectedCount()}
                }}></div>
            </div>
        </div>
        <p className="text">
            Zostało wybrane <span id="count">0</span> miejsc
        </p>
    </div>)
}