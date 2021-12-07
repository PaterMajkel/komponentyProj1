
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
    case "EDITMOVIE":
      return state.map((item, index) => {
        if (index !== action.payload.id) {
          return item
        }
        return {
          ...item,
          ...action.payload
        }
      })

    default:
      return state
  }
};

export default movies