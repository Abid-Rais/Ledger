import { combineReducers } from 'redux';
import auth from './auth';
import error from './error';
import data from './data';

export default combineReducers({
    auth,
    error,
    data,
});
