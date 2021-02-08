import { useSelector, useDispatch } from 'react-redux';
import fetchAlldebts from './actionCreators/fetchAllDebts';
import { signIn } from './actions/signIn';
import LoginForm from './LoginForm';

const  Home = () => {
    const dispatch= useDispatch();
    // const isLogged= useSelector( state => state.islogged);
    // console.log(isLogged);  


    return ( 
        <div className="home">
            <h2>Welcome to my Debt management website</h2>
            <button onClick= {()=> dispatch( fetchAlldebts()) }>Fetch Test</button>
            <LoginForm />
        </div>
     );
}
 
export default  Home;