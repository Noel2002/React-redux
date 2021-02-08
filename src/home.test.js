import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import sinon from 'sinon';
Enzyme.configure({ adapter: new Adapter() });

import Home from './Home';

const wrapper= shallow( <Home/>);

 test('Testing Home cpmponet using shallow', ()=>{
     
     expect(wrapper.find('h2').text()).toBe('Welcome to my Debt management website');
 })