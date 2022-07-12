import { BASE_URL } from "../baseUrl";

export const MedicineData  = (dispatch) => {
  try {
    dispatch(loading_medicines())
    setTimeout(function () {
      return fetch(BASE_URL + "medicines")
        .then(
          (response) => {
            if (response.ok) {
              return response;
            } else {
              var error = new Error(
                "Error " + response.status + ": " + response.statusText
              );
              error.response = response;
              throw error;
            }
          },
          (error) => {
            var errmess = new Error(error.message);
            throw errmess;
          }
        )
        .then((response) => response.json())
        .then((medicines) =>
          dispatch({ type: 'GET_MEDICINES', payload: medicines })
        )
        .catch( error => dispatch(error_medicines(error.message)));
    }, 2000);
  } catch (error) {
    dispatch(error_medicines(error.message))
    console.log(error);
  }
};

export const Add_MedicineData = (data) => (dispatch) => {
  try {
      return fetch(BASE_URL + "medicines" ,{
        method : 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then(
          (response) => {
            if (response.ok) {
              return response;
            } else {
              var error = new Error(
                "Error " + response.status + ": " + response.statusText
              );
              error.response = response;
              throw error;
            }
          },
          (error) => {
            var errmess = new Error(error.message);
            throw errmess;
          }
        )
        .then((response) => response.json())
        .then((medicines) =>
          dispatch({ type: 'ADD_MEDICINE', payload: medicines })
        )
        .catch( error => dispatch(error_medicines(error.message)));
  } catch (error) {
    dispatch(error_medicines(error.message))
    console.log(error);
  }
}

export const Delete_MedicineData = (id) => (dispatch) => {
  try {
      return fetch(BASE_URL + "medicines/" + id ,{
        method : 'DELETE'
      })
        .then(
          (response) => {
            if (response.ok) {
              return response;
            } else {
              var error = new Error(
                "Error " + response.status + ": " + response.statusText
              );
              error.response = response;
              throw error;
            }
          },
          (error) => {
            var errmess = new Error(error.message);
            throw errmess;
          }
        )
        .then((response) => response.json())
        .then((medicines) =>
          dispatch({ type: 'DELETE_MEDICINE', payload: id })
        )
        .catch( error => dispatch(error_medicines(error.message)));
  } catch (error) {
    dispatch(error_medicines(error.message))
    console.log(error);
  }
}

export const error_medicines = (errors) => (dispatch) => {
  dispatch({ type: 'ERROR_MEDICINE' , payload: errors})  
}

export const loading_medicines = () => (dispatch) => {
  dispatch({type: 'LOADING_MEDICINE'})
}

export default MedicineData;