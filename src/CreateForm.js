import { useState } from "react";
import { useHistory} from 'react-router-dom';


const CreateForm = () => {
    const [name, setName]= useState('');
    const [type, setType]= useState('Debtor');
    const [amount, setAmount]= useState(0);
    const history= useHistory();

    const handleSubmit= (e)=>{
        e.preventDefault();
        const debt= { name, type, amount};
        console.log('Button clicked', debt);

        fetch('http://localhost:8000/debts', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(debt)
        }).then( ()=>{
            console.log('Debt recorded');
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


                <button>Add debt</button>
            </form>
        </div>
      );
}
 
export default CreateForm;