import * as React from 'react';
import PageTransition from "./pageTransition";
import { Switch, Route } from 'react-router-dom';
import TransitionRoute from '../route';
import Setting from '../pages/setting';
import Modify from '../pages/setting/modify';
import Profile from '../pages/setting/profile';
import Detail from '../pages/setting/modify/detail';

export default function () {
    return (
        <Route render={({ location }) => (
            <PageTransition location={location} duration={10000}>
                <Switch location={location}>
                    <TransitionRoute path="/" component={Setting} exact={true}/>
                    <TransitionRoute path="/modify" component={Modify} exact={true}/>
                    <TransitionRoute path="/modify/detail" component={Detail} exact={true}/>
                    <TransitionRoute path="/profile" component={Profile} exact={true} />
                </Switch>
            </PageTransition>
            )}
          />
    );
};