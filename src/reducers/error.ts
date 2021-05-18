import { LOAD_ERRORS, CLEAR_ERRORS } from '../actions/types';
import { ErrorState, Action } from '../interfaces';

const initialState: ErrorState = {
    msg: { msg: null },
    status: null,
    id: -1,
};

export default function (state = initialState, action: Action): ErrorState {
    switch (action.type) {
        case LOAD_ERRORS:
            return {
                msg: action.payload.msg,
                status: action.payload.status,
                id: action.payload.id,
            };
        case CLEAR_ERRORS:
            return {
                msg: { msg: null },
                status: null,
                id: -1,
            };
        default:
            return state;
    }
}
