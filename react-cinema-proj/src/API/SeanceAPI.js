import Axios from 'axios'
import { isNumeric } from '../ValiTools'
const url = 'http://localhost:3000/'

// IMPLEMENTS: GET PUT POST DELETE

export async function getSeances(){
    let data = []
    await Axios.get(url+'Seans').then((res)=>{
        data=res.data
        }).catch(error=>{
    return error
    });
    return data
}

export async function getSalas(){
    let data = []
    await Axios.get(url+'Sala').then((res)=>{
        data=res.data
        }).catch(error=>{
    return error
    });
    return data
}

export async function putSeance(seance) {

    await Axios.put(url+'Seans/' + seance.id, seance)
        .then((res) => { return res; })
        .catch(err => { return err; });
}

export async function deleteSeance(id){
    if(!isNumeric(id)) return 'API Error: id';
    
    await Axios.delete(url+'Seans/'+ id).then((res)=>{
        return res
        }).catch(error=>{
    return error
    });
}



export async function postSeance(seance) {
    await Axios.post(url + "Seans", {
                                        data: seance.data,
                                        godzina: seance.godzina,
                                        salaID: seance.salaID,
                                        filmID: seance.filmID,
                                        liczba_sprzedanych_biletow: seance.liczba_sprzedanych_biletow,
                                        liczba_dostepnych_miejsc: seance.liczba_dostepnych_miejsc })
        .then( res => { return res; })
        .catch( err => { return err; });
}