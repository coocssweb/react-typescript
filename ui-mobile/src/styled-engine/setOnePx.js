/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-14 17:29:44
 * Copyright © Leedarson. All rights reserved.
 */

import { css } from 'styled-components';

const setTopLine = (borderColor = 'rgba(0, 0, 0, 0.2)') => css`
  content: ' ';
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  border-bottom: 1px solid ${borderColor};
  color: ${borderColor};
  transform-origin: 0 0;
  transform: scaleY(0.5);
  z-index: 2;
`;

const setRightLine = (borderColor = 'rgba(0, 0, 0, 0.2)') => css`
  content: ' ';
  position: absolute;
  right: 0;
  bottom: 0;
  top: 0;
  border-right: 1px solid ${borderColor};
  color: ${borderColor};
  transform-origin: 100% 0;
  transform: scaleX(0.5);
  z-index: 2;
`;

const setBottomLine = (borderColor = 'rgba(0, 0, 0, 0.2)') => css`
  content: ' ';
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  border-top: 1px solid ${borderColor};
  color: ${borderColor};
  transform-origin: 0 100%;
  transform: scaleY(0.5);
  z-index: 2;
`;

const setLeftLine = (borderColor = 'rgba(0, 0, 0, 0.2)') => css`
  content: ' ';
  position: absolute;
  left: 0;
  bottom: 0;
  top: 0;
  border-left: 1px solid ${borderColor};
  color: ${borderColor};
  transform-origin: 0 0;
  transform: scaleX(0.5);
  z-index: 2;
`;

export { setTopLine, setRightLine, setBottomLine, setLeftLine };
