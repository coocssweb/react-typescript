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






/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-21 12:07:14
 * Copyright © Leedarson. All rights reserved.
 */
import React, { useEffect, useRef, useCallback } from 'react';
import { Route, withRouter, Switch, matchPath } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { NOOP, getZIndex, increaseZIndex } from '@leedarson/helper';

let _isPop = false;
const _paths = [];
const _pathname = '';
// 监听后退事件
window.onpopstate = () => {
  _isPop = true;
};

const StyledWrap = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  height: 100%;
  overflow: auto;
  box-sizing: border-box;
  flex-direction: column;
  overflow-x: hidden;
  flex-shrink: 0;
  ${({ theme, zindex }) => css`
    background-color: ${theme.background.main};
    z-index: ${zindex};
  `};
`;

const ChildComponent = ({ zIndex, render, props, path, component: Component, onMount, onUnmount }) => {
  useEffect(() => {
    onMount();

    return () => {
      const index = _paths.indexOf(path);
      if (index > -1) {
        _paths.splice(index, 1);
      }
      onUnmount();
    };
  }, [onMount, onUnmount, path]);
  return (
    <StyledWrap zindex={zIndex} className="page">
      {render !== NOOP.EMPTY_FUNCTION ? render(props) : <Component {...props} />}
    </StyledWrap>
  );
};

ChildComponent.defaultProps = {
  render: NOOP.EMPTY_FUNCTION,
  props: NOOP.EMPTY_OBJECT,
  zIndex: 5000,
  path: '',
  component: null,
  onMount: NOOP.EMPTY_FUNCTION,
  onUnmount: NOOP.EMPTY_FUNCTION,
};

ChildComponent.propTypes = {
  render: PropTypes.func,
  props: PropTypes.oneOfType([PropTypes.object]),
  zIndex: PropTypes.number,
  path: PropTypes.string,
  component: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  onMount: PropTypes.func,
  onUnmount: PropTypes.func,
};

const SubRoute = ({ path, exact, render, component, location, appendToBody, ...restProps }) => {
  const effect = 'goodInOut';

  const mounted = useRef(false);
  const keyRef = useRef('before');
  const { pathname } = location;
  const zIndexRef = useRef(5000);
  console.log(pathname);

  /**
   * 后退时，如果是最后一个路由，将TransitionGroup 回退到 beforeMount状态
   * 路由激活是，将TransitionGroup 设置到 mounted状态
   */
  if (_isPop) {
    if (_paths.indexOf(path) === _paths.length - 1) {
      keyRef.current = 'before';
    } else if (_paths.length === 0) {
      keyRef.current = 'mounted';
    }
    _isPop = false;
  } else if (matchPath(pathname, { path, exact }) && !mounted.current) {
    keyRef.current = 'mounted';
    zIndexRef.current = getZIndex();
  }

  const handleUnMount = useCallback(() => {
    mounted.current = false;
    _isPop = false;
    if (_paths.includes(path)) {
      _paths.pop();
    }
  }, [path]);

  const handleMount = useCallback(() => {
    if (!mounted.current) {
      increaseZIndex();
    }
    mounted.current = true;
    if (!_paths.includes(path)) {
      _paths.push(path);
    }
  }, [path]);

  if (appendToBody) {
    return ReactDOM.createPortal(
      <TransitionGroup className={`subPage-transition ${keyRef.current}`}>
        <CSSTransition key={keyRef.current} classNames={effect} timeout={300}>
          <Switch location={location}>
            <Route
              path={path}
              exact={exact}
              {...restProps}
              render={props => {
                return (
                  <ChildComponent
                    render={render}
                    props={props}
                    zIndex={zIndexRef.current}
                    component={component}
                    onMount={handleMount}
                    onUnmount={handleUnMount}
                    path={path}
                  />
                );
              }}
            />
          </Switch>
        </CSSTransition>
      </TransitionGroup>,
      document.getElementById('root'),
    );
  }
  return (
    <TransitionGroup className={`subPage-transition ${keyRef.current}`}>
      <CSSTransition key={keyRef.current} classNames={effect} timeout={300}>
        <Switch location={location}>
          <Route
            path={path}
            exact={exact}
            {...restProps}
            render={props => {
              return (
                <ChildComponent
                  render={render}
                  props={props}
                  zIndex={zIndexRef.current}
                  component={component}
                  onMount={handleMount}
                  onUnmount={handleUnMount}
                  path={path}
                />
              );
            }}
          />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
};

SubRoute.defaultProps = {
  appendToBody: false,
  path: '',
  location: NOOP.EMPTY_OBJECT,
  exact: false,
  component: null,
  render: NOOP.EMPTY_FUNC,
};

SubRoute.propTypes = {
  appendToBody: PropTypes.bool,
  path: PropTypes.string,
  exact: PropTypes.bool,
  render: PropTypes.func,
  location: ReactRouterPropTypes.location,
  component: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

export default withRouter(SubRoute);

