/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-15 17:57:16
 * Copyright © Leedarson. All rights reserved.
 */

import React, { useState, useRef, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import StyledInput from './StyledInput';
import Icon from '../icon';
import { Flex } from '../flex';
import {} from '../constants';

const Input = props => {
  const {
    type,
    readOnly,
    disabled,
    placeholder,
    defaultValue,
    onChange,
    onBlur,
    onFocus,
    eye,
    edit,
    clear,
    value: inputValue,
    forwardedRef,
    ...rests
  } = props;

  const [value, setValue] = useState(defaultValue || inputValue);
  const [eyeStatus, setEyeStatus] = useState(false);
  const [editVisible, setEditVisible] = useState(true);
  const [clearVisible, setClearVisible] = useState(false);
  const inputRef = useRef();
  const timer = useRef();

  useEffect(() => {
    setValue(inputValue);
  }, [inputValue]);

  const handleInputClearClick = useCallback(() => {
    clearTimeout(timer.current);
    setValue('');
    //  让 input 内的值更新后在去获取焦点  ，位的是让获取焦点后渠去到的input的值是空的
    setTimeout(() => {
      inputRef.current.focus();
      setClearVisible(false);
    }, 100);
  }, [inputRef]);

  const handleInputFocus = useCallback(
    e => {
      const latestValue = e.target.value;
      if (latestValue.length !== 0) {
        setClearVisible(true);
      }
      setEditVisible(false);
      onFocus(e);
    },
    [onFocus],
  );

  const handleInputBlur = useCallback(
    e => {
      timer.current = setTimeout(() => {
        setClearVisible(false);
        setEditVisible(true);
      }, 300);
      onBlur(e);
    },
    [onBlur],
  );

  const handleInputChange = useCallback(
    e => {
      const latestValue = e.target.value;
      setValue(latestValue);
      if (latestValue.length === 0) {
        setClearVisible(false);
      } else {
        setClearVisible(true);
      }
      onChange(e);
    },
    [onChange],
  );

  const handleInputEyeClick = useCallback(() => {
    setEyeStatus(!eyeStatus);
  }, [eyeStatus]);

  const handleInputEditClick = () => {
    inputRef.current.focus();
  };

  return (
    <Flex direction="row" justify="space-between" align="center">
      <StyledInput
        ref={input => {
          inputRef.current = input;
          if (forwardedRef) {
            forwardedRef.current = input;
          }
        }}
        value={value}
        type={eyeStatus ? 'text' : type}
        readOnly={readOnly}
        disabled={disabled}
        placeholder={placeholder}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
        onFocus={handleInputFocus}
        {...rests}
      />
      {eye ? (
        <Icon
          onClick={handleInputEyeClick}
          type={eyeStatus ? 'eye-open' : 'eye-close'}
          color="neuter600"
          size="small"
        />
      ) : (
        ''
      )}
      {clearVisible && clear ? (
        <Icon onClick={handleInputClearClick} type="clear" color="neuter500" size="small" />
      ) : (
        ''
      )}
      {editVisible && edit ? <Icon onClick={handleInputEditClick} type="edit" color="neuter500" size="small" /> : ''}
    </Flex>
  );
};

Input.defaultProps = {
  type: 'text',
  readOnly: false,
  disabled: false,
  edit: false,
  clear: false,
  eye: false,
  placeholder: null,
  onChange: () => {},
  onBlur: () => {},
  onFocus: () => {},
};

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'phone', 'password', 'number', 'title']),
  readOnly: PropTypes.bool,
  disabled: PropTypes.bool,
  edit: PropTypes.bool,
  clear: PropTypes.bool,
  eye: PropTypes.bool,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  placeholder: PropTypes.string,
  forwardedRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
};

export default React.forwardRef((props, ref) => <Input forwardedRef={ref} {...props} />);
