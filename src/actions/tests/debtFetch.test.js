import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import { fetchDebtRequest, fetchDebtSuccess, fetchDebtFailure, debtClear } from '../debtFetch';


Enzyme.configure({ adapter: new Adapter() });

const message= 'success message'
const error= 'error message';
const debt= {
    isPending: false,
    debt: {
        id:1,
        name: "kalisa",
        type: "Creditor",
        amount: 1000
    },
    error: null
}


describe( 'Testing debtFetch actions', ()=>{
        test(' testing fetchDebtRequest action', ()=>{
            expect( fetchDebtRequest().type).toBe('FETCH_USER_REQUEST');
        })

        test(' testing fetchDebtSuccess action', ()=>{

            const action= fetchDebtSuccess(debt);
            expect( action.type).toBe('FETCH_USER_SUCCESS');
            expect( action.payload ).toBe(debt);

        })

        test(' testing deleteDebtFailure action', ()=>{

            const action= fetchDebtFailure(error);
            expect( action.type).toBe('FETCH_USER_FAILURE');
            expect( action.payload ).toBe(error);

        })

        test(' testing Clear action', ()=>{

            const action= debtClear();
            expect( action.type).toBe('CLEAR');

        })
})
