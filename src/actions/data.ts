import axios from 'axios';

import {
    DATA_LOADING,
    DATA_LOADED_SUCCESS,
    DATA_LOADED_FAIL,
    LOAD_TRANSACTIONS_SUCCESS,
    LOAD_TRANSACTIONS_FAIL,
    CLEAR_DATA,
} from './types';
import { returnErrors, clearErrors } from './error';

// const { REACT_APP_API_URL } = process.env;
const REACT_APP_API_URL = 'http://127.0.0.1:8000';

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
            dispatch(returnErrors(err.response.data, err.response.status, err.response.id));
            dispatch({ type: LOAD_TRANSACTIONS_FAIL });
        });
};

export const clearData = () => async (dispatch: any) => {
    try {
        dispatch({ type: CLEAR_DATA });
    } catch (err) {}
};
