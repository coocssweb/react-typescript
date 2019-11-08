/*
 * @Author: yuxinyu@leedarson.com
 * @Date: 2019-09-12 13:54:58
 * Copyright © Leedarson. All rights reserved.
 */
import React from 'react';
import PropTypes from 'prop-types';
import uiPropTypes from '../propTypes';
import { StyledRipple } from './StyledRipple';

const Ripple = ({ children, type, size, width, fill, ...restProps }) => {
  return (
    <StyledRipple type={type} size={size} width={width} fill={fill} {...restProps}>
      <div className="circle insider" />
      <div className="circle middler" />
      <div className="circle outer" />
      {size === 'large' ? (
        <>
          <div className="circle outer1" />
          <div className="circle outer2" />
        </>
      ) : null}
      {children}
    </StyledRipple>
  );
};

Ripple.defaultProps = {
  children: null,
  size: 'small',
  type: 'wave',
  width: 240,
  fill: '#FF5858',
};

Ripple.propTypes = {
  size: uiPropTypes.size,
  type: PropTypes.oneOf(['wave', 'radar']),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  fill: PropTypes.string,
  children: PropTypes.node,
};

export default Ripple;
