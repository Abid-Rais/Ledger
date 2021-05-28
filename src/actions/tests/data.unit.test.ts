import { loadTransactions, loadAccounts, changeAccount } from '../data';
import {
    LOAD_TRANSACTIONS_SUCCESS,
    LOAD_TRANSACTIONS_FAIL,
    LOAD_ACCOUNTS_SUCCESS,
    LOAD_ACCOUNTS_FAIL,
    CHANGE_ACCOUNT_SUCCESS,
    CHANGE_ACCOUNT_FAIL,
    DATA_LOADING,
} from '../types';

import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('actions', () => {
    afterEach(() => {
        fetchMock.restore();
    });

    it('creates LOAD_TRANSACTION_SUCCESS when loading transactions is finished', () => {
        fetchMock.getOnce('/ledger/api/transactions/1/', {
            payload: [],
            headers: { 'content-type': 'application/json' },
        });

        const expectedActions = [{ type: DATA_LOADING }, { type: LOAD_TRANSACTIONS_SUCCESS, payload: [] }];

        const store = mockStore({ allTransactions: [] });

        return store.dispatch(loadTransactions(1)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('creates LOAD_ACCUNTS_SUCCESS when loading accounts is finished', () => {
        fetchMock.getOnce('/ledger/api/transactions/1/', {
            payload: [],
            headers: { 'content-type': 'application/json' },
        });

        const expectedActions = [{ type: DATA_LOADING }, { type: LOAD_ACCOUNTS_SUCCESS, payload: [] }];

        const store = mockStore({ allAccounts: [] });

        return store.dispatch(loadAccounts(1)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('creates CHANGE_ACCOUNT_SUCCESS when changing accounts is finished', () => {
        const expectedAction = { type: CHANGE_ACCOUNT_SUCCESS, payload: 1 };

        expect(changeAccount(1)).toEqual(expectedAction);
    });
});
