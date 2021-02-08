import Nav from './Nav';
import Debts from './Debt';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from "./Home";
import CreateForm from './CreateForm';
import Details from './Details';
import Edit from './Edit';
import NotFound from './NotFound';
import { useDispatch, useSelector } from 'react-redux';
import { useCookies } from 'react-cookie';
import { setIsLogged } from './actions/signIn';
import { useEffect } from 'react';


function App() {

  const isLogged= useSelector( state => state.islogged);
  const dispatch= useDispatch();
  const [cookies, setCookie]= useCookies(['initial']);


  useEffect( ()=>{

    // setCookie('isLogged', false, {
    //   path: '/',
    //   maxAge: 3 * 24 * 3600,
    //   httpOnly: true
    // });
    document.cookie= "isLogged=false";
    const realCookie= JSON.parse(cookies.isLogged);
    console.log('Cookie value',realCookie);  
    dispatch(setIsLogged(realCookie));
  }, []);


  return (
    <Router>
      <div className="App">
        <Nav isLogged= { isLogged } />
        <div className="content">
          <Switch>

          <Route exact path="/">
              <Home />
            </Route>

            <Route exact path="/debts">
              <Debts />
            </Route>            

            <Route exact path="/debts/:id">
              <Details isLogged={ isLogged } />
            </Route>

            <Route path="/debts/edit/:id">
              <Edit />
            </Route>

            { isLogged ? (<Route path="/create"><CreateForm /></Route>) : <div>Not authorised</div>}

            <Route path="*">
              <NotFound />
            </Route>
              
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
