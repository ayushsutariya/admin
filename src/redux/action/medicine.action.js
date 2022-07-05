import { BASE_URL } from "../../baseUrl";
import * as ActionTypes from "../ActionType"

export const Medicinedata = () => (dispatch) => {
    try{
    fetch(BASE_URL + 'medicines')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
        error => {
          var errmess = new Error(error.message);
          throw errmess;
        })
      .then(response => response.json())
      .then(medicines => dispatch({ type: ActionTypes.GET_MEDICINE, payload: medicines }))
    }catch (error) {
        console.log(error);
    }
    
      
}