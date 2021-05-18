import { LOAD_TRANSACTIONS_SUCCESS, LOAD_TRANSACTIONS_FAIL, CLEAR_DATA } from '../actions/types';
import { Action, DataState } from '../interfaces';

const initialState: DataState = {
    allTransactions: [],
};

export default function (state = initialState, action: Action): DataState {
    switch (action.type) {
        case LOAD_TRANSACTIONS_SUCCESS:
            return {
                ...state,
                allTransactions: action.payload,
            };
        case LOAD_TRANSACTIONS_FAIL:
            return {
                ...state,
                allTransactions: [],
            };
        case CLEAR_DATA:
            return {
                ...state,
                allTransactions: [],
            };
        default:
            return state;
    }
}
