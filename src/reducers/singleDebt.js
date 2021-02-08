const initialState= {
    isPending: false,
    debt: null,
    error: null
}
const singleDebtReducer= (state= initialState, action)=>{
    switch (action.type) {
            case 'FETCH_USER_REQUEST':
                return {
                    ...state,
                    isPending: true
                };  

            case 'FETCH_USER_SUCCESS':
                return {
                    debt: action.payload,
                    isPending: false
                };             
            case 'FETCH_USER_FAILURE':
                return {
                    error: action.payload,
                    isPending: false
                };  
            case 'CLEAR':
                return {
                    isPending: false,
                    debt: null,
                    error: null
                }


            default:
                return state;
    }
}

export default singleDebtReducer;