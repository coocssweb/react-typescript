/*
 * @Author: yuxinyu@leedarson.com
 * @Date: 2019-08-23 10:48:10
 * Copyright © Leedarson. All rights reserved.
 */

import styled, { css } from 'styled-components';
import { formatUnits } from '../styledUtils';

const StyledEmpty = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  align-items: center;
  text-align: center;

  ${({ theme, margin }) => css`
    margin: ${formatUnits(margin, theme.pxToRem)};
  `}
`;

const StyledEmptyWrap = styled.div`
  margin: 0 auto;
`;

const StyledEmptyDesc = styled.div`
  line-height: 1.5;

  ${({ theme }) => css`
    font-size: ${theme.pxToRem(32)};
    color: ${theme.neuter[700]};
  `}
`;

const StyledEmptyIcon = styled.div`
  display: block;
  margin: 0 auto;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  ${({ theme, icon }) => css`
    width: ${theme.pxToRem(184)};
    height: ${theme.pxToRem(184)};
    background-image: url(${theme.empty[icon]});
  `}
`;

export { StyledEmpty, StyledEmptyWrap, StyledEmptyDesc, StyledEmptyIcon };
