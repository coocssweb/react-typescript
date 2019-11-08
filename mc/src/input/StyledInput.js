/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-21 12:06:00
 * Copyright © Leedarson. All rights reserved.
 */

import styled, { css } from 'styled-components';

const StyleInput = styled.input`
  width: 100%;
  border: 0;
  outline: 0;
  appearance: none;
  background-color: transparent;
  color: inherit;
  height: ${({ theme }) => theme.pxToRem(48)};
  line-height: 1.4;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    appearance: none;
    margin: 0;
  }

  &:-webkit-autofill {
    ${({ theme }) => css`
      -webkit-box-shadow: 0 0 0px 1000px ${theme.surface.main} inset;
    `}
  }

  ${({ readOnly, disabled, type, theme }) => css`
    ${{ ...theme.body2 }}
    ${disabled &&
      css`
        color: ${theme.neuter[500]};
      `}

    ${readOnly &&
      css`
        color: ${theme.neuter[700]};
      `}
    
    ${type === 'title' &&
      css`
        font-size: ${theme.pxToRem(34)};
        font-weight: 500;
      `}
  `}
`;
export default StyleInput;
