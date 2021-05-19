import React, { FC, ReactElement } from 'react';
import { Provider } from 'react-redux';

import store from './store';
import BaseRouter from './routes';

import './css/App.css';

const App: FC = (): ReactElement => {
    console.log('loaoded');
    return (
        <Provider store={store}>
            <BaseRouter />
        </Provider>
    );
};

export default App;
