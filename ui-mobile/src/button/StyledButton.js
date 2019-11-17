/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-21 11:43:03
 * Copyright © Leedarson. All rights reserved.
 */

import styled, { css } from 'styled-components';

// 按钮大小 ['small', 'large']
const btnSize = {
  small: ({ theme, round }) => css`
    display: inline-block;
    width: auto;
    height: ${theme.btnSmallHeight}px;
    padding: ${theme.btnSmallPaddingY} ${theme.btnSmallPaddingX}px;
    font-size: ${theme.btnSmallFontSize}px;
    line-height: ${theme.btnSmallLineHeight};
    border-radius: ${round ? theme.btnSmallBorderRadiusRound : theme.btnSmallBorderRadius}px;
  `,
  large: ({ theme, block, round }) => css`
    padding: ${theme.btnPaddingY}px ${theme.btnPaddingX}px;
    width: ${block ? 'auto' : theme.btnWidth}px;
    height: ${theme.btnHeight}px;
    font-size: ${theme.btnFontSize}px;
    line-height: ${theme.btnLineHeight};
    border-radius: ${round ? theme.btnBorderRadiusRound : theme.btnBorderRadius}px;
  `,
};

// 按钮风格, ['default', 'primary', 'success', 'warn', 'danger']
// colorDefault
// colorPrimary
// colorSuccess
const btnType = ({ type, theme }) => css`
  background: ${theme[`color${type}`]};
  &:active {
    background: ${theme[`color${type}Active`]};
  }
`;

// plain: true 扁平化
const btnPlain = ({ type, theme }) => css`
  border: 1px solid ${theme[`color${type}`]};
  color: ${theme[`color${type}`]};
  &:active {
    background: ${theme[`color${type}PlainActive`]};
  }
`;

// 禁用状态
const btnDisabled = ({ type, theme }) => css`
  background: ${theme[`color${type}Disabled`]};
`;

// 扁平化禁用状态
const btnPlainDisabled = ({ type, theme }) => css`
  color: ${theme[`color${type}Disabled`]};
`;

const StyledButton = styled.a`
  display: block;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  font-weight: 400;
  color: #fff;
  text-align: center;
  text-decoration: none;
  user-select: none;
  overflow: hidden;
  transition: all 0.2s ease;
  position: relative;
  ${({ type, plain, disabled, size, block, round, theme }) => {
    return css`
      ${btnSize[size]({ theme, block, round })}
      ${!plain && !disabled && btnType({ type, theme })}
      ${plain && !disabled && btnPlain({ type, theme })}
      ${disabled && !plain && btnDisabled({ type, theme })}
      ${disabled && plain && btnPlainDisabled({ type, theme })}
    `;
  }}
`;

export default StyledButton;
