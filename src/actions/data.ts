import axios from 'axios';

import {
    DATA_LOADING,
    DATA_LOADED_SUCCESS,
    DATA_LOADED_FAIL,
    LOAD_TRANSACTIONS_SUCCESS,
    LOAD_TRANSACTIONS_FAIL,
    LOAD_ACCOUNTS_SUCCESS,
    LOAD_ACCOUNTS_FAIL,
    CHANGE_ACCOUNT_SUCCESS,
    CHANGE_ACCOUNT_FAIL,
    CLEAR_DATA,
} from './types';
import { returnErrors, clearErrors } from './error';

const { REACT_APP_API_URL } = process.env;

export const loadTransactions = (accountID: number) => async (dispatch: any) => {
    dispatch({ type: DATA_LOADING });
    axios
        .get(`${REACT_APP_API_URL}/ledger/api/transactions/${accountID}/`)
        .then((res) =>
            dispatch({
                type: LOAD_TRANSACTIONS_SUCCESS,
                payload: res.data,
            }),
        )
        .catch((err) => {
            // dispatch(returnErrors(err.response.data, err.response.status, err.response.id));
            dispatch({ type: LOAD_TRANSACTIONS_FAIL });
        });
};

export const loadAccounts = (userID: number) => async (dispatch: any) => {
    dispatch({ type: DATA_LOADING });
    axios
        .get(`${REACT_APP_API_URL}/ledger/api/accounts/${userID}/`)
        .then((res) =>
            dispatch({
                type: LOAD_ACCOUNTS_SUCCESS,
                payload: res.data,
            }),
        )
        .catch((err) => {
            dispatch({ type: LOAD_ACCOUNTS_FAIL });
        });
};

export const changeAccount = (accountUID: number) => async (dispatch: any) => {
    dispatch({ type: DATA_LOADING });
    console.log('Started');
    axios
        .get(`${REACT_APP_API_URL}/ledger/api/accounts/fetch/${accountUID}/`)
        .then((res) =>
            dispatch({
                type: CHANGE_ACCOUNT_SUCCESS,
                payload: res.data,
            }),
        )
        .catch((err) => {
            dispatch({ type: CHANGE_ACCOUNT_FAIL });
        });
    console.log('Finished');
};

export const clearData = () => async (dispatch: any) => {
    try {
        dispatch({ type: CLEAR_DATA });
    } catch (err) {}
};
