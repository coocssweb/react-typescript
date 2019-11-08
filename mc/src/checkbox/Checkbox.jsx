/*
 * @Author: yuxinyu@leedarson.com
 * @Date: 2019-08-27 15:05:10
 * Copyright © Leedarson. All rights reserved.
 */

import React from 'react';
import PropTypes from 'prop-types';
import RcCheckbox from 'rc-checkbox';
import StyledCheckbox from './StyledCheckbox';
import { EMPTY_FUNCTION } from '../constants';
import uiPropTypes from '../propTypes';

const Checkbox = props => {
  const { color, size, disabled, name, checked, defaultChecked, onChange, ...restProps } = props;

  const checkboxProps = {
    prefixCls: Checkbox.prefixCls,
    type: 'checkbox',
    name,
    defaultChecked,
    disabled,
    onChange,
    ...restProps,
  };

  if (checked !== undefined) {
    checkboxProps.checked = checked;
  }

  return (
    <StyledCheckbox color={color} size={size}>
      <RcCheckbox {...checkboxProps} />
    </StyledCheckbox>
  );
};

Checkbox.prefixCls = 'LdsCheckbox';

Checkbox.defaultProps = {
  color: 'secondary',
  size: 'large',
  disabled: false,
  onChange: EMPTY_FUNCTION,
};

/* eslint-disable react/require-default-props */
Checkbox.propTypes = {
  color: PropTypes.string,
  size: uiPropTypes.size,
  name: PropTypes.string,
  defaultChecked: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  checked: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};

export default Checkbox;
