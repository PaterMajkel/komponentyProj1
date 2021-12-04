import { getMovies, putMovie, deleteMovie, postMovie } from "../../ApiCalls"

export const reload = () => (dispatch)=>{
    
      return getMovies().then(data => {
        dispatch(reloadAction(data));
      }).catch(error => {
        throw(error);
      });
    
}

export const reloadAction = (data) => {
    console.log(data)
    return {
        type: "RELOAD",
        payload: data
    }
}

export const getAllMovies = () => {
    return {
        type: "GETMOVIES"
    }
}

export const getMovieById = (id) => {
    return {
        type: "GETMOVIEBYID",
        payload: id
    }
}

export const deleteMovieById = (id)  => (dispatch)=> {
    return deleteMovie(id).then(data => {
        dispatch(deleteMovieByIdAction(id));
      }).catch(error => {
        throw(error);
      });
}

export const deleteMovieByIdAction = (id) => {
    return {
        type: "DELETEMOVIEBYID",
        payload: id
    }
}

export const addMovie = (movie) => (dispatch)=> {
    return postMovie(movie).then(data => {
        dispatch(addMovieAction(movie));
      }).catch(error => {
        throw(error);
      });
    }

export const addMovieAction = (movie) => {
    return {
        type: "ADDMOVIE",
        payload: movie
    }
}

export const editMovie = (movie) => (dispatch)=>{
    
    return putMovie(movie).then(data => {
      dispatch(editMovieAction(movie));
    }).catch(error => {
      throw(error);
    });
  
}

export const editMovieAction = (movie) => {
    return {
        type: "EDITMOVIE",
        payload: movie
    }
}
