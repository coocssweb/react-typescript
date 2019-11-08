/*
 * @Author: yuxinyu@leedarson.com
 * @Date: 2019-08-29 16:02:03
 * Copyright © Leedarson. All rights reserved.
 */
import styled, { css } from 'styled-components';
import { getColor, getTextColor, getOpacityColor } from '../styledUtils';

const prefixCls = 'LdsRadio';

const radioInput = css`
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

const radioInner = ({ theme, color }) => css`
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
      width: ${theme.pxToRem(36)};
      height: ${theme.pxToRem(36)};
      background-color: ${getColor(theme, color)};
      border-radius: 50%;
      position: absolute;
      top: ${theme.pxToRem(6)};
      left: ${theme.pxToRem(6)};
      content: ' ';
    }
  }
`;

const checkType = {
  checked: ({ theme, color }) => css`
    .${prefixCls}-checked .${prefixCls}-inner {
      border-color: ${getColor(theme, color)};
      &::after {
        display: block;
      }
    }
  `,
  disabled: ({ theme, color }) => css`
    .${prefixCls}-disabled .${prefixCls}-inner {
      border-color: ${getOpacityColor(theme, color, 0.5)};
    }
  `,
  checkedDisabled: ({ theme, color }) => css`
    .${prefixCls}-checked.${prefixCls}-disabled .${prefixCls}-inner {
      &::after {
        background-color: ${getOpacityColor(theme, color, 0.5)};
      }
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

  ${({ theme, color }) => css`
    ${radioInput}
    ${radioInner({ theme, color })}
    ${checkType.checked({ theme, color })}
    ${checkType.disabled({ theme, color })}
    ${checkType.checkedDisabled({ theme, color })}
  `}
`;

export default StyledCheckbox;
