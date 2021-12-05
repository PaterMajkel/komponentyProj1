
function  movies(state = [], action) {
  switch (action.type) {
    case "RELOADMOVIES":
        return action.payload
    case "GETMOVIES":
      return state;
    case "DELETEMOVIEBYID":
        return state.filter(p => p.id!==action.payload)      
    case "ADDMOVIE":
        return state.push(action.payload);
    case "EDITMOVIEBYID":
        let new_state=state
        new_state[new_state.find((x) => x.id == action.payload.id)] = action.payload
        return new_state
    default:
      return state
  }
};

export default movies