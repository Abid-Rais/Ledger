import axios from 'axios';

import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    USER_LOADING,
    USER_LOADED_SUCCESS,
    USER_LOADED_FAIL,
    AUTHENTICATED_SUCCESS,
    AUTHENTICATED_FAIL,
    PASSWORD_RESET_SUCCESS,
    PASSWORD_RESET_FAIL,
    PASSWORD_RESET_CONFIRM_SUCCESS,
    PASSWORD_RESET_CONFIRM_FAIL,
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    ACTIVATION_SUCCESS,
    ACTIVATION_FAIL,
    USER_DELETE_SUCCESS,
    USER_DELETE_FAIL,
    LOGOUT,
} from './types';
import { returnErrors } from './error';

// const { REACT_APP_API_URL } = process.env;
const REACT_APP_API_URL = 'http://localhost:8000';

/**
 * Sends dispatch based on Authorization token.
 */
export const load_user = () => async (dispatch: any) => {
    dispatch({ type: USER_LOADING });

    if (localStorage.getItem('access')) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `JWT ${localStorage.getItem('access')}`,
                Accept: 'application/json',
            },
        };

        try {
            const res = await axios.get(`${REACT_APP_API_URL}/djoser/auth/users/me/`, config);
            dispatch({
                type: USER_LOADED_SUCCESS,
                payload: res.data,
            });
        } catch (err) {
            dispatch(returnErrors(err.details, err.details));
            dispatch({
                type: USER_LOADED_FAIL,
            });
        }
    } else {
        dispatch({
            type: USER_LOADED_FAIL,
        });
    }
};

/**
 * Sends dispatch to create jwt authorization token.
 * @param email - Email of user logging in
 * @param password - Password of user logging in
 */
export const login = (email: string, password: string) => async (dispatch: any) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const body = JSON.stringify({ email, password });
    try {
        // const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/jwt/create/`, body, config);
        const res = await axios.post(`${REACT_APP_API_URL}/djoser/auth/jwt/create/`, body, config);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data,
        });

        dispatch(load_user());
    } catch (err) {
        console.log(err);
        dispatch(returnErrors(err.details, err.status, err.id));
        dispatch({
            type: LOGIN_FAIL,
        });
    }
};

/**
 * Sends email with link to reset password to user
 * @param email - Email of user who forgot password
 */
export const reset_password = (email: string) => async (dispatch: any) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const body = JSON.stringify({ email });

    try {
        console.log(body);
        const res = await axios.post(`${REACT_APP_API_URL}/djoser/auth/users/reset_password/`, body, config);

        dispatch({
            type: PASSWORD_RESET_SUCCESS,
            payload: res.data,
        });
    } catch (err) {
        dispatch(returnErrors(err.response.data, err.response.status, 'PASSWORD_RESET_FAIL'));
        dispatch({
            type: PASSWORD_RESET_FAIL,
        });
    }
};

/**
 *
 * @param uid
 * @param token
 * @param new_password
 * @param re_new_password
 */
export const reset_password_confirm = (
    uid: string,
    token: string,
    new_password: string,
    re_new_password: string,
) => async (dispatch: any) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const body = JSON.stringify({ uid, token, new_password, re_new_password });

    try {
        const res = await axios.post(`${REACT_APP_API_URL}/djoser/auth/users/reset_password_confirm/`, body, config);

        dispatch({
            type: PASSWORD_RESET_CONFIRM_SUCCESS,
            payload: res.data,
        });
    } catch (err) {
        dispatch(returnErrors(err.response.data, err.response.status));
        dispatch({
            type: PASSWORD_RESET_CONFIRM_FAIL,
        });
    }
};

export const signup = (email: string, name: string, password: string, re_password: string) => async (dispatch: any) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const body = JSON.stringify({ email, name, password, re_password });
    try {
        // const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/jwt/create/`, body, config);
        const res = await axios.post(`${REACT_APP_API_URL}/djoser/auth/users/`, body, config);
        dispatch({
            type: SIGNUP_SUCCESS,
            payload: res.data,
        });
    } catch (err) {
        dispatch(returnErrors(err.response.data, err.response.status, 'SIGNUP_FAIL'));
        dispatch({
            type: SIGNUP_FAIL,
        });
    }
};

export const verify = (uid: string, token: string) => async (dispatch: any) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const body = JSON.stringify({ uid, token });
    try {
        // const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/jwt/create/`, body, config);
        const res = await axios.post(`${REACT_APP_API_URL}/djoser/auth/users/activation/`, body, config);
        dispatch({
            type: ACTIVATION_SUCCESS,
            payload: res.data,
        });
    } catch (err) {
        dispatch(returnErrors(err.response.data, err.response.status));
        dispatch({
            type: ACTIVATION_FAIL,
        });
    }
};

export const checkAuthenticated = () => async (dispatch: any) => {
    if (localStorage.getItem('access')) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        };
        const body = JSON.stringify({ token: localStorage.getItem('access') });
        try {
            // const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/jwt/create/`, body, config);
            const res = await axios.post(`${REACT_APP_API_URL}/djoser/auth/jwt/verify/`, body, config);
            if (res.data.code !== 'token_not_valid') {
                dispatch({
                    type: AUTHENTICATED_SUCCESS,
                });
            } else {
                dispatch({
                    type: AUTHENTICATED_FAIL,
                });
            }
        } catch (err) {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: AUTHENTICATED_FAIL,
            });
        }
    } else {
        dispatch({
            type: AUTHENTICATED_FAIL,
        });
    }
};

export const deleteUser = (password: string) => async (dispatch: any) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const body = JSON.stringify({ password });
    try {
        const res = await axios.delete(`${REACT_APP_API_URL}/djoser/auth/users/me/`, config);
        dispatch({
            type: USER_DELETE_SUCCESS,
            payload: res.data,
        });
    } catch (err) {
        dispatch(returnErrors(err.response.data, err.response.status, 'USER_DELETE_FAIL'));
        dispatch({
            type: USER_DELETE_FAIL,
        });
    }
};

export const logout = () => (dispatch: any) => {
    dispatch({
        type: LOGOUT,
    });
};
