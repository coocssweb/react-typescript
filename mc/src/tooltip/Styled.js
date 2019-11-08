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
    z-index: 5001;
    display: block;
    visibility: visible;
    font-size: ${theme.sizeFontSmall}px;
    line-height: 1.5;
  }
`;

// 隐藏状态
const tooltipHidden = () => css`
  .${tooltipPrefixCls}-hidden {
    display: none;
  }
`;

// placement bottom，箭头向上
const tooltipArrowTop = theme => css`
  .${tooltipPrefixCls}-placement-bottom {
    .${tooltipPrefixCls}-arrow {
      top: -4px;
      margin-left: -5px;
      border-width: 0 5px 5px;
      border-bottom-color: ${theme.surface.main};
    }
  }
`;

// placement top, 箭头向下
const tooltipArrowBottom = theme => css`
  .${tooltipPrefixCls}-placement-top {
    .${tooltipPrefixCls}-arrow {
      bottom: ${theme.space(-3)};
      margin-left: ${theme.space(-4)};
      border-top-color: ${theme.surface.main};
      border-width: ${theme.space(4)} ${theme.space(4)} 0;
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
const tooltipInner = ({ theme }) => css`
  .${tooltipPrefixCls}-inner {
    padding: ${theme.space(2)}  ${theme.space(6)};
    ${{ ...theme.caption }}
    color: ${theme.neuter[700]};
    text-align: left;
    text-decoration: none;
    background-color: ${theme.surface.main};
    border-radius: 2px;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.17);
  }
`;

// tooltip globalStyle
const StyledTooltip = createGlobalStyle`
  ${({ theme }) => css`
    ${tooltip({ theme })}
    ${tooltipHidden()}
    ${tooltipArrow(theme)}
    ${tooltipArrowTop(theme)}
    ${tooltipArrowBottom(theme)}
    ${tooltipInner({ theme })}
  `}
`;

export default StyledTooltip;
