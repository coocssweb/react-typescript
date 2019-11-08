/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-09-17 11:17:11
 * Copyright © Leedarson. All rights reserved.
 */

import styled, { css, keyframes } from 'styled-components';
import { getOpacityColor } from '../styledUtils';

const Flash = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
`;

const StyledWrap = styled.div`
  position: relative;
  width: 100%;
`;

const StyledInput = styled.input`
  position: absolute;
  border: none;
  top: 0;
  bottom: 0;
  width: 100%;
  outline: none;
  background: transparent;
  opacity: 0;
`;

const StyledDisplay = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const StyledBox = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme }) => css`
    width: ${theme.pxToRem(50)};
    height: ${theme.pxToRem(88)};
  `};

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;

    ${({ theme }) => css`
      height: ${theme.pxToRem(4)};
      border-radius: ${theme.pxToRem(2)};
      background-color: ${getOpacityColor(theme, 'primary', 0.4)};
    `};
  }
`;

const StyledValue = styled.div`
  ${({ theme }) => css`
    width: ${theme.pxToRem(24)};
    height: ${theme.pxToRem(24)};
    border-radius: ${theme.pxToRem(12)};
    background-color: ${theme.neuter['800']};
  `};
`;

const StyledFocus = styled.div`
  position: absolute;
  left: 0;
  top: 10px;
  bottom: 10px;
  width: 1px;
  animation: ${Flash} 0.8s ease infinite;

  ${({ theme }) => css`
    background-color: ${getOpacityColor(theme, 'primary', 0.4)};
  `};
`;

export { StyledWrap, StyledInput, StyledDisplay, StyledBox, StyledValue, StyledFocus };
