/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-20 12:11:51
 * Copyright © Leedarson. All rights reserved.
 */

import styled, { css, createGlobalStyle } from 'styled-components';
import { setTopLine } from '../styledUtils';

const bottomPrefixCls = 'LdsPopBottom';
const topPrefixDown = 'LdsPopTop';
const leftPrefixDown = 'LdsPopLeft';
const rightPrefixDown = 'LdsPopRight';

const pop = () => css`
  .${bottomPrefixCls} {
    position: absolute;
    bottom: 0;
    width: 100%;
    left: 0;
    right: 0;
  }

  .${topPrefixDown} {
    position: absolute;
    top: 0;
    width: 100%;
    left: 0;
    right: 0;
  }

  .${leftPrefixDown} {
    position: absolute;
    left: 0;
    height: 100%;

    &-content {
      height: 100%;
    }
  }

  .${rightPrefixDown} {
    position: absolute;
    right: 0;
    height: 100%;

    &-content {
      height: 100%;
    }
  }
`;

const popMask = ({ theme }) => css`
  .${bottomPrefixCls}-mask, .${topPrefixDown}-mask, .${leftPrefixDown}-mask, .${rightPrefixDown}-mask {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 5000;
    background-color: ${theme.mask[40]};
  }

  .${bottomPrefixCls}-mask-hidden,
    .${topPrefixDown}-mask-hidden,
    .${leftPrefixDown}-mask-hidden,
    .${rightPrefixDown}-mask-hidden {
    display: none;
  }
`;

const popWrap = () => css`
  .${bottomPrefixCls}-wrap, .${topPrefixDown}-wrap, .${leftPrefixDown}-wrap, .${rightPrefixDown}-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    overflow: auto;
    outline: 0;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 5001;
  }
`;

const popContent = ({ theme }) => css`
  .${bottomPrefixCls}-content, .${topPrefixDown}-content, .${leftPrefixDown}-content, .${rightPrefixDown}-content {
    overflow: hidden;
    background: ${theme.surface.main};
    border: 0;
    background-clip: padding-box;
    position: relative;
  }
`;

const popHeader = ({ theme }) => css`
  .${bottomPrefixCls}-header, .${topPrefixDown}-header, .${leftPrefixDown}-header, .${rightPrefixDown}-header {
    padding: ${theme.space(8)} 0 0 0;
  }
`;

const popTitle = ({ theme }) => css`
  .${bottomPrefixCls}-title, .${topPrefixDown}-title, .${leftPrefixDown}-title, .${rightPrefixDown}-title {
    color: ${theme.neuter[800]};
    line-height: ${theme.sizeLineHeight};
    text-align: center;
    ${{ ...theme.subtitle1 }}
  }
`;

const popBody = ({ theme }) => css`
  .${bottomPrefixCls}-body, .${topPrefixDown}-body, .${leftPrefixDown}-body, .${rightPrefixDown}-body {
    height: 100%;
    overflow: auto;
    color: ${theme.neuter[800]};
    line-height: ${theme.sizeLineHeight};
    line-height: 1.31;
    word-wrap: break-word;
    word-break: break-all;
    ${{ ...theme.caption }}
  }
`;

const popFooter = () => css`
  .${bottomPrefixCls}-footer, .${topPrefixDown}-footer, .${leftPrefixDown}-close, .${rightPrefixDown}-close {
    position: relative;
    display: flex;
    &:after {
      ${setTopLine()}
    }
  }
`;

const popClose = ({ theme }) => css`
  .${bottomPrefixCls}-close, .${topPrefixDown}-close, .${leftPrefixDown}-close, .${rightPrefixDown}-close {
    border: 0;
    padding: 0;
    background-color: transparent;
    outline: none;
    position: absolute;
    top: ${theme.sizeGap}px;
    right: ${theme.sizeGap}px;
    height: ${theme.sizeGapLarge}px;
    width: ${theme.sizeGapLarge}px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='24' height='24' viewBox='0 0 24 24'%3E  %3Cdefs%3E    %3Cpath id='33cf2e7b-22e9-42d7-9c56-a9f4a4e03565-a' d='M8 6.943L1.807.75.75 1.807 6.943 8 .75 14.193l1.057 1.057L8 9.057l6.193 6.193 1.057-1.057L9.057 8l6.193-6.193L14.193.75z'/%3E  %3C/defs%3E  %3Cg fill='none' fill-rule='evenodd' transform='translate(-16 -20)'%3E    %3Cpath fill='%23FFF' d='M0 12C0 5.373 5.367 0 12 0h390c6.628 0 12 5.374 12 12v52H0V12z'/%3E    %3Cuse fill='%23000' fill-opacity='.9' transform='translate(20 24)' xlink:href='%2333cf2e7b-22e9-42d7-9c56-a9f4a4e03565-a'/%3E  %3C/g%3E%3C/svg%3E");
  }
`;

const StyledPop = createGlobalStyle`
  ${({ theme }) => css`
    ${pop({ theme })}
    ${popMask({ theme })}
    ${popWrap({ theme })}
    ${popContent({ theme })}
    ${popHeader({ theme })}
    ${popTitle({ theme })}
    ${popBody({ theme })}
    ${popFooter({ theme })}
    ${popClose({ theme })}
  `}
`;

export const StyledPopBody = styled.div`
  padding: 0;
`;

export default StyledPop;
