/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-21 12:08:02
 * Copyright © Leedarson. All rights reserved.
 */

import styled, { css } from 'styled-components';

const StyledTabBarContent = styled.div``;

const StyledTabBar = styled.div`
  display: flex;
  transition: transform 0.3s cubic-bezier(0.35, 0, 0.25, 1);
  will-change: transform;

  ${({ direction }) => css`
    flex-direction: ${direction === 'horizontal' ? 'row' : 'column'};
  `}
`;

const StyledTabBarItem = styled.div`
  position: relative;
  display: block;
  flex: 1;
  flex-shrink: 0;
  white-space: nowrap;
  word-break: keep-all;
  user-select: none;
  text-align: center;

  ${({ theme, active }) => css`
    padding: 14px 0px;
    color: ${theme.neuter[700]};
    ${{ ...theme.body1 }}
    ${active &&
      css`
        color: ${theme.primary.main};
        &:after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background-color: ${theme.primary.main};
          height: 2px;
        }
      `};
  `}
`;

const StyledVerticalTabBarItem = styled.div`
  position: relative;
  display: block;
  flex: 1;
  flex-shrink: 0;
  white-space: pre-wrap;
  user-select: none;
  box-sizing: border-box;
  line-height: 1.4;

  ${({ theme, active }) => css`
    padding: ${theme.pxToRem(25)} ${theme.pxToRem(40)};
    max-width: ${theme.pxToRem(220)};
    color: ${theme.neuter[700]};

    ${{ ...theme.body1 }}

    ${active &&
      css`
        color: ${theme.primary.main};
        background-color: ${theme.surface.main};
        &:after {
          content: '';
          position: absolute;
          top: ${theme.pxToRem(25)};
          bottom: ${theme.pxToRem(25)};
          left: 0;
          background-color: ${theme.primary.main};
          width: 2px;
        }
      `};
  `};
`;

export { StyledTabBarContent, StyledTabBar, StyledTabBarItem, StyledVerticalTabBarItem };
