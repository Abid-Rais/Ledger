import axios from 'axios';

import { SEND_PUBLICKEY_SUCCESS, SEND_PUBLICKEY_FAIL } from './types';

// const { REACT_APP_API_URL } = process.env;
const REACT_APP_API_URL = 'http://127.0.0.1:8000';

export const addPublicToken = (userID: number, publicToken: string) => async (dispatch: any) => {
    console.log('Inside actions.plaid');
    axios
        .post(`${REACT_APP_API_URL}/plaid/publicToken`, { userID: userID, publicToken: publicToken })
        .then(() => {
            dispatch({ type: SEND_PUBLICKEY_SUCCESS });
        })
        .catch(() => {
            dispatch({ type: SEND_PUBLICKEY_FAIL });
        });
};
