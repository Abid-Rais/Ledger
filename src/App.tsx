import React, { ReactElement } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import './css/App.css';

import Login from './pages/login';

const App: React.FC = (): ReactElement => {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Login} />
        </BrowserRouter>
    );
};

export default App;
