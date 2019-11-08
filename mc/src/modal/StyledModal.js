/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-20 12:11:51
 * Copyright © Leedarson. All rights reserved.
 */

import { css, createGlobalStyle } from 'styled-components';
import { setTopLine } from '../styledUtils';

const prefixCls = 'LdsModal';

const modal = () => css`
  .${prefixCls} {
    position: relative;
    z-index: 999999999;
  }
`;

const modalMask = ({ theme }) => css`
  .${prefixCls}-mask {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 5002;
    background-color: ${theme.mask[40]};
  }

  .${prefixCls}-mask-hidden {
    display: none;
  }
`;

const modalWrap = ({ theme, size }) => css`
  .${prefixCls}-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    overflow: auto;
    outline: 0;
    top: 0;
    right: ${theme.space(25)};
    bottom: 0;
    left: ${theme.space(25)};
    z-index: 5002;
    ${size === 'large' &&
      css`
        right: ${theme.space(15)};
        left: ${theme.space(15)};
      `}
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
    min-width: ${theme.pxToRem(500)};
    border-radius: ${theme.pxToRem(16)};
    background-color: ${theme.surface.main};
    border: 0;
    background-clip: padding-box;
    position: relative;
  }
`;

const modalHeader = ({ theme }) => css`
  .${prefixCls}-header {
    padding: ${theme.space(8)} 0 0 0;
  }
`;

const modalTitle = ({ theme }) => css`
  .${prefixCls}-title {
    ${{ ...theme.subtitle1 }}
    color: ${theme.neuter[800]};
    text-align: center;
  }
`;

const modalBody = ({ theme, size }) => css`
  .${prefixCls}-body {
    height: 100%;
    padding: ${theme.space(6)} ${theme.space(8)};
    overflow: auto;
    ${{ ...theme.caption }}
    color: ${theme.neuter[800]};
    line-height: 1.31;
    word-wrap: break-word;
    word-break: break-all;
    ${size === 'large' &&
      css`
        padding: 0;
      `}
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
  ${({ theme, size }) => css`
    ${modal({ theme })}
    ${modalMask({ theme })}
    ${modalWrap({ theme, size })}
    ${modalContent({ theme })}
    ${modalHeader({ theme })}
    ${modalTitle({ theme })}
    ${modalBody({ theme, size })}
    ${modalFooter({ theme })}
    ${modalClose({ theme })}
  `}
`;

export default StyledModal;
