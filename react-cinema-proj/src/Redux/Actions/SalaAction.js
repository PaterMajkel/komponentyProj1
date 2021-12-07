import { getSalas } from "../../API/SeanceAPI";
export const reloadSalas = () => (dispatch)=>{
    
    return getSalas().then(data => {
      dispatch(reloadSalasAction(data));
    }).catch(error => {
      throw(error);
    });
  
}

export const reloadSalasAction = (data) => {
  console.log(data)
  return {
      type: "RELOADSALAS",
      payload: data
  }
}