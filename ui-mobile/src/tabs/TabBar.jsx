/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/forbid-prop-types */
/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-21 12:07:52
 * Copyright © Leedarson. All rights reserved.
 */

import React, { useState, useRef, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import Gesture from '../gesture';
import { StyledTabBar, StyledTabBarItem, StyledTabBarActiveLine } from './StyledTabBar';

const { Drag } = Gesture;

const TabBarItem = ({ index, active, tab, onClick, onSetOffset }) => {
  const tabBarItemNode = useRef(null);
  useEffect(() => {
    if (tabBarItemNode.current) {
      const { offsetLeft, clientWidth } = tabBarItemNode.current;
      onSetOffset(index, clientWidth, offsetLeft);
    }
  }, [index, onSetOffset, tabBarItemNode]);

  return (
    <StyledTabBarItem active={active} onClick={onClick} ref={tabBarItemNode}>
      {tab.title}
    </StyledTabBarItem>
  );
};

const DefaultTabBar = props => {
  const { activeTab, tabs, goToTab, onTabClick } = props;
  // 当前 tab dom节点
  const tabBarNode = useRef(null);
  // 手势，位置 & 状态
  const tabItemPositions = useRef([]); // 子元素offset 位置信息[{width, left}, ...]
  const canScrollLeft = useRef(0);
  const [offset, setOffset] = useState(0); // tabs offset
  const [dragging, setDragging] = useState(false);
  const [rended, setRended] = useState(false);

  // 获取 Layout 位置
  const getLeft = useCallback(index => {
    const { clientWidth } = tabBarNode.current;
    const halfClientWidth = clientWidth / 2;
    const { left, width } = tabItemPositions.current[index];
    let finalLeft = halfClientWidth - left - width / 2;
    finalLeft = Math.min(finalLeft, 0);
    finalLeft = Math.max(finalLeft, canScrollLeft.current);

    return finalLeft;
  }, []);

  // 计算underline位置
  useEffect(() => {
    const left = getLeft(activeTab);
    setOffset(left);
    setRended(true);
    const { clientWidth, scrollWidth } = tabBarNode.current;
    canScrollLeft.current = -scrollWidth + clientWidth;
  }, [activeTab, getLeft]);

  // TabItem 点击
  const handleTabItemClick = (item, index) => () => {
    if (index === activeTab) {
      return;
    }
    onTabClick(item, index);
    goToTab(index);
  };

  // 设置子元素的宽度 & offset
  const onSetOffset = useCallback((index, width, left) => {
    tabItemPositions.current[index] = {
      width,
      left,
    };
  }, []);

  const handleDragStart = useCallback(() => {
    setDragging(true);
  }, []);

  const handleDrag = useCallback(([left, top]) => {
    let finalLeft = Math.min(left, 0);
    finalLeft = Math.max(finalLeft, canScrollLeft.current);
    setOffset(finalLeft);
  }, []);

  const handleDragEnd = useCallback(() => {
    setDragging(false);
  }, []);

  return (
    <Drag
      onDrag={handleDrag}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      direction="x"
      offset={[offset, 0]}
      style={{ transition: dragging ? 'none' : 'transform 0.3s cubic-bezier(0.35, 0, 0.25, 1)' }}
    >
      <StyledTabBar ref={tabBarNode}>
        {tabs.map((tab, index) => (
          <TabBarItem
            tab={tab}
            active={activeTab === index}
            key={tab.key}
            index={index}
            onClick={handleTabItemClick(tab, index)}
            onSetOffset={onSetOffset}
          />
        ))}
        {rended ? (
          <StyledTabBarActiveLine
            className={`${DefaultTabBar.prefixCls}-underline`}
            offset={tabItemPositions.current[activeTab].left}
            width={tabItemPositions.current[activeTab].width}
          />
        ) : null}
      </StyledTabBar>
    </Drag>
  );
};

DefaultTabBar.prefixCls = 'LdsTabs-bar';
DefaultTabBar.defaultProps = {
  activeTab: 0,
  tabs: [],
  goToTab: () => {},
  onTabClick: () => {},
};
DefaultTabBar.propTypes = {
  activeTab: PropTypes.number,
  tabs: PropTypes.array,
  goToTab: PropTypes.func,
  onTabClick: PropTypes.func,
};

export default DefaultTabBar;
