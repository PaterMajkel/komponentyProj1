import Axios from 'axios'
import { isNumeric, isValidString, isValidDate } from '../ValiTools'
const url = 'http://localhost:3000/'

// IMPLEMENTS: GET PUT POST DELETE

export async function getSeances(){
    let data = []
    await Axios.get(url+'Seans').then((res)=>{
        data=res.data
        console.log(data)
        }).catch(error=>{
    return error
    });
    return data
}

export async function putSeance(seance) {
    if(!isNumeric(seance.id)) return 'API Error: id';
    else if(!isValidDate(seance.data)) return 'API Error: data';
    else if(!isValidString(seance.godzina)) return 'API Error: godzina';
    else if(!isNumeric(seance.salaID)) return 'API Error: salaID';
    else if(!isNumeric(seance.filmID)) return 'API Error: filmID';
    else if(!isNumeric(seance.liczba_sprzedanych_biletow)) return 'API Error: LSB';
    else if(!isNumeric(seance.liczba_dostepnych_miejsc)) return 'API Error: LDM';

    await Axios.put(url+'Seans/' + seance.id, seance)
        .then((res) => { return res; })
        .catch(err => { return err; });
}

export async function deleteSeance(id) {
    if(!isNumeric(id)) return 'API Error: id';

    await Axios.delete(url + "Seans/" + id)
        .then((res) => { return res; })
        .catch((err) => { return err; });
}

export async function postSeance(seance) {
    if(!isNumeric(seance.id)) return 'API Error: id';
    else if(!isValidDate(seance.data)) return 'API Error: data';
    else if(!isValidString(seance.godzina)) return 'API Error: godzina';
    else if(!isNumeric(seance.salaID)) return 'API Error: salaID';
    else if(!isNumeric(seance.filmID)) return 'API Error: filmID';
    else if(!isNumeric(seance.liczba_sprzedanych_biletow)) return 'API Error: LSB';
    else if(!isNumeric(seance.liczba_dostepnych_miejsc)) return 'API Error: LDM';

    await Axios.post(url + "Seans", { id: seance.id,
                                        data: seance.data,
                                        godzina: seance.godzina,
                                        salaID: seance.salaID,
                                        filmID: seance.filmID,
                                        liczba_sprzedanych_biletow: seance.liczba_sprzedanych_biletow,
                                        liczba_dostepnych_miejsc: seance.liczba_dostepnych_miejsc })
        .then( res => { return res; })
        .catch( err => { return err; });
}