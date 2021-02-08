import axios from "axios";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { setIsLogged, signIn } from "./actions/signIn";

const LoginForm = () => {

    const dispatch= useDispatch();
    const [email, setEmail]= useState('');
    const [ pass, setPass]= useState('');
    const [cookies, setCookie]= useCookies(['initial']);


    const handleLogout= ()=>{
        console.log('logged out');
        dispatch(setIsLogged(false));
        document.cookie= "isLogged=false"
    }

    const handleLogin= (e)=>{
        e.preventDefault();
        axios.get('http://localhost:8000/users')
        .then(response => {
            const users= response.data;
            console.log(users);

            users.map( user=> {
                if( user.email===email && user.password===pass ){
                    console.log('You are logged in');
                    document.cookie= "isLogged=true"
                    dispatch(signIn());
                    setEmail('');
                    setPass('');
                    return user;
                }
                else{
                    console.log('Wrong credenitials');
                    return [];
                }
            })
        })
        .catch( error=> {
            console.log(error);
        })
    }

    return ( 
        <div>
            <input 

            type="text"
            value={ email }
            onChange= { (e)=> { setEmail(e.target.value)  }}
            
            />

            <input 

            type="text" 
            value= {pass}
            onChange= { (e)=> { setPass(e.target.value) }}
            
            />

            <button onClick={ (e)=> handleLogin(e)}>Login</button>
            <button onClick= { ()=> handleLogout()}>Logout</button>
        </div>
     );
}
 
export default LoginForm;