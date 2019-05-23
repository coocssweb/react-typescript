import * as React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import history from './history';
import Home from '../containers/home';
import Login from '../containers/login';

export default function () {
    const Entry = () => {
        return (
            <Switch>
                <Route path="/main" component={Home} />
                <Route path="/" component={Login} />
                <Route path="/login" component={Login} exact />
            </Switch>
        );
    };

    return (
        <Router history={history}>
            <Route component={Entry}>
            </Route>
        </Router>
    );
};