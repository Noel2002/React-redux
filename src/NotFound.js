import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <p>Page Not found</p>
            <p>Click <Link to="/">here</Link> to return to home page</p>
        </div>
       
     );
}
 
export default NotFound;