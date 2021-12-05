import Axios from 'axios'

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
    await Axios.put(url+'Film/'+ movie.id, movie).then((res)=>{
        return res
        }).catch(error=>{
    return error
    });
}

export async function deleteMovie(id){
    await Axios.delete(url+'Film/'+ id).then((res)=>{
        return res
        }).catch(error=>{
    return error
    });
}

export async function postMovie(movie){
    await Axios.post(url+'Film', {tytul: movie.tytul,czas_trwania: movie.czas_trwania,plakat: movie.plakat,opis: movie.opis}).then((res)=>{
        return res
        }).catch(error=>{
    return error
    });
}