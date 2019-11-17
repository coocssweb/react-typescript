/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-21 12:07:19
 * Copyright © Leedarson. All rights reserved.
 */

/* eslint-disable react/prop-types */
import * as React from 'react';
import RcSlider, { Handle } from 'rc-slider';
import PropTypes from 'prop-types';
import StyledSlider from './StyledSlider';
import Tooltip from '../tooltip';

const CustomHandle = props => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Tooltip value={value} visible={dragging} trigger="hover" placement="top" key={index}>
      <Handle value={value} {...restProps} />
    </Tooltip>
  );
};

const Slider = ({ min, max, defaultValue, disabled, tooltip, onChange }) => {
  const sliderProps = {
    prefixCls: Slider.prefixCls,
    min,
    max,
    defaultValue,
    disabled,
    onChange,
  };

  if (tooltip) {
    sliderProps.handle = CustomHandle;
  }

  return (
    <StyledSlider disabled={disabled}>
      <RcSlider {...sliderProps} />
    </StyledSlider>
  );
};

Slider.prefixCls = 'LdsSlider';

Slider.defaultProps = {
  min: 0,
  max: 100,
  defaultValue: 0,
  disabled: false,
  tooltip: false,
  onChange: () => {},
};

Slider.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  defaultValue: PropTypes.number,
  disabled: PropTypes.bool,
  tooltip: PropTypes.bool,
  onChange: PropTypes.func,
};

export default Slider;
