import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { fetchAllDebtsFailure, fetchAllDebtsRequest, fetchAllDebtsSuccess } from '../../actions/fetchAllDebts';
import AllDebtsReducer from '../allDebts';



Enzyme.configure({ adapter: new Adapter() });


const initialState= {
    data: null,
    isPending: false,
    error: null
};

const allDebts= [
    {
        id: 1,
        name: "Noel",
        type: "Creditor",
        amount: 1000
    }
]
const error= 'Error occured'



describe( 'Testing allDebt reducer', ()=>{
        test(' testing allDebt reducer when action is FETCH_ALL_DEBTS_REQUEST', ()=>{
            const state=  AllDebtsReducer(initialState, fetchAllDebtsRequest());
            // console.log('alldebt reducer', AllDebtsReducer(fetchAllDebtsRequest()))
            expect( state.data).toBe(null);
            expect( state.isPending).toBe(true);
            expect( state.error).toBe(null);

        })
        test('testing allDebt reducer when action is FETCH_ALL_DEBTS_SUCCESS', ()=>{
            const state=  AllDebtsReducer(initialState, fetchAllDebtsSuccess(allDebts));

            expect( state.isPending ).toBe(false);
            expect( state.error ).toBe(null);
            expect( state.data ).toBe(allDebts);


        })

        test('testing allDebt reducer when action is FETCH_ALL_DEBTS_FAILURE', ()=>{
            const state=  AllDebtsReducer(initialState, fetchAllDebtsFailure(error));

            expect(state.data).toBe(null);
            expect(state.isPending).toBe(false);
            expect(state.error).toBe(error);

        })



})
