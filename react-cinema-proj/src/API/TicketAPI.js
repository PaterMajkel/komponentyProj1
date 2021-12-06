import Axios from 'axios'

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
    await Axios.delete(url + "Ticket/" + id)
        .then((res) => { return res; })
        .catch((err) => { return err; });
}

export async function postTicket(ticket) {
    await Axios.post(url + "Ticket", { id: ticket.id,
                                         seansID: ticket.seansID,
                                         numer_Miejsca: ticket.numer_Miejsca,
                                         mail_kupujacego: ticket.mail_kupujacego,
                                         Cena: ticket.Cena })
        .then( res => { return res; })
        .catch( err => { return err; });
}