/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-21 12:07:19
 * Copyright © Leedarson. All rights reserved.
 */

import React, { useCallback, useState, useEffect, useMemo, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NOOP } from '@leedarson/helper';
import { StyledSlider, StyledRail, StyledTrack, StyledHandle, StyledTip } from './StyledSlider';
import { Drag } from '../gesture';

const StyledDrag = styled(Drag)`
  float: left;
`;

const Slider = React.memo(({ format, min, max, defaultValue, disabled, tooltip, onChange }) => {
  const containerRef = useRef();
  const [ensureRendedRect, setEnsureRendedRect] = useState(false);
  const widthRef = useRef(0);
  const heightRef = useRef(0);
  const [haveCalculated, setHaveCalculated] = useState(false);
  const [offset, setOffset] = useState([50, 0]);
  const [percent, setPercent] = useState(0);
  const [value, setValue] = useState(defaultValue);
  const [isDragging, setIsDragging] = useState(false);
  const denominator = useMemo(() => max - min, [max, min]);

  useEffect(() => {
    if (!containerRef.current && !ensureRendedRect) {
      return;
    }
    const containerRect = containerRef.current.getBoundingClientRect();
    const { width, height } = containerRect;
    // 可用区域的宽度
    widthRef.current = width;
    heightRef.current = height;
    setEnsureRendedRect(true);
  }, [denominator, ensureRendedRect]);

  /**
   * 计算：初始颜色，操作点位置
   */
  useEffect(() => {
    const calculate = () => {
      let left = (widthRef.current * (defaultValue - min)) / denominator;
      left = Math.max(0, left);
      left = Math.min(widthRef.current, left);

      setOffset([left, 0]);
      setPercent(left / widthRef.current);
      setHaveCalculated(true);
    };

    const ensureValue = defaultValue >= min && defaultValue <= max;
    if (ensureRendedRect && ensureValue && !haveCalculated) {
      calculate();
    }
  }, [defaultValue, denominator, ensureRendedRect, haveCalculated, max, min]);

  const handleDrag = useCallback(
    ([left]) => {
      setPercent(left / widthRef.current);
      setOffset([left, 0]);
      const changeValue = parseInt((left / widthRef.current) * denominator, 10);
      setValue(changeValue + min);
      onChange(changeValue + min);
    },
    [denominator, min, onChange],
  );

  const handleDragStart = useCallback(() => {
    setIsDragging(true);
  }, []);

  const handleDragEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  const Handle = (
    <StyledDrag
      onDragStart={handleDragStart}
      onDrag={handleDrag}
      onDragEnd={handleDragEnd}
      offset={offset}
      direction="x"
      bounds={[0, widthRef.current, 0, 0]}
      disabled={disabled}
    >
      {tooltip ? <StyledTip visible={+isDragging}>{format.replace('{value}', value)}</StyledTip> : null}

      <StyledHandle dragging={+isDragging} draggable disabled={disabled} />
    </StyledDrag>
  );

  return (
    <StyledSlider ref={containerRef}>
      <StyledRail className="LdsSlider-rail" />
      <StyledTrack percent={percent} className="LdsSlider-track" />
      {haveCalculated ? Handle : null}
    </StyledSlider>
  );
});

Slider.prefixCls = 'LdsSlider';

Slider.defaultProps = {
  min: 1,
  max: 100,
  format: '{value}%',
  defaultValue: 1,
  disabled: false,
  tooltip: false,
  onChange: NOOP.EMPTY_FUNCTION,
};

Slider.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  format: PropTypes.string,
  defaultValue: PropTypes.number,
  disabled: PropTypes.bool,
  tooltip: PropTypes.bool,
  onChange: PropTypes.func,
};

export default Slider;
