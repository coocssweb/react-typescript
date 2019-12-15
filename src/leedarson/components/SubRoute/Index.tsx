/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-10-30 10:22:22
 * Copyright © Leedarson. All rights reserved.
 */

import * as React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
const { useEffect, useRef, useState, useMemo } = React;

const ChildrenComponent = ({path, render, props, onMount, onUnmount}) => {
    useEffect(() => {
        onMount();
        return () => {
           onUnmount();
        }
    }, []);
    return (
        <div className="page subRoute-page">
            {render(props)}
        </div>
    );
};

const _paths = [];
let _isPop = false;
window.onpopstate = function () {
    _isPop = true;
    // setTimeout(() => {
    //     _isPop = false;
    // }, 300);
};

const SubRoute = ({ location, path, render }) => {
    const mounted = useRef(false);
    const keyRef = useRef('before');
    const {pathname} = location;
    if (_isPop) {
        if (_paths.indexOf(path) === _paths.length - 1) {
            keyRef.current = 'before';
            _isPop = false;
        }
    } else {
        if (pathname === path && !mounted.current) {
            keyRef.current = 'mounted';
        }
    }

    const handleUnMount = () => {
        mounted.current = false;
        if (_paths.includes(path)) {
            _paths.pop();
        }
    };

    const handleMount = () => {
        mounted.current = true;
        if (!_paths.includes(path)) {
            _paths.push(path);
        }
    }

    return (
        <TransitionGroup className={`${keyRef.current} subPage-transition`}>
            <CSSTransition key={keyRef.current} classNames="goodInOut" timeout={300}>
                <Switch location={location}>
                    <Route path={path} render={props => <ChildrenComponent path={path} render={render} props={props} onMount={handleMount} onUnmount={handleUnMount} />} />
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
