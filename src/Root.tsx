import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './leedarson/pages/home/Index';
import List from './leedarson/pages/list/Index';
import Me from './leedarson/pages/me/Index';
import Sub from './leedarson/pages/sub/Index';
import TransitionView from './TransitionView';

export default () => {
    return (
        <Route render={({ location }) => (
            <TransitionView>
                <Switch location={location}>
                    <Route path="/me" component={Me} />
                    <Route path="/list" component={List} />
                    <Route path="/sub" component={Sub} />
                    <Route path="/" component={Home} />
                </Switch>
            </TransitionView>
        )}/>
    );
}