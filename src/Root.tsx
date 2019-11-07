import * as React from 'react';
import PageTransition from "./PageTransition";
import { Switch, Route } from 'react-router-dom';
import Grandfather from './Grandfather';


export default () => {
    return (
        <Route render={({ location }) => (
            <PageTransition location={location} duration={10}>
                <Switch location={location}>
                    <Route path="/" component={Grandfather} />
                </Switch>
            </PageTransition>
            )}
          />
    );
}