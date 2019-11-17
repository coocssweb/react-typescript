/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-21 12:10:38
 * Copyright © Leedarson. All rights reserved.
 */

import { css, createGlobalStyle } from 'styled-components';

const tooltipPrefixCls = 'LdsTooltip';

const tooltip = ({ theme }) => css`
  .${tooltipPrefixCls} {
    position: absolute;
    z-index: ${theme.zIndexTooltip};
    display: block;
    visibility: visible;
    font-size: ${theme.sizeFontSmall}px;
    line-height: 1.5;
    opacity: 0.9;
  }
`;

// 隐藏状态
const tooltipHidden = () => css`
  .${tooltipPrefixCls}-hidden {
    display: none;
  }
`;

// placement bottom，箭头向上
const tooltipArrowTop = () => css`
  .${tooltipPrefixCls}-placement-bottom {
    .${tooltipPrefixCls}-arrow {
      top: -4px;
      margin-left: -5px;
      border-width: 0 5px 5px;
      border-bottom-color: #373737;
    }
  }
`;

// placement top, 箭头向下
const tooltipArrowBottom = () => css`
  .${tooltipPrefixCls}-placement-top {
    .${tooltipPrefixCls}-arrow {
      bottom: -4px;
      margin-left: -5px;
      border-width: 5px 5px 0;
      border-top-color: #373737;
    }
  }
`;

// 箭头
const tooltipArrow = () => css`
  .${tooltipPrefixCls}-arrow {
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid;
    position: absolute;
    left: 50%;
  }
`;

// tooltip 内容
const tooltipInner = () => css`
  .${tooltipPrefixCls}-inner {
    padding: 8px 10px;
    color: #fff;
    text-align: left;
    text-decoration: none;
    background-color: #373737;
    border-radius: 2px;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.17);
  }
`;

// tooltip globalStyle
const StyledTooltip = createGlobalStyle`
  ${({ theme }) => css`
    ${tooltip({ theme })}
    ${tooltipHidden()}
    ${tooltipArrow()}
    ${tooltipArrowTop({ theme })}
    ${tooltipArrowBottom({ theme })}
    ${tooltipInner({ theme })}
  `}
`;

export default StyledTooltip;
