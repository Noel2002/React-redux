export const deleteDebtRequest= ()=>{
    return {
        type: 'DELETE_DEBT_REQUEST'
    }
}

export const deleteDebtSuccess= (message)=>{
    return {
        type: 'DELETE_DEBT_SUCCESS',
        payload: message
    }
}

export const deleteDebtFailure= (error)=>{
    return {
        type: 'DELETE_DEBT_FAILURE',
        payload: error
    }
}