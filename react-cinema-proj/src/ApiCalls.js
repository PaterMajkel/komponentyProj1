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