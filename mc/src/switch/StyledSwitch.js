/*
 * @Author: caozhihui@leedarson.com
 * @Date: 2019/8/29
 * Copyright © Leedarson. All rights reserved.
 */

import styled, { css } from 'styled-components';

const StyledSwitch = styled.label`
  position: relative;
  display: block;
  ${({ theme, disabled }) => css`
    width: ${theme.pxToRem(84)};
    height: ${theme.pxToRem(48)};
    border-radius: ${theme.pxToRem(25)};
    background: ${theme.neuter[300]};
    opacity: ${disabled ? 0.7 : 1};
  `}
`;

const StyledThumb = styled.div`
  width: 100%;
  height: 100%;
  transition: all 0.3s;
  &:after {
    content: '';
    position: absolute;
    top: 50%;
    transition: all 0.3s;
    border-radius: 100%;
    box-sizing: border-box;
  }

  ${({ checked, theme }) => css`
    border-radius: ${theme.pxToRem(25)};
    background: ${checked ? theme.secondary.main : theme.neuter[300]};
    &:after {
      transform: translate(${checked ? theme.pxToRem(36) : '0px'}, -50%);
      width: ${theme.pxToRem(40)};
      height: ${theme.pxToRem(40)};
      left: ${theme.pxToRem(4)};
      background: ${theme.neuter[50]};
    }
  `}
`;

export { StyledSwitch, StyledThumb };
