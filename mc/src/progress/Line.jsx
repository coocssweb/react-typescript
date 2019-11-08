/* eslint-disable react/forbid-prop-types */
/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-22 14:22:03
 * Copyright © Leedarson. All rights reserved.
 */

import React from 'react';
import PropTypes from 'prop-types';
import Styled, { withTheme } from 'styled-components';

// 进度条框
const StyledProgress = Styled.svg``;

// 进度条背景
const StyledBar = Styled.path``;

// 进度条进度
const StyledPercent = Styled.path`
  transition: stroke-dashoffset .2s ease 0s, stroke-dasharray .2s ease 0s, stroke linear 0s;
`;

const Line = ({ percent, theme }) => {
  const percentStyle = {
    strokeDashoffset: '0px',
    strokeDasharray: `${percent}px, 100px`,
  };

  return (
    <StyledProgress preserveAspectRatio="none" viewBox="0 0 100 2">
      <StyledBar
        d="M 1,1
           L 100,1"
        stroke-linecap="round"
        stroke="#D9D9D9"
        stroke-width="1"
        fill-opacity="0"
      />
      <StyledPercent
        d="M 1,1
           L 100,1"
        strokeLinecap="round"
        stroke={theme.primary.main}
        strokeWidth="1"
        fillOpacity="0"
        style={percentStyle}
      />
    </StyledProgress>
  );
};

Line.defaultProps = {
  percent: 0,
  theme: {},
};

Line.propTypes = {
  percent: PropTypes.number,
  theme: PropTypes.object,
};

export default withTheme(Line);
