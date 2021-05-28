import axios from 'axios';

import { SEND_PUBLICKEY_SUCCESS, SEND_PUBLICKEY_FAIL } from './types';

const { REACT_APP_API_URL } = process.env;

export const addPublicToken = (userID: number, publicToken: string) => async (dispatch: any) => {
    const data = new FormData();
    data.append('userID', userID.toString());
    data.append('publicToken', publicToken);

    axios
        .post(`${REACT_APP_API_URL}/plaid/publicToken`, data)
        .then(() => {
            dispatch({ type: SEND_PUBLICKEY_SUCCESS });
        })
        .catch(() => {
            dispatch({ type: SEND_PUBLICKEY_FAIL });
        });
};
