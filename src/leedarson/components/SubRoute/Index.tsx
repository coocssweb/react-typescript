/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-10-30 10:22:22
 * Copyright © Leedarson. All rights reserved.
 */

import * as React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
const { useEffect, useRef, useState } = React;

window._paths = [];

const ChildrenComponent = ({render, props}) => {
    return (
        <div className="page subRoute-page">
            {render(props)}
        </div>
    );
};

const useKey = (path, action) => {
    const pathnameRef = useRef(path);

    if (action === 'mounted') {
        pathnameRef.current = `${path}-mounted`
    } else if (action === 'destory') {
        pathnameRef.current = `${path}-destory`
    } 
   
    return pathnameRef.current;
}

const SubRoute = ({ location, path, render, history }) => {
    const actionRef = useRef('');
    const mountedRef = useRef(false)

    if (window._paths.includes(path)) {
        actionRef.current = 'mounted';
    }

    if (!mountedRef.current && !window._paths.includes(path) ) {
        console.log('sssssssssssssss');
        window._paths.push(path);
        mountedRef.current = true;
    }

    console.log(window._paths);
    if (actionRef.current === 'mounted' && !window._paths.includes(path)) {
        actionRef.current = 'destory';
        mountedRef.current = false;
    }

    console.log(history)
    const key = useKey(path, actionRef.current);
    console.log(key);
    return (
        <TransitionGroup className="subPage-transition">
            <CSSTransition key={key} classNames="goodInOut" timeout={300}>
                <Switch location={location}>
                    <Route path={path} render={props => <ChildrenComponent render={render} props={props} />} />
                </Switch>
            </CSSTransition>
        </TransitionGroup>
    );
};

SubRoute.defaultProps = {
  
};

SubRoute.propTypes = {
 
};

export default withRouter(SubRoute);
