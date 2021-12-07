import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect} from 'react';
import { reloadTickets } from '../Redux/Actions/ticketActions'
import PropTypes from 'prop-types'
import './Reservation.css';
import Seat from './Seat';
export function Reservation60(reserv){
    let navigate = useNavigate();
    const [reservedSeats, setReservedSeats]=useState([])
    const [count, setCount] = useState(0)
    const [email, setEmail] = useState("")
    const {seanceId} = useParams();
    const tickets = useSelector(state=>state.tickets)
    const [takenSeats, setTakenSeats] = useState([])
    const seances = useSelector(state => state.seances)
    const dispatch = useDispatch()
    useEffect(() => {
        if(tickets===undefined)
            dispatch(reloadTickets())
        setTakenSeats(tickets.map(t => t.seansID===+seanceId? +t.numer_Miejsca : 0))
        return () => {
        }
    }, [])
    console.log(tickets)
    function updateSelectedCount(num, id){

        setCount(count+parseInt(num))
        if(num<0)
        {
            if(reservedSeats.length<=1 || reservedSeats.length===undefined)
                {
                    setReservedSeats([])
                    return
                }
            setReservedSeats(reservedSeats.filter(x=> x!==id))
            return
        }
        let temp = reservedSeats
        temp.push(id)
        setReservedSeats(temp)
    }

    function CheckIfMailIsValid(mail){
        let validRegex = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/.test(mail)
        if(validRegex)
        {
            setEmail(mail)
            return
        }
        setEmail("")
    }

    function onSubmit(){
        let index=1
        let toSend=[]
        for(let x of reservedSeats)
        {
           toSend.push({id:tickets[tickets.length-1].id+index++,seansID: +seanceId, numer_Miejsca: x.toString(), mail_kupujacego: email})
        }
        reserv.addTicket(toSend)
        let tempSeance = seances.find(seance => seance.id===+seanceId)

        let sold = parseInt(tempSeance.liczba_sprzedanych_biletow)+reservedSeats.length
        let left = parseInt(tempSeance.liczba_dostepnych_miejsc)-parseInt(reservedSeats.length)
        tempSeance.liczba_sprzedanych_biletow=sold.toString()
        tempSeance.liczba_dostepnych_miejsc=left.toString()
        reserv.editSeance(tempSeance)
       
        navigate(-3)
    }

    return (
        <div className="center">
        <div>
            <div class="field1"><input autoComplete="false" id="mail" placeholder="Mail" type="email" onChange={e => {CheckIfMailIsValid(e.target.value)}} required/></div>
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
                {Array(10).fill(0).map((x, index) => {
                    return(
                    <div className='seatPlace'><Seat id={(index+1)} isTaken={takenSeats.includes(index+1)} ChangeCount={updateSelectedCount} /></div>)})
                }
                
            </div>
            <div className="row">
            {Array(10).fill(0).map((x, index) => {
                    return(
                    <div className='seatPlace'><Seat id={(index+11)} isTaken={takenSeats.includes(index+11)} ChangeCount={updateSelectedCount}/></div>)})
                }
            </div>
            <div className="row">
            {Array(10).fill(0).map((x, index) => {
                    return(
                    <div className='seatPlace'><Seat id={(index+21)} isTaken={takenSeats.includes(index+21)} ChangeCount={updateSelectedCount}/></div>)})
                }
            </div>
            <div className="row">
            {Array(10).fill(0).map((x, index) => {
                    return(
                    <div className='seatPlace'><Seat id={(index+31)} isTaken={takenSeats.includes(index+31)} ChangeCount={updateSelectedCount}/></div>)})
                }
            </div>
            <div className="row">
            {Array(10).fill(0).map((x, index) => {
                    return(
                    <div className='seatPlace'><Seat id={(index+41)} isTaken={takenSeats.includes(index+41)} ChangeCount={updateSelectedCount}/></div>)})
                }
            </div>
            <div className="row">
            {Array(10).fill(0).map((x, index) => {
                    return(
                    <div className='seatPlace'><Seat id={(index+51)} isTaken={takenSeats.includes(index+51)} ChangeCount={updateSelectedCount}/></div>)})
                }
            </div>
        </div>
        <p className="text">
            Zostało wybrane <span id="count">{count}</span> miejsc
        </p>
        
        <button className='button1' disabled={!email.length>0} onClick={() => {onSubmit()}}>Zarezerwuj</button>
    </div>)
}

Reservation60.propTypes = {
    addTicket: PropTypes.func,
    editSeance: PropTypes.func
}