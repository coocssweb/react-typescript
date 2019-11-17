/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-21 12:06:12
 * Copyright © Leedarson. All rights reserved.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { StyledLoading, StyledLoadingItem } from './StyledLoading';

const Loading = ({ color, size, type }) => {
  if (type === 'bubbles') {
    return (
      <>
        <StyledLoading>
          <StyledLoadingItem key="1" delay="-.3s" color={color} size={size} />
          <StyledLoadingItem key="2" delay="-0.15s" color={color} size={size} />
          <StyledLoadingItem key="3" last delay="0s" color={color} size={size} />
        </StyledLoading>
      </>
    );
  }

  if (type === 'spin') {
    return (
      <StyledLoading>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill={color}>
          <path
            opacity=".25"
            d="M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4"
          />
          <path d="M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z" transform="rotate(187.033 16 16)">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 16 16"
              to="360 16 16"
              dur="0.8s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      </StyledLoading>
    );
  }

  // spokes
  if (type === 'spokes') {
    return (
      <StyledLoading>
        <svg id="loading" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill={color}>
          <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(0 16 16)">
            <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0" />
          </path>
          <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(45 16 16)">
            <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.125s" />
          </path>
          <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(90 16 16)">
            <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.25s" />
          </path>
          <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(135 16 16)">
            <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.375s" />
          </path>
          <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(180 16 16)">
            <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.5s" />
          </path>
          <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(225 16 16)">
            <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.675s" />
          </path>
          <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(270 16 16)">
            <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.75s" />
          </path>
          <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(315 16 16)">
            <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.875s" />
          </path>
        </svg>
      </StyledLoading>
    );
  }

  if (type === 'bars') {
    return (
      <StyledLoading>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill={color}>
          <path transform="translate(2)" d="M 0 9.96481 V 22.0352 H 4 V 9.96481 Z">
            <animate
              attributeName="d"
              values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z"
              dur="1.2s"
              repeatCount="indefinite"
              begin="0"
              keyTimes="0;.2;.5;1"
              keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8"
              calcMode="spline"
            />
          </path>
          <path transform="translate(8)" d="M 0 4.44718 V 27.5528 H 4 V 4.44718 Z">
            <animate
              attributeName="d"
              values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z"
              dur="1.2s"
              repeatCount="indefinite"
              begin="0.2"
              keyTimes="0;.2;.5;1"
              keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8"
              calcMode="spline"
            />
          </path>
          <path transform="translate(14)" d="M 0 11.7847 V 20.2153 H 4 V 11.7847 Z">
            <animate
              attributeName="d"
              values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z"
              dur="1.2s"
              repeatCount="indefinite"
              begin="0.4"
              keyTimes="0;.2;.5;1"
              keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8"
              calcMode="spline"
            />
          </path>
          <path transform="translate(20)" d="M 0 12 V 20 H 4 V 12 Z">
            <animate
              attributeName="d"
              values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z"
              dur="1.2s"
              repeatCount="indefinite"
              begin="0.6"
              keyTimes="0;.2;.5;1"
              keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8"
              calcMode="spline"
            />
          </path>
          <path transform="translate(26)" d="M 0 12 V 20 H 4 V 12 Z">
            <animate
              attributeName="d"
              values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z"
              dur="1.2s"
              repeatCount="indefinite"
              begin="0.8"
              keyTimes="0;.2;.5;1"
              keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8"
              calcMode="spline"
            />
          </path>
        </svg>
      </StyledLoading>
    );
  }

  return null;
};

Loading.defaultProps = {
  size: 'large',
  color: '#ffffff',
  type: 'bubbles',
};

Loading.propTypes = {
  color: PropTypes.string,
  type: PropTypes.oneOf(['bubbles', 'bars', 'spokes', 'spin']),
  size: PropTypes.oneOf(['small', 'large']),
};

export default Loading;
