const initialState= {
    data: null,
    isPending: false,
    error: null
};

const AllDebtsReducer= (state= initialState, action) =>{
    switch (action.type) {
        case 'FETCH_ALL_DEBTS_REQUEST':
            
            return {
                data: null,
                isPending: true,
                error: null

            };
    
        case 'FETCH_ALL_DEBTS_SUCCESS':
            return {
                data: action.payload,
                isPending: false,
                error: null
            }

        case 'FETCH_ALL_DEBTS_FAILURE':
            
            return {
                data: null,
                isPending: false,
                error: action.payload
            }
        default:
            return {
                data:null,
                isPending: false,
                error: null
            };
    }
}

export default AllDebtsReducer;