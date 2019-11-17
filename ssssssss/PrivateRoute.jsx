/*
 * @Author: linbin@leedarson.com
 * @Date: 2019-06-18 11:28:38
 * Copyright © Leedarson. All rights reserved.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { useGlobalStore, useMqttConnect, useMqttDeviceSubscribe } from '@leedarson/store';
// import logger from '@leedarson/logger';
import { Modal } from '@leedarson/ui-mobile';
import history from './history';

const errorCallback = error => {
  const { code } = error || {};
  if (code === 4) {
    Modal.alert({
      content: 'Your account is logged into from another device. Please login again.',
      confirm: 'OK',
      onConfirm() {
        history.replace('/signout');
      },
    });
  }
};

const PrivateRoute = ({ children, ...rest }) => {
  const { authState } = useGlobalStore() || {};
  const { accessToken } = authState || {};
  const pathname = '/signin';
  // const pathname = accessToken ? '/signin' : '/welcome'; // 注意：不要删除
  // logger.log('[PrivateRoute] render', rest.location.pathname);
  useMqttConnect({ errorCallback });
  useMqttDeviceSubscribe();

  return (
    <Route
      {...rest}
      render={({ location }) => {
        return accessToken ? (
          children
        ) : (
          <Redirect
            to={{
              pathname,
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired, // // 任何可被渲染的元素（包括数字、字符串、元素或数组、Fragment)。
  // component: PropTypes.oneOfType([
  //   PropTypes.func, // class or function component
  //   PropTypes.object, // React.lazy is object
  // ]).isRequired,
  path: PropTypes.string.isRequired,
};

export default PrivateRoute;
