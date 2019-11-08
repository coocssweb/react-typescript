/*
 * @Author: caozhihui@leedarson.com
 * @Date: 2019/8/29
 * Copyright © Leedarson. All rights reserved.
 */

import styled, { css } from 'styled-components';
import { setTopLine } from '../styledUtils';

const StyledList = styled.dl`
  padding-bottom: 100px;
`;

const StyledLetter = styled.dt`
  /* TODO 没有这个这个颜色 考虑是否要找设计变更 */
  background: #dee4ea;
  ${({ theme }) => css`
    color: ${theme.neuter[800]};
    height: ${theme.pxToRem(68)};
    ${theme.h4};
    line-height: ${theme.pxToRem(68)};
    padding-left: ${theme.pxToRem(40)};
  `}
`;

const StyledWarp = styled.dd`
  ${({ theme, active }) => css`
    height: ${theme.pxToRem(88)};
    line-height: ${theme.pxToRem(88)};
    ${theme.body2};
    // TODO 没有这个这个颜色 考虑是否要找设计变更
    background: ${active ? '#D5DCE3' : '#f0f4f8'};
  `}
`;

const StyledCountry = styled.div`
  position: relative;
  z-index: 1;
  &:before {
    // TODO 没有这个这个颜色 考虑是否要找设计变更
    ${setTopLine('#c8c8c8')}
    ${({ showLine }) => css`
      display: ${showLine ? 'block' : 'none'};
    `}
  }

  ${({ theme }) => css`
    margin-left: ${theme.pxToRem(40)};
  `}
`;

const StyledNav = styled.ul`
  position: fixed;
  z-index: 2;
  touch-action: none;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  ${({ theme }) => css`
    top: ${theme.pxToRem(372)};
    right: ${theme.pxToRem(20)};
    color: ${theme.primary.main};
    width: ${theme.pxToRem(60)};
  `};
`;

const StyledNavLetter = styled.li`
  text-align: center;
  border-radius: 100%;
  ${({ theme, active }) => css`
    width: ${theme.pxToRem(24)};
    height: ${theme.pxToRem(24)};
    line-height: ${theme.pxToRem(24)};
    color: ${active ? theme.surface.main : theme.primary.main};
    margin-bottom: ${theme.pxToRem(10)};
    ${theme.overline};
    ${active ? `background:${theme.primary.main}` : ''}
  `}
`;

export { StyledList, StyledLetter, StyledWarp, StyledCountry, StyledNav, StyledNavLetter };
