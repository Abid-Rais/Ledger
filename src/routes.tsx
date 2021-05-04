import React, { ReactElement } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/login';
import Register from './pages/register';
import resetPassword from './pages/resetPassword';
import resetPasswordConfirm from './pages/resetPasswordConfirm';
import NotAuthenticated from './pages/error/notAuthenticated';
import NotFound from './pages/error/notFound';

const BaseRouter = (): ReactElement => (
    <div>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/signup/" component={Register} />
                <Route exact path="/password/reset/" component={resetPassword} />
                <Route exact path="/password/reset/confirm/:uid/:token" component={resetPasswordConfirm} />
                <Route exact path="/error/notAuthenticated/" component={NotAuthenticated} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    </div>
);

export default BaseRouter;
