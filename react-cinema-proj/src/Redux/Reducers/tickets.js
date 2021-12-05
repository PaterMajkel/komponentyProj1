function tickets(state = [], action) {
    switch(action.type) {
        case "RELOAD":
            return action.payload;
        case "GETTICKETS":
            return state;
        case "DELETETICKETBYID":
            return state.filter(s => s.id !== action.payload);
        case "ADDTICKET":
            return state.push(action.payload);
        default:
            return state;
    }
};

export default tickets;