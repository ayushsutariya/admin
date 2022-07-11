const init_state = {
    isloading : false,
    MedicineData : [],
    error : ''
}

export const Medicine_Reducer = (state = init_state , action) => {
    console.log(action.type , action.payload , state);
    switch(action.type){
        case 'GET_MEDICINES' :
            return{
                ...state,
                isloading : false,
                MedicineData : [action.payload],
                error: ''
            }

            case 'ERROR_MEDICINE' : 
            return {
                ...state,
                isloading : false,
                MedicineData : [] ,
                error : action.payload   
            }
            
        default : 
            return state    
    }
}

export default Medicine_Reducer;