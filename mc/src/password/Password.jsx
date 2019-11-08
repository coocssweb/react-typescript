/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-09-17 11:17:14
 * Copyright © Leedarson. All rights reserved.
 */
import React, { useState, useCallback, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { StyledWrap, StyledInput, StyledDisplay, StyledBox, StyledValue, StyledFocus } from './StyledPassword';
import { EMPTY_FUNCTION } from '../constants';

const Password = ({ length, value, onChange, onComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [inputValue, setInputValue] = useState(value);
  const [focused, setFocused] = useState(false);
  const inputRef = useRef();

  useEffect(() => {
    setInputValue(value);
    setCurrentIndex(Math.min(length, value.length));
  }, [length, value]);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  /**
   * 事件，获取焦点
   */
  const handleInputFocus = useCallback(() => {
    setFocused(true);
  }, []);

  /**
   * 事件，失去焦点
   */
  const handleInputBlur = useCallback(() => {
    setFocused(false);
  }, []);

  /**
   * 事件，输入框变化
   */
  const handleInputChange = useCallback(
    evt => {
      const input = evt.target.value.trim();
      if (input.length <= length) {
        if (onChange !== EMPTY_FUNCTION) {
          onChange(input);
        } else {
          setInputValue(input);
          setCurrentIndex(Math.min(length, input.length));
        }
        if (input.length === length) {
          onComplete(input);
        }
      }
    },
    [length, onChange, onComplete],
  );

  const displayElements = [];
  for (let i = 0; i < length; i += 1) {
    displayElements.push(
      <StyledBox key={i}>
        {i === currentIndex && focused ? <StyledFocus /> : null}
        {i < currentIndex ? <StyledValue /> : null}
      </StyledBox>,
    );
  }

  return (
    <StyledWrap>
      <StyledDisplay>{displayElements}</StyledDisplay>
      <StyledInput
        ref={input => {
          inputRef.current = input;
        }}
        value={inputValue}
        pattern="[0-9]*"
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        maxlength={length}
      />
    </StyledWrap>
  );
};

Password.defaultProps = {
  length: 6,
  value: '',
  onChange: EMPTY_FUNCTION,
  onComplete: EMPTY_FUNCTION,
};

Password.propTypes = {
  length: PropTypes.number,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onComplete: PropTypes.func,
};

export default Password;
