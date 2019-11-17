/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-20 12:11:51
 * Copyright © Leedarson. All rights reserved.
 */

import { css, createGlobalStyle } from 'styled-components';
import { setTopLine, fade, styledFade } from '../styled-engine';

const prefixCls = 'LdsModal';

const modal = () => css`
  .${prefixCls} {
    position: relative;
  }
`;

const modalMask = ({ theme }) => css`
  .${prefixCls}-mask {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: ${theme.zIndexMask};
    background-color: ${theme.maskBlack};
  }

  .${prefixCls}-mask-hidden {
    display: none;
  }
`;

const modalWrap = ({ theme }) => css`
  .${prefixCls}-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    overflow: auto;
    outline: 0;
    top: 0;
    right: ${theme.sizeGap}px;
    bottom: 0;
    left: ${theme.sizeGap}px;
    z-index: ${theme.zIndexModal};
  }

  @media screen and (min-width: 768px) {
    .${prefixCls}-wrap {
      right: 25%;
      left: 25%;
    }
  }
`;

const modalContent = ({ theme }) => css`
  .${prefixCls}-content {
    overflow: hidden;
    border-radius: ${theme.sizeRadius}px;
    background-color: ${theme.colorWhite};
    border: 0;
    background-clip: padding-box;
    position: relative;
  }
`;

const modalHeader = ({ theme }) => css`
  .${prefixCls}-header {
    padding: ${theme.sizeGap}px ${theme.sizeGap}px ${theme.sizeGap}px;
  }
`;

const modalTitle = ({ theme }) => css`
  .${prefixCls}-title {
    font-weight: 700;
    font-size: ${theme.sizeFont}px;
    line-height: ${theme.sizeLineHeight};
    color: ${theme.textColorTitle};
    text-align: center;
  }
`;

const modalBody = ({ theme }) => css`
  .${prefixCls}-body {
    height: 100%;
    overflow: auto;
    padding: 0 ${theme.sizeGap}px ${theme.sizeGap}px;
    font-size: ${theme.sizeFontSmall}px;
    color: ${theme.textColorDesc};
    line-height: ${theme.sizeLineHeight};
    word-wrap: break-word;
    word-break: break-all;
  }
`;

const modalFooter = () => css`
  .${prefixCls}-footer {
    position: relative;
    display: flex;
    &:after {
      ${setTopLine()}
    }
  }
`;

const modalClose = ({ theme }) => css`
  .${prefixCls}-close {
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

// modal globalStyle
const StyledModal = createGlobalStyle`
  ${styledFade}

  ${({ theme }) => css`
    ${modal({ theme })}
    ${modalMask({ theme })}
    ${modalWrap({ theme })}
    ${modalContent({ theme })}
    ${modalHeader({ theme })}
    ${modalTitle({ theme })}
    ${modalBody({ theme })}
    ${modalFooter({ theme })}
    ${modalClose({ theme })}
  `}
`;

export const animationName = fade;
export default StyledModal;
