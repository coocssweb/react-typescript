/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-20 12:11:51
 * Copyright © Leedarson. All rights reserved.
 */

import styled, { css } from 'styled-components';
import { getColor, getOpacityColor } from '../styledUtils';

const bottomPrefixCls = 'LdsPopBottom';
const topPrefixDown = 'LdsPopTop';
const leftPrefixDown = 'LdsPopLeft';
const rightPrefixDown = 'LdsPopRight';

const pop = () => css`
  .${bottomPrefixCls} {
    position: absolute;
    bottom: 0;
    width: 100%;
  }

  .${topPrefixDown} {
    position: absolute;
    top: 0;
    width: 100%;
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

const popMask = () => css`
  .${bottomPrefixCls}-mask, .${topPrefixDown}-mask, .${leftPrefixDown}-mask, .${rightPrefixDown}-mask {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 5000;
    background: rgba(0, 0, 0, 0.3);
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

const StyledPop = css`
  ${pop()}
  ${popMask()}
  ${popWrap()}
`;

const StyledPopBody = styled.div`
  ${({ theme, fill }) => css`
    background-color: ${getColor(theme, fill)};
  `}
`;

const StyledPopColse = styled.div`
  border: 0;
  padding: 0;
  background-color: transparent;
  outline: none;
  position: absolute;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='24' height='24' viewBox='0 0 24 24'%3E  %3Cdefs%3E    %3Cpath id='33cf2e7b-22e9-42d7-9c56-a9f4a4e03565-a' d='M8 6.943L1.807.75.75 1.807 6.943 8 .75 14.193l1.057 1.057L8 9.057l6.193 6.193 1.057-1.057L9.057 8l6.193-6.193L14.193.75z'/%3E  %3C/defs%3E  %3Cg fill='none' fill-rule='evenodd' transform='translate(-16 -20)'%3E    %3Cpath fill='%23FFF' d='M0 12C0 5.373 5.367 0 12 0h390c6.628 0 12 5.374 12 12v52H0V12z'/%3E    %3Cuse fill='%23000' fill-opacity='.9' transform='translate(20 24)' xlink:href='%2333cf2e7b-22e9-42d7-9c56-a9f4a4e03565-a'/%3E  %3C/g%3E%3C/svg%3E");
  ${({ theme }) => css`
    top: ${theme.sizeGap}px;
    right: ${theme.sizeGap}px;
    height: ${theme.sizeGapLarge}px;
    width: ${theme.sizeGapLarge}px;
  `}
`;

const StyledPopHeader = styled.div`
  ${({ theme }) => css`
    height: ${theme.pxToRem(96)};
    line-height: ${theme.pxToRem(96)};
    ${{ ...theme.body1 }}
    text-align: center;
    color: ${theme.neuter[800]};
  `}
`;

const StyledPopButton = styled.div`
  position: absolute;
  top: 0;
  transition: color 0.2s ease;
  ${({ theme }) => css`
    height: ${theme.pxToRem(96)};
    line-height: ${theme.pxToRem(96)};
    color: ${theme.primary.main};
    &:active {
      color: ${getOpacityColor(theme, 'primary', 0.5)};
    }
  `}
`;

const StyledPopCancel = styled(StyledPopButton)`
  ${({ theme }) => css`
    left: ${theme.pxToRem(32)};
  `}
`;

const StyledPopCofirm = styled(StyledPopButton)`
  ${({ theme }) => css`
    right: ${theme.pxToRem(32)};
  `}
`;

export { StyledPopHeader, StyledPopCancel, StyledPopCofirm, StyledPopColse, StyledPopBody };

export default StyledPop;
