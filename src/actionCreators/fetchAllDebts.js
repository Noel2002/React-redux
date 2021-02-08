import axios from "axios";
import { fetchAllDebtsFailure, fetchAllDebtsRequest, fetchAllDebtsSuccess } from "../actions/fetchAllDebts";

const fetchAlldebts= ()=>{
 return function (dispatch){
     dispatch(fetchAllDebtsRequest());

     axios.get('http://localhost:8000/debts')
     .then( response=> {

        //  console.log("&&&&&&&", response.data);

         const data= response.data;
         const creditors= data.filter( debt => debt.type==='Creditor');
         const debtors = data.filter( debt => debt.type==='Debtor');

         const catDebts= [
             {
                 title: 'Debtors',
                 data: debtors
             },
             {
                 title: 'Creditors',
                 data: creditors
             }
         ];

         console.log('Categorised data', catDebts);

         dispatch(fetchAllDebtsSuccess(catDebts));

     })
     .catch( error=> {
         console.log('Error: ', error.message);
         dispatch(fetchAllDebtsFailure(error.message));
     })
 }

}

export default fetchAlldebts;