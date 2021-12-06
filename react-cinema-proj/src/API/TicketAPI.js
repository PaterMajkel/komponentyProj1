import Axios from 'axios'
import { isNumeric, isValidString, isValidImgUrl, isValidDate, validateEmail} from '../ValiTools'

const url = 'http://localhost:3000/'

/// IMPLEMENTS: GET POST DELETE

export async function getTickets(){
    let data = []
    await Axios.get(url+'Ticket').then((res)=>{
        data=res.data
        }).catch(error=>{
    return error
    });
    return data
}

export async function deleteTicket(id) {
    if(!isNumeric(id)) return 'API Error: id';
    
    await Axios.delete(url + "Ticket/" + id)
        .then((res) => { return res; })
        .catch((err) => { return err; });
}

export async function postTicket(ticket) {
    if(!isNumeric(ticket.id)) return 'API Error: id';
    else if(!isNumeric(ticket.seansID)) return 'API Error: seansID';
    else if(!isNumeric(ticket.numer_Miejsca)) return 'API Error: numer_Miejsca';
    else if(!validateEmail(ticket.mail_kupujacego)) return 'API Error: wrong email';
    else if(!isNumeric(ticket.Cena)) return 'API Error: cena';

    await Axios.post(url + "Ticket", {   id: ticket.id,
                                         seansID: ticket.seansID,
                                         numer_Miejsca: ticket.numer_Miejsca,
                                         mail_kupujacego: ticket.mail_kupujacego,
                                         Cena: ticket.Cena })
        .then( res => { return res; })
        .catch( err => { return err; });
}