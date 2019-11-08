/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-21 12:08:06
 * Copyright © Leedarson. All rights reserved.
 */

import styled, { css } from 'styled-components';

const prefixCls = 'LdsTabs';

const tabContentWrap = css`
  .${prefixCls}-content-wrap {
    display: block;
  }
`;

const tabs = css`
  .${prefixCls}-horizontal {
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;

    .${prefixCls}-content-wrap {
      display: flex;
      flex-grow: 1;
      min-height: 0;
    }

    .${prefixCls}-pane-wrap-inactive {
      height: 0;
    }
  }
`;

const tabContentAnimated = css`
  .${prefixCls}-content-wrap-animated {
    transition: transform 0.3s cubic-bezier(0.35, 0, 0.25, 1);
    will-change: transform;
  }
`;

const tabPaneWrap = css`
  .${prefixCls}-pane-wrap {
    width: 100%;
    flex-shrink: 0;
  }
  .${prefixCls}-vertical .${prefixCls}-pane-wrap-inactive {
    height: 0px;
  }
`;

const tabsVertical = css`
  .${prefixCls}-vertical {
    display: flex;
    flex: 1;
    width: 100%;
    height: 100%;
    flex-direction: row;
    overflow: hidden;

    .${prefixCls}-content-wrap {
      flex-direction: column;
      width: 100%;
    }

    .${prefixCls}-tab-bar-wrap {
      height: 100%;
    }

    .${prefixCls}-pane-wrap {
      height: 100%;
    }

    .${prefixCls}-pane-wrap-active {
      overflow: auto;
    }

    .${prefixCls}-pane-wrap-inactive {
      overflow: hidden;
    }
  }
`;

const StyledTabs = styled.div`
  flex:1;
  ${({ direction }) => css`
    ${direction === 'horizontal' &&
      css`
        flex-grow: 1;
        min-height: 0;
      `}
  `}
  ${tabs}
  ${tabContentWrap}
  ${tabContentAnimated}
  ${tabPaneWrap}
  ${tabsVertical}
`;

export default StyledTabs;
