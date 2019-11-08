/*
 * @Author: lixinxiang@leedarson.com
 * @Date: 2019-09-16 20:28:43
 * Copyright © Leedarson. All rights reserved.
 */

import styled, { css } from 'styled-components';

const prefixCls = 'LdsSwipeOut';

const swipeOut = css`
  .${prefixCls} {
    overflow: hidden;
    position: relative;
  }
`;

const swipeOutCover = css`
  .${prefixCls}-cover {
    position: absolute;
    z-index: 2;
    background: transparent;
    height: 100%;
    width: 100%;
    top: 0;
    display: none;
  }
`;

const swipeOutActions = css`
  .${prefixCls}-actions {
    transition: all 250ms;
    position: absolute;
    top: 0;
    bottom: 0;
    display: flex;
    overflow: hidden;
    white-space: nowrap;
  }

  .${prefixCls}-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    ${({ theme }) =>
      css`
        background: ${theme.primary.main};
        color: ${theme.surface.main};
      `}
  }

  .${prefixCls}-actions-left {
    left: 0;
  }

  .${prefixCls}-actions-right {
    right: 0;
    .${prefixCls}-btn {
      ${({ theme }) =>
        css`
          background: ${theme.error.main};
          color: ${theme.surface.main};
        `}
    }
  }

  .${prefixCls}-btn-text {
    ${({ theme }) =>
      css`
        padding: ${theme.pxToRem(16)};
      `}
  }
`;

const swipeOutContent = css`
  .${prefixCls}-content {
    transition: all 250ms;
    position: relative;
    background-color: #fff;
  }
`;

const StyledSwipeOut = styled.div`
  ${swipeOut}
  ${swipeOutCover}
  ${swipeOutActions}
  ${swipeOutContent}
`;

export default StyledSwipeOut;
