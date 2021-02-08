import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import { signIn } from '../signIn';


Enzyme.configure({ adapter: new Adapter() });




describe( 'Testing signIn action', ()=>{
        test(' testing sign in action', ()=>{
            expect( signIn().type).toBe('SIGN_IN');
        })


})
