import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    USER_LOADED_SUCCESS,
    USER_LOADED_FAIL,
    AUTHENTICATED_SUCCESS,
    AUTHENTICATED_FAIL,
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    USER_DELETE_SUCCESS,
    USER_DELETE_FAIL,
    LOGOUT,
    USER_LOADING,
} from '../actions/types';

import { AuthState, Action } from '../interfaces';

const initialState: AuthState = {
    access: localStorage.getItem('access'),
    refresh: localStorage.getItem('refresh'),
    isAuthenticated: false,
    user: null,
    isLoading: false,
};

export default function (state = initialState, action: Action): AuthState {
    const { type, payload } = action;

    switch (type) {
        case AUTHENTICATED_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
            };
        case LOGIN_SUCCESS:
            localStorage.setItem('access', payload.access);
            return {
                ...state,
                isAuthenticated: true,
                access: payload.access,
                refresh: payload.refresh,
            };
        case USER_LOADING:
            return {
                ...state,
                isLoading: true,
            };
        case USER_LOADED_SUCCESS:
            return {
                ...state,
                isLoading: false,
                user: payload,
            };
        case SIGNUP_SUCCESS:
            return {
                ...state,
            };
        case AUTHENTICATED_FAIL:
            return {
                ...state,
                isAuthenticated: false,
            };
        case USER_LOADED_FAIL:
            return {
                ...state,
                isLoading: false,
                user: null,
            };
        case USER_DELETE_SUCCESS:
        case LOGIN_FAIL:
        case LOGOUT:
            localStorage.removeItem('access');
            localStorage.removeItem('refresh');
            return {
                ...state,
                isAuthenticated: false,
                access: null,
                refresh: null,
                user: null,
                isLoading: false,
            };
        default:
            return state;
    }
}
