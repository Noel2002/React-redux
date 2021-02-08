import axios from 'axios';
import { fetchDebtRequest, fetchDebtSuccess, fetchDebtFailure} from '../actions/debtFetch'

const fetchSingleDebt= (id)=>{

    return function(dispatch){
        dispatch(fetchDebtRequest());
        axios.get(`http://localhost:8000/debts/${id}`)
        .then( response =>{
            const debt= response.data;
            dispatch(fetchDebtSuccess(debt));
        })
        .catch( error =>{
            dispatch(fetchDebtFailure(error.message));
        })
    }

}

export default fetchSingleDebt;