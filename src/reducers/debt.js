const debtReducer= (state={}, action)=>{
    switch (action.type) {
        case 'SET':            
            return state= action.payload;
    
        case 'REMOVE':
            return {};

        default: 
        return state;
    }
}

export default debtReducer;