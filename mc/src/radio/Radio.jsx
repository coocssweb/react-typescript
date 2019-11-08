/*
 * @Author: yuxinyu@leedarson.com
 * @Date: 2019-08-29 16:02:03
 * Copyright © Leedarson. All rights reserved.
 */

/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import RcCheckbox from 'rc-checkbox';
import StyledRadio from './StyledRadio';
import { EMPTY_FUNCTION } from '../constants';

const Radio = props => {
  const prefixCls = 'LdsRadio';
  const { color, disabled, name, checked, onClick, onChange, ...restProps } = props;

  const radioProps = {
    prefixCls,
    type: 'radio',
    name,
    disabled,
    onChange,
    ...restProps,
  };

  if (checked !== undefined) {
    radioProps.checked = checked;
  }

  return (
    <StyledRadio color={color} onClick={onClick}>
      <RcCheckbox {...radioProps} />
    </StyledRadio>
  );
};

Radio.defaultProps = {
  color: 'secondary',
  name: 'radio',
  disabled: false,
  onChange: EMPTY_FUNCTION,
  onClick: EMPTY_FUNCTION,
};

/* eslint-disable react/require-default-props */
Radio.propTypes = {
  color: PropTypes.string,
  name: PropTypes.string,
  checked: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
};

export default Radio;
