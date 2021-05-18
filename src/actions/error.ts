import { LOAD_ERRORS, CLEAR_ERRORS } from './types';
import { Action } from '../interfaces';

export const returnErrors = (msg: string | any, status: number, id: any = null): Action => {
    return {
        type: LOAD_ERRORS,
        payload: { msg, status, id },
    };
};

export const clearErrors = (): Action => {
    return {
        type: CLEAR_ERRORS,
    };
};
