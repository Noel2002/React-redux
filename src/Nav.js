import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
const Nav = ({ isLogged }) => {
    // const handleClick= (e)=>{
    //     e.preventDefault();
    //     const element= e.target;
    //     element.className+=" active";
    // }

    // const isLogged= useSelector( state=> state.islogged);

    
    return ( 
        <nav className="navbar" style={{
            display: "flex"
        }}>
            <h2><Link to="/">Debt tracker</Link></h2>

            <div className="nav-links">
                 <Link to="/" className="item">Home</Link>
                <Link to="/debts" className="item">Manange Debts</Link>
                 {isLogged && <Link to="/create" className="item">Create</Link>}
            </div>
           
        </nav>
     );
}
 
export default Nav;