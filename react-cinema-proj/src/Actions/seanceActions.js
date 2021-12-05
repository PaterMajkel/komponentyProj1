import { getSeances, putSeance, deleteSeance, postSeance } from "../API/SeanceAPI"

export const reload = () => (dispatch) => {
    return getSeances()
        .then(data => {
            dispatch(reloadAction(data));
        })
        .catch(err => {
            throw(err);
        });
}

export const reloadAction = (data) => {
    console.log(data);
    return {
        type: "RELOAD",
        payload: data
    };
}

// GETs
export const getAllSeances = () => {
    return {
        type: "GETSEANCES"
    };
}

export const getSeanceById = (id) => {
    return {
        type: "GETSEANCEBYID",
        payload: id
    }
}

// DELETEs
export const deleteSeanceById = (id) => (dispatch) => {
    return deleteSeance(id) 
        .then(() => { dispatch(deleteSeanceByIdAction(id)); })
        .catch(err => { throw(err); });
}

export const deleteSeanceByIdAction = (id) => {
    return {
        type: "DELETESEANCEBYID",
        payload: id
    }
}

// POSTs
export const addSeance = (seance) => (dispatch) => {
    return postSeance(seance)
        .then(data => { dispatch(addSeanceAction(seance)); })
        .catch(err => { throw(err); });
}

export const addSeanceAction = (seance) => {
    return {
        type: "ADDSEANCE",
        payload: seance
    };
}

// PUTs
export const editSeance = (seance) => (dispatch) => {
    return putSeance(seance)
        .then(data => { dispatch(editSeanceAction(seance)); })
        .catch(err => { throw(err); });
}

export const editSeanceAction = (seance) => {
    return {
        type: "EDITSEANCE",
        payload: seance
    };
}