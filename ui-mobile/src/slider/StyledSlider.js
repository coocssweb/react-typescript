/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-21 12:07:24
 * Copyright © Leedarson. All rights reserved.
 */

import styled, { css } from 'styled-components';

const sliderPrefixCls = 'LdsSlider';

// slider
const slider = () => css`
  .${sliderPrefixCls} {
    position: relative;
  }
`;

// slider 轨迹
const sliderRail = theme => css`
  .${sliderPrefixCls}-rail {
    position: absolute;
    width: 100%;
    background-color: ${theme.lineColorLight};
    height: 2px;
    box-sizing: border-box;
  }
`;

// slider 轨迹，激活的部分
const sliderTrack = theme => css`
  .${sliderPrefixCls}-track {
    position: absolute;
    left: 0;
    height: 2px;
    border-radius: 2px;
    background-color: ${theme.colorPrimary};
  }
`;

// slider 按钮
const sliderHandle = () => css`
  .${sliderPrefixCls}-handle {
    position: absolute;
    margin-left: -14px;
    margin-top: -14px;
    width: 28px;
    height: 28px;
    cursor: pointer;
    border-radius: 50%;
    background-color: #fff;
    box-sizing: border-box;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
    &:active {
      box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
    }
  }
`;

// slider 状态
const sliderDisabled = () => css`
  .${sliderPrefixCls}-disabled {
    .${sliderPrefixCls}-handle {
      background-color: #f0f0f0;
    }
  }
`;

const StyledSlider = styled.div`
  height: 28px;
  ${({ disabled, theme }) => css`
    ${slider()}
    ${sliderRail(theme)}
    ${sliderTrack(theme)}
    ${sliderHandle(theme)}
    ${disabled && sliderDisabled(theme)}
  `}
`;

export default StyledSlider;
