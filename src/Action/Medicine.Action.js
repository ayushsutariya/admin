import { BASE_URL } from "../baseUrl";

export const Medicinedata = () => {
    // console.log(action.type , action.payload , state); 
    return fetch(BASE_URL + 'medicines')
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
      .then(medicines => ({ type: "GET_MEDICINES", payload: medicines }))
      .catch(error => dispatch(medicinesFailed(error.message)));
    
}

export const error_medicines = (errors) => {
  ({ type: ActionTypes.ERROR_MEDICINE , payload: errors})  
}

console.log(Medicinedata.medicines)