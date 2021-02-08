import DebtCard from "./DebtCard";

const DebtCatArea = ({debtCat}) => {
    console.log('Debtcat from debtcatarea', debtCat);
    return ( 
        <div className="debts-area" id={debtCat.title==="Debtors"? "debtor":"creditor"}>
        {

            (debtCat.data).map( (debt)=> (                                    
                   
                    <DebtCard debt={ debt} />
                    
                ))
            }

        </div>
     );
}
 
export default DebtCatArea;