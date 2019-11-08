/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-21 12:07:52
 * Copyright © Leedarson. All rights reserved.
 */

import React, { useState, useRef, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import uiPropTypes from '../propTypes';
import { Drag } from '../gesture';
import { StyledTabBarContent } from './StyledTabBar';
import { EMPTY_FUNCTION } from '../constants';
import TabBarContent from './TabbarContent';

const TabBar = React.memo(
  ({ activeTab, tabs, direction, goToTab, onTabClick, render, expand }) => {
    // 当前 tab dom节点
    const tabBarNode = useRef(null);
    const [currentTabs, setCurrentTabs] = useState(tabs);

    // 手势，位置 & 状态
    const tabItemPositions = useRef([]); // 子元素offset 位置信息[{width, left, height, top}, ...]
    const tabItemHeightRef = useRef(0);
    const canScroll = useRef([0, 0]);
    const [offset, setOffset] = useState([0, 0]); // tabs offset [left, top]
    const [dragging, setDragging] = useState(false);

    // 获取 Layout 位置
    const getOffset = useCallback(index => {
      const { clientWidth, clientHeight } = tabBarNode.current;
      tabItemHeightRef.current = clientHeight;
      const { left, top, width, height } = tabItemPositions.current[index];

      const halfClientWidth = clientWidth / 2;
      let finalLeft = halfClientWidth - left - width / 2;
      finalLeft = Math.min(finalLeft, 0);
      finalLeft = Math.max(finalLeft, canScroll.current[0]);

      const halfClientHeight = clientHeight / 2;
      let finalTop = halfClientHeight - top - height / 2;
      finalTop = Math.min(finalTop, 0);
      finalTop = Math.max(finalTop, canScroll.current[1]);

      return [finalLeft, finalTop];
    }, []);

    // 初始化，计算可滑动的范围 & 计算当前滑动的激励
    useEffect(() => {
      const initRended = () => {
        setCurrentTabs(tabs);
        const finalOffset = getOffset(activeTab);
        setOffset(finalOffset);

        const { clientWidth, clientHeight, scrollWidth, scrollHeight } = tabBarNode.current;
        canScroll.current = [-scrollWidth + clientWidth, -scrollHeight + clientHeight];
      };

      initRended();
    }, [activeTab, currentTabs, getOffset, tabs]);

    // TabItem 点击
    const handleTabItemClick = useCallback(
      (item, index) => () => {
        if (index === activeTab) {
          return;
        }
        onTabClick(item, index);
        goToTab(index);
      },
      [activeTab, goToTab, onTabClick],
    );

    // 设置子元素的宽度 & offset
    const onSetOffset = useCallback(({ index, width, height, left, top }) => {
      tabItemPositions.current[index] = {
        width,
        height,
        left,
        top,
      };
    }, []);

    const handleDragStart = useCallback(() => {
      setDragging(true);
    }, []);

    const handleDrag = useCallback(([left, top]) => {
      let finalLeft = Math.min(left, 0);
      finalLeft = Math.max(finalLeft, canScroll.current[0]);

      let finalTop = Math.min(top, 0);
      finalTop = Math.max(finalTop, canScroll.current[1]);
      setOffset([finalLeft, finalTop]);
    }, []);

    const handleDragEnd = useCallback(() => {
      setDragging(false);
    }, []);

    return (
      <StyledTabBarContent className="LdsTabs-tab-bar-content">
        <div style={{ overflow: 'hidden' }}>
          <Drag
            onDrag={handleDrag}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            direction={direction === 'horizontal' ? 'x' : 'y'}
            offset={offset}
            style={{ transition: dragging ? 'none' : 'transform 0.3s cubic-bezier(0.35, 0, 0.25, 1)' }}
          >
            <TabBarContent
              activeTab={activeTab}
              tabs={tabs}
              direction={direction}
              onTabClick={handleTabItemClick}
              forwardedRef={tabBarNode}
              onSetOffset={onSetOffset}
              render={render}
            />
          </Drag>
        </div>
        {expand}
      </StyledTabBarContent>
    );
  },
  (prevProps, nextProps) => {
    return (
      prevProps.activeTab === nextProps.activeTab &&
      prevProps.tabs.length === nextProps.tabs.length &&
      prevProps.fixed === nextProps.fixed
    );
  },
);

TabBar.prefixCls = 'LdsTabs-bar';

TabBar.defaultProps = {
  activeTab: 0,
  direction: 'horizontal',
  tabs: [],
  expand: null,
  goToTab: EMPTY_FUNCTION,
  onTabClick: EMPTY_FUNCTION,
  render: EMPTY_FUNCTION,
};

TabBar.propTypes = {
  activeTab: PropTypes.number,
  expand: PropTypes.node,
  direction: uiPropTypes.direction,
  tabs: PropTypes.arrayOf(PropTypes.object),
  goToTab: PropTypes.func,
  onTabClick: PropTypes.func,
  render: PropTypes.func,
};

export default TabBar;
