/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-21 12:07:52
 * Copyright © Leedarson. All rights reserved.
 */

import React from 'react';
import PropTypes from 'prop-types';
import uiPropTypes from '../propTypes';
import TabBarItem from './TabBarItem';
import { StyledTabBar } from './StyledTabBar';
import { EMPTY_FUNCTION } from '../constants';

const TabbarContent = React.memo(
  ({ activeTab, tabs, direction, onTabClick, render, forwardedRef, onSetOffset }) => {
    return (
      <StyledTabBar ref={forwardedRef} direction={direction} className="LdsTabs-tab-bar-content-inner">
        {tabs.map((tab, index) => (
          <TabBarItem
            key={`${tab.title}-${tab.id}`}
            tab={tab}
            activeTab={activeTab}
            direction={direction}
            index={index}
            onClick={onTabClick(tab, index)}
            onSetOffset={onSetOffset}
            render={render}
          />
        ))}
      </StyledTabBar>
    );
  },
  (prevProps, nextProps) => {
    return prevProps.activeTab === nextProps.activeTab && prevProps.tabs.length === nextProps.tabs.length;
  },
);

TabbarContent.defaultProps = {
  activeTab: 0,
  direction: 'horizontal',
  forwardedRef: null,
  tabs: [],
  onTabClick: EMPTY_FUNCTION,
  render: EMPTY_FUNCTION,
  onSetOffset: EMPTY_FUNCTION,
};

TabbarContent.propTypes = {
  activeTab: PropTypes.number,
  direction: uiPropTypes.direction,
  forwardedRef: PropTypes.oneOfType([PropTypes.object]),
  tabs: PropTypes.arrayOf(PropTypes.object),
  onTabClick: PropTypes.func,
  render: PropTypes.func,
  onSetOffset: PropTypes.func,
};

export default TabbarContent;
