import { Link } from "react-router-dom";

const DebtCard = ( { debt}) => {
    return ( 
        <div className="debt-preview" >
                        <div className="name">{debt.name}</div>
                        <div>
                        <div className="type">{debt.type}</div>
                        <div className="amount">{debt.amount}</div>
                        </div>
                        <div>
                        <Link to={`/debts/${debt.id}`}>
                            view more
                        </Link>
                        
                        </div>
                    </div>
     );
}
 
export default DebtCard;