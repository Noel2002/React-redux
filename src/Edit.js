import { useEffect, useState } from 'react';
import { useParams} from 'react-router-dom';
import EditForm from "./EditForm";

const Edit = () => {

    const {id}= useParams();
    const [isPending, setIspending]= useState(true);
    const [debtData, setDebtData]= useState(null);

    useEffect( ()=>{
        fetch('http://localhost:8000/debts/' + id).then((res)=>{
        res.json().then((data)=>{
            console.log(data);
            setIspending(false);
            setDebtData(data);
        })
    });
    }, [])


    //console.log(debtData);


    return (  
        <div className="edit-debt">
            {isPending && <div>Loading</div>}
            { debtData && <EditForm debtData={ debtData } /> }
        </div>
    );
}
 
export default Edit;