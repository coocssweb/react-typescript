/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-10-30 10:22:22
 * Copyright © Leedarson. All rights reserved.
 */

import * as React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import TransitionView from './TransitionView';
const { useEffect } = React;

const SubRoute = ({ location, path, render }) => {


    console.log(path, path === location.pathname);

  return (
    <TransitionView path={path}>
        <Switch location={location}>
            <Route path={path} render={props => {
                return (
                    <div className="page subRoute-page">
                        {render(props)}
                    </div>
                )
            }} />
        </Switch>
    </TransitionView>
  );
};

SubRoute.defaultProps = {
  
};

SubRoute.propTypes = {
 
};

export default withRouter(SubRoute);
