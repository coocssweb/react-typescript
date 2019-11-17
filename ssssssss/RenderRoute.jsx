/*
 * @Author: linbin@leedarson.com
 * @Date: 2019-10-30 10:06:30
 * Copyright © Leedarson. All rights reserved.
 */

import React, { lazy } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import TransitionView from './TransitionView';
import PrivateRoute from './PrivateRoute';

// webpackPrefetch: true
const Account = lazy(() => import(/* webpackChunkName: "account" */ '@leedarson/account'));
const Home = lazy(() => import(/* webpackChunkName: "home" */ '@leedarson/home'));
const House = lazy(() => import(/* webpackChunkName: "house" */ '@leedarson/house'));
const Room = lazy(() => import(/* webpackChunkName: "room" */ '@leedarson/room'));
const Bind = lazy(() => import(/* webpackChunkName: "bind" */ '@leedarson/bind'));
const Device = lazy(() => import(/* webpackChunkName: "device" */ '@leedarson/device'));
const Group = lazy(() => import(/* webpackChunkName: "group" */ '@leedarson/group'));
const Security = lazy(() => import(/* webpackChunkName: "security" */ '@leedarson/security'));
const Scene = lazy(() => import(/* webpackChunkName: "scene" */ '@leedarson/scene'));
const Automation = lazy(() => import(/* webpackChunkName: "automation" */ '@leedarson/automation'));
const Me = lazy(() => import(/* webpackChunkName: "me" */ '@leedarson/me'));
const Favourite = lazy(() => import(/* webpackChunkName: "favourite" */ '@leedarson/favourite'));
const Support = lazy(() => import(/* webpackChunkName: "support" */ '@leedarson/support'));
const NoMatch = lazy(() => import(/* webpackChunkName: "NoMatch" */ './NoMatch'));

const accounts = [
  'signin',
  'signup',
  'location',
  'country',
  'forgot',
  'verify',
  'verify-password',
  'terms-of-service',
  'privacy-policy',
  'activate-account',
  'reset-password',
  'reset-success',
];

const RenderRoute = () => {
  const location = useLocation(); // 注意：必须放到Router里面才能拿到location
  return (
    <TransitionView>
      <Switch location={location}>
        <Route path={`/:account(${accounts.join('|')})`}>
          <Account />
        </Route>
        <PrivateRoute path="/" exact>
          <Home />
        </PrivateRoute>
        <PrivateRoute path="/signout">
          <Account />
        </PrivateRoute>
        <PrivateRoute path="/house">
          <House />
        </PrivateRoute>
        <PrivateRoute path="/room">
          <Room />
        </PrivateRoute>
        <PrivateRoute path="/bind">
          <Bind />
        </PrivateRoute>
        <PrivateRoute path="/device">
          <Device />
        </PrivateRoute>
        <PrivateRoute path="/me">
          <Me />
        </PrivateRoute>
        <PrivateRoute path="/scene">
          <Scene />
        </PrivateRoute>
        <PrivateRoute path="/automation">
          <Automation />
        </PrivateRoute>
        <PrivateRoute path="/security">
          <Security />
        </PrivateRoute>
        <PrivateRoute path="/group">
          <Group />
        </PrivateRoute>
        <PrivateRoute path="/favourite">
          <Favourite />
        </PrivateRoute>
        <PrivateRoute path="/support">
          <Support />
        </PrivateRoute>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </TransitionView>
  );
};

export default RenderRoute;
