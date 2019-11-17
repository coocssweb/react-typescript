/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-21 12:08:06
 * Copyright © Leedarson. All rights reserved.
 */

import styled, { css } from 'styled-components';

const prefixCls = 'LdsTabs';

const tabs = css`
  .${prefixCls} {
    overflow: hidden;
  }
`;

const tabBarWrap = css`
  background-color: #fff;
`;

const tabContentWrap = css`
  .${prefixCls}-content-wrap {
    display: flex;
    flex: 1;
    width: 100%;
    height: 100%;
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
    overflow-y: auto;
  }
`;

const noTabbarUnderline = css`
  .${prefixCls}-bar-underline {
    display: none;
  }
`;

const StyledTabs = styled.div`
  ${tabs}
  ${tabBarWrap}
  ${tabContentWrap}
  ${tabContentAnimated}
  ${tabPaneWrap}
  ${({ underline }) => css`
    ${!underline && noTabbarUnderline}
  `}
`;

export default StyledTabs;
