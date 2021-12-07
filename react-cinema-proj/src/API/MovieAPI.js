import Axios from 'axios'
import { isNumeric, isValidString, isValidImgUrl } from '../ValiTools';
const url = 'http://localhost:3000/'

// IMPLEMENTS: GET POST PUT DELETE

export async function getMovies(){
    let data = []
    await Axios.get(url+'Film').then((res)=>{
        data=res.data
        }).catch(error=>{
    return error
    });
    return data
}

export async function putMovie(movie){

    if(!isNumeric(movie.id)) return 'API Error: id';
    else if(!isValidString(movie.tytul)) return 'API Error: title';
    else if(!isValidString(movie.czas_trwania)) return 'API Error: length';
    else if(!isValidImgUrl(movie.plakat)) return 'API Error: poster';
    else if(!isValidString(movie.opis)) return 'API Error: description';


    await Axios.put(url+'Film/'+ movie.id, movie).then((res)=>{
        return res
        }).catch(error=>{
    return error
    });
}

export async function deleteMovie(id){
    if(!isNumeric(id)) return 'API Error: id';
    
    await Axios.delete(url+'Film/'+ id).then((res)=>{
        return res
        }).catch(error=>{
    return error
    });
}

export async function postMovie(movie){
    if(!isValidString(movie.tytul)) return 'API Error: title';
    else if(!isValidString(movie.czas_trwania)) return 'API Error: length';
    else if(!isValidImgUrl(movie.plakat)) return 'API Error: poster';
    else if(!isValidString(movie.opis)) return 'API Error: description';

    await Axios.post(url+'Film', {tytul: movie.tytul,czas_trwania: movie.czas_trwania,plakat: movie.plakat,opis: movie.opis}).then((res)=>{
        return res
        }).catch(error=>{
    return error
    });
}