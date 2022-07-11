import { BASE_URL } from "../baseUrl";

export const MedicineData = (dispatch) => {
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
  .then (medicines => dispatch({type: 'GET_MEDICINES' , payload: medicines}))
  .then(medicines => dispatch({ type: 'ERROR_MEDICINE', payload: medicines }))
  // .catch(error => medicinesFailed(error.message));
} 

  // export const medicinesFailed = (errors) => {
  // ({ type: 'ERROR_MEDICINE' , payload: errors})
  // }

export default MedicineData;