import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchAlldebts from './actionCreators/fetchAllDebts';
import DebtList from './Debtlist';
import useFetch from './useFetch';


const AllDebts = () => {
    const dispatch = useDispatch();


    useEffect( ()=>{
        dispatch(fetchAlldebts());

    }, []);
    const { data, isPending, error}= useSelector( state=> state.allDebts);
    console.log('--------', data);
    console.log('error', error);
    console.log('isPending', isPending);
    // const {data: debts, isPending,error}= useFetch('http://localhost:8000/debts');



    return (
        <div>
            { error && <div> {error} </div> }
            {isPending && <div>Loading....</div>}
            {data && <DebtList data={data} />}

        </div>
        

      );
}
 
export default AllDebts;