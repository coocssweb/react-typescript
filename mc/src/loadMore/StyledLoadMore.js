/*
 * @Author: caozhihui@leedarson.com
 * @Date: 2019/8/29
 * Copyright © Leedarson. All rights reserved.
 */

import styled, { css } from 'styled-components';

const lineWidth = 80;
const lineInterval = 30;

const StyledLoadMore = styled.div`
  position: relative;
  max-width: 200px;
  width: 100%;
  overflow: hidden;
  margin: 0 auto;
  ${({ theme }) => css`
    min-height: ${theme.pxToRem(100)};
  `}
`;

const StyledBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  ${({ theme }) => css`
    color: ${theme.neuter[400]};
    ${{ ...theme.body2 }};
  `}
  &:after {
    position: absolute;
    top: 50%;
    content: '';
    height: 1px;
    transform: translateY(-50%) scaleY(0.5);

    ${({ theme, showLine }) => css`
      display: ${showLine ? 'block' : 'none'};
      left: ${theme.pxToRem(-lineInterval - lineWidth)};
      width: ${theme.pxToRem(lineWidth)};
      background: ${theme.neuter[400]};
    `}
  }
  &:before {
    position: absolute;
    top: 50%;
    content: '';
    height: 1px;

    transform: translateY(-50%) scaleY(0.5);
    ${({ theme, showLine }) => css`
      display: ${showLine ? 'block' : 'none'};
      right: ${theme.pxToRem(-lineInterval - lineWidth)};
      width: ${theme.pxToRem(lineWidth)};
      background: ${theme.neuter[400]};
    `}
  }
`;

const StyledLoading = styled.i`
  ${({ theme }) => css`
    margin: ${theme.pxToRem(10)};
  `}
`;

export { StyledLoadMore, StyledLoading, StyledBox };
