import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import  islogged  from '../islogged';
import { setIsLogged, signIn } from '../../actions/signIn';


Enzyme.configure({ adapter: new Adapter() });




describe( 'Testing islogged reducer', ()=>{
    const value= true;
        test(' testing islogged reducer when action is sign in', ()=>{
            expect( islogged(false, signIn())).toBe(true);
        })
        test(' testing islogged reducer when action is setIsLoggedIn', ()=>{
            expect( islogged(false, setIsLogged(value))).toBe(value);
        })

        test(' testing islogged reducer when action is setIsLoggedIn', ()=>{
            expect( islogged(false, {type: 'YYYYYY'})).toBe(false);
        })



})
