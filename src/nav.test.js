import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({ adapter: new Adapter() });

import Nav from './Nav';
import { Link } from 'react-router-dom';

const h2= document.createElement('h2');
 test('Testing nav component using shallow without passing prop', ()=>{
     const wrapper= shallow( <Nav />);
     expect(wrapper.find(<Link></Link>).length).toEqual(0);
 })

 test('Testing nav component using shallow with prop(not logged in)', ()=>{
    const wrapper= shallow( <Nav isLogged={false}/>);
    expect(wrapper.find(<Link></Link>).length).toEqual(3);
})

test('Testing nav component using shallow with prop(logged in)', ()=>{
    const wrapper= shallow( <Nav isLogged={true}/>);
    expect(wrapper.find(<Link></Link>).length).toEqual(4);
})