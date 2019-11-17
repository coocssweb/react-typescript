/* eslint-disable react/require-default-props */
/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-15 17:57:16
 * Copyright © Leedarson. All rights reserved.
 */

import React from 'react';
import PropTypes from 'prop-types';
import StyledInput from './StyledInput';

const Input = props => {
  const { type, readOnly, disabled, placeholder, onChange, onBlur, onFocus, ...rests } = props;

  return (
    <StyledInput
      type={type}
      readOnly={readOnly}
      disabled={disabled}
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
      {...rests}
    />
  );
};

Input.defaultProps = {
  type: 'text',
  readOnly: false,
  disabled: false,
  placeholder: null,
  onChange: () => {},
  onBlur: () => {},
  onFocus: () => {},
};

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'phone', 'password', 'number']),
  readOnly: PropTypes.bool,
  disabled: PropTypes.bool,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
};

export default Input;
