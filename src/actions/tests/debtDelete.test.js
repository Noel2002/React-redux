import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import { deleteDebtRequest, deleteDebtSuccess, deleteDebtFailure } from '../debtDelete';


Enzyme.configure({ adapter: new Adapter() });

const message= 'success message'
const error= 'error message';

test(' testing deleteDebtrequest action', ()=>{
    expect( deleteDebtRequest().type).toBe('DELETE_DEBT_REQUEST');
})

test(' testing deleteDebtSuccess action', ()=>{

    const action= deleteDebtSuccess(message);
    expect( action.type).toBe('DELETE_DEBT_SUCCESS');
    expect( action.payload ).toBe(message);

})

test(' testing deleteDebtFailure action', ()=>{

    const action= deleteDebtFailure(error);
    expect( action.type).toBe('DELETE_DEBT_FAILURE');
    expect( action.payload ).toBe(error);

})