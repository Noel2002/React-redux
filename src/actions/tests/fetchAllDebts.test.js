import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import { fetchAllDebtsRequest, fetchAllDebtsSuccess, fetchAllDebtsFailure } from '../fetchAllDebts';


Enzyme.configure({ adapter: new Adapter() });

const message= 'success message'
const error= 'error message';
const data= {
    isPending: false,
    data: {
        id:1,
        name: "kalisa",
        type: "Creditor",
        amount: 1000
    },
    error: null
}


describe( 'Testing FetchallDebts actions', ()=>{
        test(' testing fetchAllDebtsRequest action', ()=>{
            expect( fetchAllDebtsRequest().type).toBe('FETCH_ALL_DEBTS_REQUEST');
        })

        test(' testing fetchAllDebtsSuccess action', ()=>{

            const action= fetchAllDebtsSuccess(data);
            expect( action.type).toBe('FETCH_ALL_DEBTS_SUCCESS');
            expect( action.payload ).toBe(data);

        })

        test(' testing fetchAllDebtsFailure action', ()=>{

            const action= fetchAllDebtsFailure(error);
            expect( action.type).toBe('FETCH_ALL_DEBTS_FAILURE');
            expect( action.payload ).toBe(error);

        })
})
