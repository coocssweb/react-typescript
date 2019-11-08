/*
 * @Author: yuxinyu@leedarson.com
 * @Date: 2019-08-22 16:53:23
 * Copyright © Leedarson. All rights reserved.
 */

import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { StyledTextarea, StyledTextareaWrapper } from './StyledTextarea';
import { EMPTY_FUNCTION } from '../constants';

const Textarea = props => {
  const { rows, size, counter, max, readOnly, disabled, placeholder, onChange, onBlur, onFocus, ...rests } = props;
  const [count, setCount] = useState(0);

  const handleChange = useCallback(
    e => {
      if (counter) {
        setCount(e.target.value.length);
      }
      onChange(e);
    },
    [counter, onChange],
  );

  return (
    <StyledTextareaWrapper>
      <StyledTextarea
        rows={rows}
        size={size}
        maxLength={max}
        readOnly={readOnly}
        disabled={disabled}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={onBlur}
        onFocus={onFocus}
        {...rests}
      />
      {counter ? <span className={`Textarea-counter ${count >= max ? 'warn' : ''}`}>{`${count}/${max}`}</span> : null}
    </StyledTextareaWrapper>
  );
};

Textarea.defaultProps = {
  rows: 7,
  size: 28,
  counter: false,
  max: 1000,
  readOnly: false,
  disabled: false,
  placeholder: null,
  onChange: EMPTY_FUNCTION,
  onBlur: EMPTY_FUNCTION,
  onFocus: EMPTY_FUNCTION,
};

/* eslint-disable react/require-default-props */
Textarea.propTypes = {
  rows: PropTypes.number,
  size: PropTypes.number,
  counter: PropTypes.bool,
  max: PropTypes.number,
  readOnly: PropTypes.bool,
  disabled: PropTypes.bool,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
};

export default Textarea;
