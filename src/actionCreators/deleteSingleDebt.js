import axios from "axios"
import { deleteDebtFailure, deleteDebtRequest, deleteDebtSuccess } from "../actions/debtDelete"

const delelteSingleDebt= (id)=>{
    return function(dispatch){
        dispatch(deleteDebtRequest());
        axios.delete(`http://localhost:8000/debts/${id}`, {
            method: 'DELETE'
        })
        .then(()=>{
            dispatch(deleteDebtSuccess('Article deleted successfully'));
        })
        .catch( error =>{
            dispatch(deleteDebtFailure(error.message));
        })
    }
}

export default delelteSingleDebt;