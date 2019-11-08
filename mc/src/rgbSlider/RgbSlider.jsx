/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-14 17:55:41
 * Copyright © Leedarson. All rights reserved.
 */

import React, { useEffect, useRef, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import iro from '@jaames/iro';
import { debounce } from '@leedarson/helper';
import WhiteSpace from '../whiteSpace';
import { StyledWrap, StyledPicker, StyledCircleBox, StyledCircle } from './StyledRgbSlider';

const RgbSlider = React.memo(
  ({ width, defaultValue, onChange, choices }) => {
    const [currentColor, setCurrentColor] = useState(defaultValue);
    const finalColorRef = useRef(defaultValue);
    const iroEndRef = useRef(null);
    const iroMoveRef = useRef(null);
    const iroStartRef = useRef(null);

    const iroRef = useRef(null);
    const wrapRef = useRef(null);
    const iroHandleRef = useRef(null);
    const iroHandleCircleRef = useRef(null);
    const iroHandleBgRef = useRef(null);
    const iroHandleModeRef = useRef(null);
    const callbackRef = useRef(null);

    useEffect(() => {
      const createPicker = () => {
        const { clientWidth } = wrapRef.current;
        iroRef.current = new iro.ColorPicker(wrapRef.current, {
          width: clientWidth,
          color: defaultValue,
          wheelLightness: false,
          layout: [
            {
              component: iro.ui.Wheel,
              options: {},
            },
          ],
          handleSvg: '#color-picker-handle',
        });

        iroHandleModeRef.current = document.querySelector('#color-picker-mode');
        iroHandleCircleRef.current = document.querySelector('#color-picker-circle');
        iroHandleRef.current = document.querySelector('.iro__handle');
        iroHandleBgRef.current = document.querySelector('#color-picker-bg');

        const setCirclePosition = () => {
          const x = iroHandleRef.current.getAttribute('x');
          const y = iroHandleRef.current.getAttribute('y');
          iroHandleModeRef.current.setAttribute('x', x);
          iroHandleModeRef.current.setAttribute('y', y);
        };

        // 监听色盘变化
        callbackRef.current = debounce(value => {
          finalColorRef.current = value.hexString;
          onChange(value.hexString);
          if (iroEndRef.current) {
            iroEndRef.current = null;
            clearTimeout(iroEndRef.current);
          }
          // 移除色点选中
          const selectedDom = document.querySelector('.colorPicker-circle--checked');
          const findSelected = choices.find(choice => choice.color === finalColorRef.current);
          if (!findSelected && selectedDom) {
            selectedDom.classList.remove('colorPicker-circle--checked');
          }
        });

        // 释放后，对比【当前色盘颜色和【已设置颜色】，并且取消防抖timeout
        iroEndRef.current = value => {
          iroHandleModeRef.current.style.display = 'none';
          iroHandleRef.current.style.display = 'block';
          if (value.hexString !== finalColorRef.current) {
            onChange(value.hexString);
            callbackRef.current.cancel();
          }
        };

        // 移动时，设置触点背景颜色
        iroMoveRef.current = value => {
          setCirclePosition();
          iroHandleBgRef.current.setAttribute('fill', value.hexString);
        };

        iroStartRef.current = () => {
          iroHandleModeRef.current.style.display = 'block';
          iroHandleRef.current.style.display = 'none';
          setTimeout(() => {
            setCirclePosition();
          }, 0);
        };

        // iroHandleCircleRef.current.setAttribute('fill', defaultValue);

        iroRef.current.on('color:change', callbackRef.current);
        iroRef.current.on('input:end', iroEndRef.current);
        iroRef.current.on('input:move', iroMoveRef.current);
        iroRef.current.on('input:start', iroStartRef.current);

        document.querySelector('.iro__wheel').append(iroHandleModeRef.current);
      };

      if (!RgbSlider.instance) {
        RgbSlider.instance = true;
        createPicker();
      }

      return () => {
        if (RgbSlider.instance) {
          RgbSlider.instance = false;
          iroRef.current.off('color:change', callbackRef.current);
          iroRef.current.off('input:end', iroEndRef.current);
          iroRef.current.off('input:move', iroMoveRef.current);
          iroRef.current.off('input:start', iroStartRef.current);
        }
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleChoiceClick = useCallback(
      (color, hsl) => () => {
        setCurrentColor(color);
        iroRef.current.color.hsl = hsl;
      },
      [],
    );

    return (
      <StyledWrap>
        <svg
          id="color-picker-mode"
          width="40px"
          height="40px"
          viewBox="0 0 40 40"
          style={{ overflow: 'visible', display: 'none' }}
        >
          <circle id="color-picker-bg" strokeWidth="0" r="40" cx="0" cy="0" fill="none" stroke="none" />
          <circle stroke="none" cx="0" cy="0" r="20" fill="#ffffff" />
        </svg>

        <svg style={{ display: 'none' }}>
          <g>
            <defs>
              <g id="color-picker-handle">
                <circle id="color-picker-circle" strokeWidth={1} stroke="#999999" r="22" fill="none" />
                <circle id="color-picker-circle" strokeWidth={5} stroke="#ffffff" r="20" fill="none" />
              </g>
            </defs>
          </g>
        </svg>
        <StyledPicker
          id="color-picker-container"
          width={width}
          ref={ref => {
            wrapRef.current = ref;
          }}
        />

        <WhiteSpace spacing={22} />
        {choices.length ? (
          <StyledCircleBox>
            {choices.map(({ color, value, hsl }) => (
              <StyledCircle
                key={value}
                display="inline-block"
                fill={color}
                width={48}
                className={color === currentColor ? 'colorPicker-circle--checked' : ''}
                margin={[0, 20, 0, 20]}
                onClick={handleChoiceClick(color, hsl)}
              />
            ))}
          </StyledCircleBox>
        ) : null}

        <WhiteSpace spacing={12} />
      </StyledWrap>
    );
  },
  (prevProps, nextProps) => {
    return prevProps.defaultValue === nextProps.defaultValue;
  },
);

RgbSlider.instance = false;

RgbSlider.defaultProps = {
  width: 580,
  defaultValue: '#FFFFFF',
  choices: [],
  onChange: () => {},
};

RgbSlider.propTypes = {
  width: PropTypes.number,
  defaultValue: PropTypes.string,
  choices: PropTypes.arrayOf(PropTypes.object),
  onChange: PropTypes.func,
};

export default RgbSlider;
