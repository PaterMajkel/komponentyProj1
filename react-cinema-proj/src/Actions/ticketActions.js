import { deleteTicket, getTickets, postTicket } from "../../API/TicketAPI"
import { deleteSeanceByIdAction } from "./seanceActions";

export const reload = () => (dispatch) => {
    return getTickets()
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

export const getAllTickets = () => {
    return {
        type: "GETTICKETS"
    };
}

export const getTicketById = (id) => {
    return {
        type: "GETTICKETBYID",
        payload: id
    };
}

// DELETEs

export const deleteTicketById = (id) => {
    return deleteTicket(id)
        .then(() => { dispatch(deleteTicketByIdAction(id)); })
        .catch(err => { throw(err); });
}

export const deleteTicketByIdAction = (id) => {
    return {
        type: "DELETETICKETBYID",
        payload: id
    }
}

// POSTs 

export const addTicket = (ticket) => (dispatch) => {
    return postTicket(ticket)
        .then(() => { dispatch(addTicketAction(ticket)); })
        .catch(err => { throw(err); });
}

export const addTicketAction = (action) => {
    return {
        type: "ADDTICKET",
        payload: action
    }
}