/* eslint-disable react/forbid-prop-types */
/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-22 14:22:03
 * Copyright © Leedarson. All rights reserved.
 */

import React from 'react';
import PropTypes from 'prop-types';
import Styled, { withTheme } from 'styled-components';

const StyledWrap = Styled.div`
  position: relative;
`;

const StyledValue = Styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  color: ${({ theme }) => theme.colorSuccess};
  font-size: ${({ theme }) => theme.sizeFontLarge}px;
  position: absolute;
  top: 0;
  right:0;
  bottom: 0;
  left: 0;
`;

// 进度条框
const StyledProgress = Styled.svg`
 transform: rotate(180deg);
`;

// 进度条背景
const StyledBar = Styled.path``;

// 进度条进度
const StyledPercent = Styled.path`
  stroke-dashoffset: 0px;
  transition: stroke-dashoffset 0.2s ease 0s, stroke-dasharray 0.2s ease 0s, stroke ease 0s, stroke-width ease 0.3s;
`;

const Circle = ({ percent, theme }) => {
  const radius = 50 - 2 / 2; // 半径
  const len = Math.PI * 2 * radius; // 周长
  const progressStyle = {
    strokeDasharray: `${(percent / 100) * len}px ${len}px`,
    strokeDashoffset: `0px`,
  };
  return (
    <StyledWrap>
      <StyledProgress preserveAspectRatio="none" viewBox="0 0 100 100">
        <StyledBar
          d="M 50,50 m 0,-49
      a 49,49 0 1 1 0,98
      a 49,49 0 1 1 0,-98"
          stroke="#D9D9D9"
          strokeLinecap="round"
          strokeWidth="1"
          fillOpacity="0"
        />
        <StyledPercent
          d="M 50,50 m 0,-49
         a 49,49 0 1 1 0,98
         a 49,49 0 1 1 0,-98"
          stroke={theme.colorSuccess}
          strokeLinecap="round"
          strokeWidth="2"
          fillOpacity="0"
          style={progressStyle}
        />
      </StyledProgress>
      <StyledValue>{`${percent}%`}</StyledValue>
    </StyledWrap>
  );
};

Circle.defaultProps = {
  percent: 0,
  theme: {},
};

Circle.propTypes = {
  percent: PropTypes.number,
  theme: PropTypes.object,
};

export default withTheme(Circle);
