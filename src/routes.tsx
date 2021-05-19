import React, { ReactElement } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/login';
import Dashboard from './pages/dashboard';
import Link from './pages/plaidLink';
import Register from './pages/register';
import resetPassword from './pages/resetPassword';
import resetPasswordConfirm from './pages/resetPasswordConfirm';
import activateUser from './pages/activateUser';
import NotAuthenticated from './pages/error/notAuthenticated';
import NotFound from './pages/error/notFound';

const BaseRouter = (): ReactElement => (
    <div>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/dashboard/" component={Dashboard} />
                <Route exact path="/connectPlaid/" component={Link} />
                <Route exact path="/signup/" component={Register} />
                <Route exact path="/password/reset/" component={resetPassword} />
                <Route exact path="/password/reset/confirm/:uid/:token" component={resetPasswordConfirm} />
                <Route exact path="/activate/:uid/:token" component={activateUser} />
                <Route exact path="/error/notAuthenticated/" component={NotAuthenticated} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    </div>
);

export default BaseRouter;
