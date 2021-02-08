import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useSelector, useDispatch } from 'react-redux';
import { setDebt } from './actions/setDebt';
import { signIn} from './actions/signIn';
import fetchSingleDebt from './actionCreators/fetchSingleDebt'
import { useEffect } from "react";
import delelteSingleDebt from "./actionCreators/deleteSingleDebt";

const Details = ( { isLogged }) => {

    const { id } = useParams();
    // const { data: debt, error, isPending}= useFetch('http://localhost:8000/debts/' + id);
    const dbt= useSelector( state=> state.singleDebt);
    // console.log('*****', dbt);
    const { debt, error, isPending}=dbt;

    const history= useHistory();
    const dispatch= useDispatch();

    // const isLogged= useSelector( state=> state.islogged);
    

    useEffect( ()=>{
        dispatch(fetchSingleDebt(id));
    }, []);

    const handleDelete= ()=>{
        // fetch('http://localhost:8000/debts/' + id, {
        //     method: 'DELETE'
        // }).then( ()=>{
        //     console.log('Debt delete');
            // history.push('/debts');
        // })

        dispatch(delelteSingleDebt(id));
        history.push('/debts');


    }

    const handleEdit= (e)=>{
        e.preventDefault();

        // dispatch(setDebt(debt));

        dispatch(fetchSingleDebt(id));

        history.push('edit/'+ id);
    }

    return ( 
        <div className="details">
            {isPending && <p>Loading....</p>}
            {error && <p>{error}</p>}
            {debt && (
                <div>
                    <h3>{debt.type}</h3>
                    <h4>{debt.name}</h4>
                    <p>{debt.amount}</p>
                    {isLogged && <button className="delete-btn" onClick= { ()=> handleDelete() }>delete</button>}
                    {isLogged && <button className="edit-btn" onClick= { (e)=> handleEdit(e) }>Edit</button>}

                </div>
                
            )}
        </div>
     );
}
 
export default Details;