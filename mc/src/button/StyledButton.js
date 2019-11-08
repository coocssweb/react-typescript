/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-21 11:43:03
 * Copyright © Leedarson. All rights reserved.
 */

import styled, { css } from 'styled-components';
import { getColor, getTextColor, getOpacityColor } from '../styledUtils';

// 按钮大小 ['small', 'large']
const btnSize = {
  small: ({ theme, round, plain }) => css`
    display: inline-block;
    width: auto;
    height: ${theme.pxToRem(56)};
    padding: ${theme.pxToRem(0)} ${theme.pxToRem(16)};
    font-size: ${theme.pxToRem(28)};
    line-height: ${(plain ? 54 : 56) / 28};
    border-radius: ${round ? theme.pxToRem(32) : `${theme.borderRadius[4]}`};
  `,
  medium: ({ theme, block, round, plain }) => css`
    display: ${block ? 'block' : 'inline-block'};
    padding: ${theme.pxToRem(24)} ${theme.pxToRem(32)};
    min-width: ${block ? 'auto' : theme.pxToRem(320)};
    height: ${theme.pxToRem(100)};
    font-size: ${theme.pxToRem(34)};
    line-height: ${((plain ? 96 : 100) - 48) / 34};
    border-radius: ${round ? theme.pxToRem(50) : `${theme.borderRadius[8]}`};
  `,
  large: ({ theme, block, plain }) => css`
    display: ${block ? 'block' : 'inline-block'};
    padding: ${theme.pxToRem(24)} ${theme.pxToRem(32)};
    min-width: ${block ? 'auto' : theme.pxToRem(320)};
    height: ${theme.pxToRem(100)};
    font-size: ${theme.pxToRem(34)};
    line-height: ${((plain ? 96 : 100) - 48) / 34};
    border-radius: 0;
  `,
};

// 按钮风格
const btnType = ({ type, colored, theme }) => css`
  background: ${type === 'text' ? 'transparent' : getColor(theme, type)};
  color: ${colored ? getColor(theme, colored) : getTextColor(theme, type)};

  &:active {
    ${type !== 'surface' &&
      type !== 'text' &&
      css`
        background: ${theme[type] ? theme[type].active : ''};
      `}

    ${(type === 'text' || type === 'surface') &&
      css`
        color: ${getOpacityColor(theme, colored, 0.5)};
      `}
  }
`;

// plain: true 扁平化
const btnPlain = ({ type, theme }) => css`
  border: 1px solid ${getColor(theme, type)};
  color: ${getColor(theme, type)};
  background: ${theme.surface.main};

  &:active {
    background: ${getOpacityColor(theme, type, 0.1)};
  }
`;

// 禁用状态
const btnDisabled = ({ type, theme }) => css`
  color: ${theme[type].text};
  background: ${theme[type].disabled};
`;

// 扁平化禁用状态
const btnPlainDisabled = ({ type, theme }) => css`
  color: ${getOpacityColor(theme, type, 0.3)};
  border: 1px solid ${getOpacityColor(theme, type, 0.5)};
`;

// 按钮阴影
const btnShadow = ({ shadow, theme }) => css`
  box-shadow: ${theme.shadow[shadow]};
`;

const StyledButton = styled.div`
  box-sizing: border-box;
  max-width: 100%;
  font-weight: 400;
  text-decoration: none;
  user-select: none;
  overflow: hidden;
  transition: all 0.1s ease;
  position: relative;
  ${({ type, plain, colored, align, disabled, size, block, round, shadow, theme }) => {
    return css`
      text-align: ${align};
      ${type !== 'text' && type !== 'surface' && size !== 'small' && btnShadow({ shadow, theme })}
      ${btnSize[size]({ theme, block, round, plain })}
      ${plain === 0 && !disabled && btnType({ type, colored, theme })}
      ${plain === 1 && !disabled && btnPlain({ type, theme })}
      ${disabled && plain === 0 && btnDisabled({ type, theme })}
      ${disabled && plain === 1 && btnPlainDisabled({ type, theme })}
    `;
  }}
`;

export default StyledButton;
