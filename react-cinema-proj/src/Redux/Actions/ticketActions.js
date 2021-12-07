import { deleteTicket, getTickets, postTicket } from "../../API/TicketAPI"

export const reloadTickets = () => (dispatch) => {
    return getTickets()
        .then(data => {
            dispatch(reloadAction(data));
        })
        .catch(err => {
            throw(err);
        });
}

export const reloadAction = (data) => {
    return {
        type: "RELOADTICKETS",
        payload: data
    };
}


// DELETEs

export const deleteTicketById = (id) => (dispatch) => {
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

export const addTicket = (tickets) => (dispatch) => {
    return postTicket(tickets)
        .then(data => { dispatch(addTicketAction(tickets)); })
        .catch(err => { throw(err); });
}

export const addTicketAction = (action) => {
    return {
        type: "ADDTICKET",
        payload: action
    }
}