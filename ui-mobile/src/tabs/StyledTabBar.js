/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-21 12:08:02
 * Copyright © Leedarson. All rights reserved.
 */

import styled, { css } from 'styled-components';
import { setBottomLine } from '../styled-engine';

const StyledTabBar = styled.div`
  display: flex;
  flex-direction: row;
  transition: transform 0.3s cubic-bezier(0.35, 0, 0.25, 1);
  will-change: transform;
`;

const cssTabBarItemActive = theme => css`
  color: ${theme.colorPrimary};
  background-color: ${theme.activeBgColor};
`;

const StyledTabBarItem = styled.div`
  position: relative;
  display: block;
  flex: 1;
  flex-shrink: 0;
  white-space: nowrap;
  word-break: keep-all;
  user-select: none;
  &:after {
    ${setBottomLine()}
  }
  ${({ active, theme }) => css`
    font-size: ${theme.sizeFont}px;
    padding: ${theme.sizeGap}px ${theme.sizeGapLarge}px;
    ${active && cssTabBarItemActive(theme)}
    &:active {
      background-color: ${theme.activeBgColor};
    }
  `}
`;

const StyledTabBarActiveLine = styled.div`
  position: absolute;
  bottom: 0px;
  transition: transform 0.3s cubic-bezier(0.35, 0, 0.25, 1), width 0.3s cubic-bezier(0.35, 0, 0.25, 1);
  will-change: transform;
  ${({ offset, width, theme }) => css`
    transform: translate3d(${offset}px, 0, 0);
    width: ${width}px;
    height: 2px;
    background-color: ${theme.colorPrimary};
  `}
`;

export { StyledTabBar, StyledTabBarItem, StyledTabBarActiveLine };
