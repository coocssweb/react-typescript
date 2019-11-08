/*
 * @Author: yuxinyu@leedarson.com
 * @Date: 2019-08-21 11:43:03
 * Copyright © Leedarson. All rights reserved.
 */

import styled, { css } from 'styled-components';

const LARGE_RADIUS = 18;
const MEDIUM_RADIUS = 12;
const SMALL_RADIUS = 9;

const badgeType = ({ theme, color }) => css`
  background: ${theme[color].main};
  color: ${theme[color].text};
`;

const badgeDot = ({ theme, size }) => css`
  height: ${theme.pxToRem((size === 'small' ? SMALL_RADIUS : MEDIUM_RADIUS) * 2)};
  min-width: ${theme.pxToRem((size === 'small' ? SMALL_RADIUS : MEDIUM_RADIUS) * 2)};
  padding: 0;
  border: ${theme.pxToRem(SMALL_RADIUS / 3)} solid #fff;
`;

const badgeRightTop = () => css`
  transform: translate(50%, -50%);
  transform-origin: 100% 0%;
`;

const StyledBadge = styled.span`
  ${({ invisible }) => css`
    ${invisible &&
      css`
        visibility: hidden;
      `}
  `}
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  align-items: center;
  top: 0;
  right: 0;
  box-sizing: border-box;
  padding: 0 4px;
  z-index: 1;

  ${({ theme, color, size, position }) => css`
    position: ${position};
    min-width: ${theme.pxToRem(LARGE_RADIUS * 2)};
    height: ${theme.pxToRem(LARGE_RADIUS * 2)};
    line-height: ${theme.pxToRem(LARGE_RADIUS * 2)};
    border-radius: ${theme.pxToRem(LARGE_RADIUS)};
    color: ${theme.colorWhite};
    ${position === 'absolute' && badgeRightTop()}
    ${{ ...theme.overline }};
    ${badgeType({ theme, color })}
    ${size !== 'large' && badgeDot({ theme, size })}
  `}
`;

const StyledBadgeWrap = styled.span`
  position: relative;
  display: inline-flex;
  vertical-align: middle;
`;

export { StyledBadgeWrap, StyledBadge };
