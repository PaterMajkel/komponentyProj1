import Axios from 'axios'
import { isNumeric, isValidString, validateEmail} from '../ValiTools'

const url = 'http://localhost:3000/'

/// IMPLEMENTS: GET POST DELETE

export async function getTickets(){
    let data = []
    await Axios.get(url+'Bilet').then((res)=>{
        data=res.data
        }).catch(error=>{
    return error
    });
    return data
}

export async function deleteTicket(id) {
    if(!isNumeric(id)) return 'API Error: id';
    
    await Axios.delete(url + "Bilet/" + id)
        .then((res) => { return res; })
        .catch((err) => { return err; });
}
export async function postTicket(tickets) {
    for(let ticket of tickets)
    {
        if(!isNumeric(ticket.id)) return 'API Error: id';
        else if(!isNumeric(ticket.seansID)) return 'API Error: seansID';
        else if(!isValidString(ticket.numer_Miejsca)) return 'API Error: numer_Miejsca';
        else if(!validateEmail(ticket.mail_kupujacego)) return 'API Error: wrong email';
    
        await Axios.post(url + "Bilet", {   id: ticket.id,
                                             seansID: ticket.seansID,
                                             numer_Miejsca: ticket.numer_Miejsca,
                                             mail_kupujacego: ticket.mail_kupujacego,
                                             Cena: ticket.Cena })
            .then( res => { return res; })
            .catch( err => { return err; });
    }
    
}