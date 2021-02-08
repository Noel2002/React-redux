const initialState={
    error: null,
    message: null,
    isPending: false
}

const editDeleteReducer= (state=initialState, action)=>{
    switch(action.type){
            case 'DELETE_DEBT_REQUEST':
                return {
                    error: null,
                    message: null,
                    isPending: true
                }

            case 'DELETE_DEBT_SUCCESS':
                return {
                    error: null,
                    message: action.payload,
                    isPending: false
                }   

            case 'DELETE_DEBT_FAILURE':
                return {
                    error: action.payload,
                    message: null,
                    isPending: false
                }       
            
            default:

                return {
                    error: null,
                    message: null,
                    isPending: false
                }
                
    }
}

export default editDeleteReducer;