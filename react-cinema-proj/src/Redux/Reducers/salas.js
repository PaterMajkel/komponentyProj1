
function  salas(state = [], action) {
    switch (action.type) {
      case "RELOADSALAS":
          return action.payload
      
      default:
        return state
    }
  };
  
  export default salas