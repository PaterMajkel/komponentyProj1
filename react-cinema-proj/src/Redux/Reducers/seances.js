function seances(state = [], action) {
    switch(action.type) {
        case "RELOADSEANCES":
            return action.payload;
        case "GETSEANCES":
            return state;
        case "DELETESEANCEBYID":
            return state.filter(s => s.id !== action.payload);
        case "ADDSEANCE":
            return state.push(action.payload);
        case "EDITSEANCEBYID":
            console.log(action.payload)
            let statev2 = state;
            statev2[statev2.find(n => n.id === action.payload.id)] = action.payload;
            return statev2;
        default:
            return state;
    }
};

export default seances;