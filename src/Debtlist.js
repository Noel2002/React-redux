import { useDispatch, useSelector } from 'react-redux';
import { debtClear } from './actions/debtFetch';
import DebtCatArea from './DebtCatArea';
const DebtList = ( data ) => {

    const dispatch= useDispatch();
    // dispatch(debtClear());
    // const { data }= useSelector( state=> state.allDebts);
    const allCats= data.data;
    console.log('allcats:', allCats);
    
    return ( 
        <div>

            
            {
                allCats.map( (debtCat) => {

                    return(
                        <div>
                        <h2>{debtCat.title}</h2>
                        <DebtCatArea debtCat= { debtCat } />
                        

                    </div>
                    )
                    
                })
            }

        </div>
     );
}
 
export default DebtList;