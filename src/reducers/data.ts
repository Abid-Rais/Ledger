import {
    LOAD_TRANSACTIONS_SUCCESS,
    LOAD_TRANSACTIONS_FAIL,
    CLEAR_DATA,
    LOAD_ACCOUNTS_SUCCESS,
    LOAD_ACCOUNTS_FAIL,
    CHANGE_ACCOUNT_SUCCESS,
    CHANGE_ACCOUNT_FAIL,
} from '../actions/types';
import { Action, DataState } from '../interfaces';

const initialState: DataState = {
    allTransactions: [],
    allAccounts: [],
    currentAccount: null,
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
        case LOAD_ACCOUNTS_SUCCESS:
            return {
                ...state,
                allAccounts: action.payload,
            };
        case LOAD_ACCOUNTS_FAIL:
            return {
                ...state,
                allAccounts: [],
            };
        case CHANGE_ACCOUNT_SUCCESS:
            return {
                ...state,
                currentAccount: action.payload,
            };
        case CHANGE_ACCOUNT_FAIL:
            return {
                ...state,
                currentAccount: null,
            };
        case CLEAR_DATA:
            return {
                allTransactions: [],
                allAccounts: [],
                currentAccount: null,
            };
        default:
            return state;
    }
}
