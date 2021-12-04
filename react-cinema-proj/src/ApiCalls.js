import Axios from 'axios'

const url = 'http://localhost:3000/'

export async function getSeances(){
    let data = []
    await Axios.get(url+'Seans').then((res)=>{
        data=res.data
        }).catch(error=>{
    return error
    });
    return data
}

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