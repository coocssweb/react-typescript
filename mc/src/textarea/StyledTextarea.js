/*
 * @Author: yuxinyu@leedarson.com
 * @Date: 2019-08-22 17:10:40
 * Copyright © Leedarson. All rights reserved.
 */

import styled, { css } from 'styled-components';

const textareaCounter = ({ theme }) => css`
  .Textarea-counter {
    position: absolute;
    bottom: 0;
    right: 0;
    color: ${theme.neuter[600]};
    font-size: ${theme.pxToRem(28)};
    &.warn {
      color: ${theme.warn.main};
    }
  }
`;

const StyledTextareaWrapper = styled.div`
  width: 100%;
  position: relative;
  ${({ theme }) => css`
    ${textareaCounter({ theme })}
  `}
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  border: 0;
  outline: 0;
  resize: none;
  appearance: none;
  background-color: transparent;
  font-size: inherit;
  color: inherit;
  ${({ theme, size }) => css`
    font-size: ${theme.pxToRem(size)};
  `}
`;

export { StyledTextarea, StyledTextareaWrapper };
