import  { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory} from 'react-router-dom';
import { debtClear } from './actions/debtFetch';


const EditForm = ( {debtData}) => {
    const dbtdata= useSelector( state=> state.singleDebt);
    console.log('$$$$$$$', dbtdata);
  const [name, setName]= useState(dbtdata.debt.name);
  const [type, setType]= useState(dbtdata.debt.type);
  const [amount, setAmount]= useState(dbtdata.debt.amount);
  const history= useHistory();
  const dispatch= useDispatch();

  const handleSubmit= (e)=>{
      e.preventDefault();
      const debt= { name, type, amount};
      console.log('Button clicked', debt);

      fetch(`http://localhost:8000/debts/${dbtdata.debt.id}`, {
          method: 'PUT',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(debt)
      }).then( ()=>{
          console.log('Debt recorded');
         // dispatch(debtClear());
          history.push('/debts');
      })
  }
  return (
      <div className="create-form">
          <form className="form" onSubmit= { (e)=>{ handleSubmit(e) }}>
              <input
                  type="text"
                  required
                  value= { name }
                  onChange= { (e)=> setName(e.target.value) }
              />
              <select
                   required
                   value= { type }
                   onChange= { (e)=> setType(e.target.value) }
              >
                  <option value="Debtor">Debtor</option>
                  <option value="Creditor">Creditor</option>
              </select>
              <input
                  type="number" 
                  required
                  value= { amount }
                  onChange= { (e)=> setAmount(e.target.value) }
              />


              <button>Update debt</button>
          </form>
      </div>
    );
}
 
export default EditForm;