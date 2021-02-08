import { useState, useEffect} from 'react';

const useFetch= (url)=>{

    const [data, setData]= useState(null);
    const [isPending, setIsPending]= useState(true);
    const [error, setError] = useState(null);

   
    useEffect( ()=>{
        async function fetchData(){
            const res= await fetch(url);
            // console.log(res);
            if(!res.ok){
                throw Error('Application failed to fetch data from server');
            }
            const resjson= await res.json();
            return resjson;
        }

        console.log('use effect ran');
        fetchData().then( (result)=>{

            console.log('#########',result);
            setData(result);
            setIsPending(false);
            setError(null);

        }).catch( err=>{
            console.log(err.message);
            setError(err.message);
            setIsPending(false);
        })

        return console.log('Cleanup');
        

        
    }, [url]);
    return {data, isPending, error};
}
export default useFetch;