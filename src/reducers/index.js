import { combineReducers } from 'redux';
import AllDebtsReducer from './allDebts';
import debtReducer from './debt'
import editDeleteReducer from './editDeleteReducer';
import isloggedReducer from './islogged';
import singleDebtReducer  from './singleDebt'

const allReducers= combineReducers({
    debt: debtReducer,
    islogged: isloggedReducer,
    singleDebt: singleDebtReducer,
    editAndDelete: editDeleteReducer,
    allDebts: AllDebtsReducer
});

export default allReducers;