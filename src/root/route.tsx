import * as React from 'react';
import PageTransition from "react-router-page-transition";
import { Switch, Route } from 'react-router-dom';
import Setting from '../pages/setting';
import Modify from '../pages/setting/modify';
import Profile from '../pages/setting/profile';
import Detail from '../pages/setting/modify/detail';

export default function () {
    return (
        <Route
                render={({ location }) => (
                <PageTransition timeout={500}>
                    <Switch location={location}>
                        <Route path="/" component={Setting} exact={true}/>
                        <Route path="/modify" component={Modify} exact={true}/>
                        <Route path="/modify/detail" component={Detail} exact={true}/>
                        <Route path="/profile" component={Profile} exact={true} />
                    </Switch>
                </PageTransition>
            )}
          />
    );
};