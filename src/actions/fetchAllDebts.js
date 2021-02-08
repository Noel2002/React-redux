export const fetchAllDebtsRequest= ()=>{

    return{
        type: 'FETCH_ALL_DEBTS_REQUEST'
    }
}

export const fetchAllDebtsSuccess= (data)=>{

    return{
        type: 'FETCH_ALL_DEBTS_SUCCESS',
        payload: data
    }
}

export const fetchAllDebtsFailure= (error)=>{

    return{
        type: 'FETCH_ALL_DEBTS_FAILURE',
        payload: error
    }
}