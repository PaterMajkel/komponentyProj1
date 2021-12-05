import { getMovies, putMovie, deleteMovie, postMovie } from "../../API/MovieAPI"

export const reloadMovies = () => (dispatch)=>{
    
      return getMovies().then(data => {
        dispatch(reloadMoviesAction(data));
      }).catch(error => {
        throw(error);
      });
    
}

export const reloadMoviesAction = (data) => {
    console.log(data)
    return {
        type: "RELOADMOVIES",
        payload: data
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
