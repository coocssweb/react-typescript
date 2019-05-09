import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../containers/home';

export default function () {
    return (
        <Router>
            <Route path="/" component={Home}>
            </Route>
        </Router>
    );
};
