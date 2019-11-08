/* eslint-disable  */

/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-21 12:07:52
 * Copyright © Leedarson. All rights reserved.
 */

import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import uiPropTypes from '../propTypes';
import { StyledTabBarItem, StyledVerticalTabBarItem } from './StyledTabBar';
import { EMPTY_FUNCTION } from '../constants';

const TabBarItem = React.memo(({ index, activeTab, direction, tab, onClick, onSetOffset, render }) => {
  const tabBarItemNode = useRef(null);

  useEffect(() => {
    if (tabBarItemNode.current) {
      const { offsetLeft, offsetTop, clientWidth, clientHeight } = tabBarItemNode.current;

      onSetOffset({
        index,
        width: clientWidth,
        left: offsetLeft,
        top: offsetTop,
        height: clientHeight,
      });
    }
  }, [index, onSetOffset, tabBarItemNode]);

  if (render !== EMPTY_FUNCTION) {
    return (
      <div role="button" onClick={onClick} ref={tabBarItemNode}>
        {render(tab, activeTab === index)}
      </div>
    );
  }

  if (direction === 'vertical') {
    return (
      <StyledVerticalTabBarItem active={activeTab === index} role="button" onClick={onClick} ref={tabBarItemNode}>
        {tab.title}
      </StyledVerticalTabBarItem>
    );
  }

  return (
    <StyledTabBarItem active={activeTab === index} role="button" onClick={onClick} ref={tabBarItemNode}>
      {tab.title}
    </StyledTabBarItem>
  );
});

TabBarItem.defaultProps = {
  index: 0,
  activeTab: 0,
  direction: 'horizontal',
  tab: EMPTY_FUNCTION,
  onClick: EMPTY_FUNCTION,
  onSetOffset: EMPTY_FUNCTION,
  render: EMPTY_FUNCTION,
};

TabBarItem.propTypes = {
  index: PropTypes.number,
  activeTab: PropTypes.number,
  direction: uiPropTypes.direction,
  tab: PropTypes.oneOfType([PropTypes.object]),
  onClick: PropTypes.func,
  onSetOffset: PropTypes.func,
  render: PropTypes.func,
};

export default TabBarItem;
