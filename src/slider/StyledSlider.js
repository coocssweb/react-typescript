/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-21 12:07:24
 * Copyright © Leedarson. All rights reserved.
 */

import styled, { css } from 'styled-components';
const pxToRem = (value) => {
  return  `${value}px`;
}

const StyledSlider = styled.div`
  position: relative;
  width: 100%;
  display: inline-block;

  ${({ theme }) => css`
    height: ${pxToRem(10)};
  `}
`;

const StyledRail = styled.div`
  position: absolute;
  width: 100%;
  box-sizing: border-box;

  ${({ theme }) => css`
    background-color: #f5f5f5;
    height: ${pxToRem(10)};
    border-radius: ${pxToRem(5)};
  `}
`;

const StyledTrack = styled.div`
  position: absolute;
  left: 0;
  background-color: #376cc2;
  width: 100%;
  transform-origin: 0 0;

  ${({ theme, percent }) => css`
    height: ${pxToRem(12)};
    border-radius: ${pxToRem(12)};
    width: ${percent * 100}%;
  `}
`;

const StyledHandle = styled.div`
  box-sizing: border-box;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
  outline: none;
  cursor: pointer;
  transition: 0.2s transform ease;
  border: 4px solid transparent;
  touch-action: none;

  ${({ theme, disabled, dragging }) => css`
    margin-left: ${pxToRem(-22)};
    margin-top: ${pxToRem(-22)};
    width: ${pxToRem(50)};
    height: ${pxToRem(50)};

    ${disabled &&
      css`
        background-color: #eee;
      `}

    ${dragging === 1 &&
      css`
        transform: scale(1.35);
        border-color: rgba(0, 0, 0, 0.1);
      `}
  `}
`;

const StyledTip = styled.div`
  position: absolute;
  z-index: 999;
  top: -65px;
  border-radius: 4px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.17);
  padding: 5px 15px;
  transform: translate3d(-50%, 0px, 1px);
  ${({ theme, visible }) => css`
    background-color: #fff;
    display: ${visible === 1 ? 'block' : 'none'};
    ${{ ...theme.h4 }}
    color: $666;
  `}

  &:after {
    content: '';
    width: 0;
    height: 0;
    border-style: solid;
    border-color: transparent;
    bottom: -0.15000000000000002rem;
    position: absolute;
    left: 50%;
    border-width: 0.2rem 0.2rem 0;
    border-top-color: #ffffff;
    margin-left: -0.2rem;
  }
`;

export { StyledSlider, StyledRail, StyledTrack, StyledHandle, StyledTip };
