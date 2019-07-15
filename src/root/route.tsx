import * as React from 'react';
import PageTransition from "./pageTransition";
import { Switch, Route } from 'react-router-dom';
import Setting from '../pages/setting';
import Modify from '../pages/setting/modify';
import Profile from '../pages/setting/profile';
import Detail from '../pages/setting/modify/detail';

export default function () {
    return (
        <Route render={({ location }) => (
            <PageTransition location={location} duration={1000}>
                <Switch location={location}>
                    <Route path="/" render={(props) =>  <Setting {...props} direction='leave' />} exact={true}/>
                    <Route path="/modify" to="abc" render={(props) =>  <Modify {...props} backTo='/' backDirection='leave' direction='appear' />} exact={true}/>
                    <Route path="/modify/detail" render={(props) =>  <Detail {...props} backTo='/modify' backDirection='leave' direction='appear' />} exact={true}/>
                    <Route path="/profile" component={Profile} exact={true} />
                </Switch>
            </PageTransition>
            )}
          />
    );
};