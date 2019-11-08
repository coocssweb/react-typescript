/* eslint-disable react/forbid-prop-types */
/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-22 14:22:03
 * Copyright © Leedarson. All rights reserved.
 */

import React from 'react';
import PropTypes from 'prop-types';
import Styled, { withTheme } from 'styled-components';
import uiPropTypes from '../propTypes';
import { getColor, getOpacityColor } from '../styledUtils';

const StyledWrap = Styled.div`
  position: relative;
`;

const StyledValue = Styled.div`
  position: absolute;
  top: 0;
  right:0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
`;

// 进度条框
const StyledProgress = Styled.svg`
  z-index: 1;
`;

// 进度条背景
const StyledBar = Styled.path`
  z-index: 1;
`;

// 进度条进度
const StyledPercent = Styled.path`
  stroke-dashoffset: 0px;
  transition: stroke-dashoffset 0.2s linear 0s, stroke-dasharray 0.2s linear 0s, stroke linear 0s, stroke-width ease 0.3s;
`;

const Circle = ({ percent, color, barColor, theme, children }) => {
  const radius = 50 - 2 / 2; // 半径
  const len = Math.PI * 2 * radius; // 周长
  const progressStyle = {
    strokeDasharray: `${(percent / 100) * len}px ${len}px`,
    strokeDashoffset: `0px`,
  };
  return (
    <StyledWrap>
      <StyledProgress preserveAspectRatio="none" viewBox="0 0 106 106">
        <g id="dottedpath">
          <StyledBar
            d={`M 53,53 m 0,-${radius}
            a ${radius},${radius} 0 1 1 0,${radius * 2}
            a ${radius},${radius} 0 1 1 0,-${radius * 2}`}
            stroke={getOpacityColor(theme, barColor, 0.2)}
            strokeLinecap="round"
            strokeWidth="4"
            fillOpacity="0"
          />
          <StyledPercent
            d={`M 53,53 m 0,-${radius}
             a ${radius},${radius} 0 1 1 0,${radius * 2}
             a ${radius},${radius} 0 1 1 0,-${radius * 2}`}
            stroke={getColor(theme, color)}
            strokeLinecap="round"
            strokeWidth={percent > 0 ? '4' : '0'}
            fillOpacity="0"
            style={progressStyle}
          />
        </g>
      </StyledProgress>
      {children ? <StyledValue>{children}</StyledValue> : null}
    </StyledWrap>
  );
};

Circle.defaultProps = {
  children: null,
  percent: 0,
  theme: {},
  color: 'primary',
  barColor: 'primary',
};

Circle.propTypes = {
  children: PropTypes.node,
  percent: PropTypes.number,
  theme: PropTypes.object,
  color: uiPropTypes.color,
  barColor: uiPropTypes.color,
};

export default withTheme(Circle);
