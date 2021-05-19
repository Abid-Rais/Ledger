import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const middleWare = [thunk];

const store = createStore(rootReducer, undefined, composeWithDevTools(applyMiddleware(...middleWare)));
export default store;
