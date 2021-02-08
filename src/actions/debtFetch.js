export const fetchDebtRequest= ()=>{
    return {
        type: 'FETCH_USER_REQUEST'
    }
}

export const fetchDebtSuccess= (debt)=>{
    return {
        type: 'FETCH_USER_SUCCESS',
        payload: debt
    }
}

export const fetchDebtFailure= (error)=>{
    return {
        type: 'FETCH_USER_FAILURE',
        payload: error
    }
}

export const debtClear= ()=>{
    return {
        type: 'CLEAR'
    }
}