/*
 * @Author: yuxinyu@leedarson.com
 * @Date: 2019-08-27 16:14:20
 * Copyright © Leedarson. All rights reserved.
 */

import styled, { css } from 'styled-components';
import { getColor, getTextColor, getOpacityColor } from '../styledUtils';

const prefixCls = 'LdsCheckbox';

const checkboxInput = css`
  .${prefixCls}-input {
    width: 100%;
    height: 100%;
    border: 0 none;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 99;
    opacity: 0;
    appearance: none;
  }
`;

const sizeSmall = ({ theme }) => css`
  width: ${theme.pxToRem(32)};
  height: ${theme.pxToRem(32)};
  &::after {
    width: ${theme.pxToRem(8)};
    height: ${theme.pxToRem(16)};
    border-width: ${theme.pxToRem(4)};
    top: ${theme.pxToRem(4)};
    left: ${theme.pxToRem(10)};
  }
`;

const checkboxInner = ({ theme, color, size }) => css`
  .${prefixCls}-inner {
    display: inline-block;
    width: ${theme.pxToRem(48)};
    height: ${theme.pxToRem(48)};
    font-size: 14px;
    font-weight: bold;
    color: ${getTextColor(theme, color)};
    border: ${theme.pxToRem(4)} solid ${getColor(theme, color)};
    border-radius: 50%;
    position: relative;
    top: 0;
    left: 0;
    background-color: transparent;

    &::after {
      display: none;
      width: ${theme.pxToRem(10)};
      height: ${theme.pxToRem(22)};
      border: ${theme.pxToRem(6)} solid #ffffff;
      border-top: 0;
      border-left: 0;
      position: absolute;
      top: ${theme.pxToRem(8)};
      left: ${theme.pxToRem(16)};
      transform: rotate(45deg);
      content: ' ';
    }

    ${size === 'small' && sizeSmall({ theme })}
  }
`;

const checkType = {
  checked: ({ theme, color }) => css`
    .${prefixCls}-checked .${prefixCls}-inner {
      background-color: ${getColor(theme, color)};
      border-color: ${getColor(theme, color)};
      &::after {
        display: table;
      }
    }
  `,
  disabled: ({ theme, color }) => css`
    .${prefixCls}-disabled .${prefixCls}-inner {
      background-color: transparent;
      border-color: ${getOpacityColor(theme, color, 0.5)};
    }
  `,
  checkedDisabled: ({ theme, color }) => css`
    .${prefixCls}-checked.${prefixCls}-disabled .${prefixCls}-inner {
      background-color: ${getOpacityColor(theme, color, 0.5)};
      border-color: transparent;
    }
  `,
};

const StyledCheckbox = styled.span`
  display: inline-block;
  .${prefixCls} {
    position: relative;
    display: inline-block;
    outline: none;
    font-size: 0;
    white-space: nowrap;
    vertical-align: middle;
  }

  ${({ theme, color, size }) => css`
    ${checkboxInput}
    ${checkboxInner({ theme, color, size })}
    ${checkType.checked({ theme, color })}
    ${checkType.disabled({ theme, color })}
    ${checkType.checkedDisabled({ theme, color })}
  `}
`;

export default StyledCheckbox;
