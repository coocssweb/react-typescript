/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-14 17:44:21
 * Copyright © Leedarson. All rights reserved.
 */
import { css } from 'styled-components';

const _setArrow = (arrowSize, borderColor, borderWidth) => css`
  display: inline-block;
  height: ${arrowSize};
  width: ${arrowSize};
  border-width: ${borderWidth} ${borderWidth} 0 0;
  border-color: ${borderColor};
  border-style: solid;
  position: absolute;
`;

// 向上 rotate(-45deg)
export const setTopArrow = (arrowSize, borderColor, borderWidth) => css`
  &:after {
    content: '';
    ${_setArrow(arrowSize, borderColor, borderWidth)}
    transform: matrix(0.71,-0.71,0.71,0.71,0,0);
  }
`;

// 向右 rotate(45deg)
export const setRightArrow = (arrowSize, borderColor, borderWidth) => css`
  &:after {
    content: '';
    ${_setArrow(arrowSize, borderColor, borderWidth)}
    transform: matrix(0.71,0.71,-0.71,0.71,0,0);
    top: 50%;
    right: 0px;
    margin-top: -5px;
  }
`;

// 向下 rotate(135deg)
export const setDownArrow = (arrowSize, borderColor, borderWidth) => css`
  &:after {
    content: '';
    ${_setArrow(arrowSize, borderColor, borderWidth)}
    transform: matrix(-0.71, 0.71, -0.71, -0.71, 0, 0);
    top: -3px;
  }
`;

// 向左 rotate(-135deg)
export const setLeftArrow = (arrowSize, borderColor, borderWidth) => css`
  &:after {
    content: '';
    ${_setArrow(arrowSize, borderColor, borderWidth)}
    transform: matrix(-0.71, -0.71, 0.71, -0.71, 0, 0);
    left: 0px;
    top: -2px;
  }
`;
