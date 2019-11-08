/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-21 12:08:11
 * Copyright © Leedarson. All rights reserved.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Tabs as RmcTabs } from 'rmc-tabs';
import uiPropTypes from '../propTypes';
import StyledTabs from './StyledTabs';
import TabBar from './TabBar';
import { EMPTY_FUNCTION } from '../constants';

const Tabs = ({ children, tabs, swipeable, direction, onChange, render, expand, prerenderingSiblingsNumber }) => {
  const renderTabBar = receiveProps => (
    <TabBar direction={direction} render={render} expand={expand} {...receiveProps} />
  );

  return (
    <StyledTabs direction={direction}>
      <RmcTabs
        swipeable={swipeable}
        prefixCls={Tabs.prefixCls}
        tabs={tabs}
        onChange={onChange}
        renderTabBar={renderTabBar}
        tabDirection={direction}
        prerenderingSiblingsNumber={prerenderingSiblingsNumber}
      >
        {children}
      </RmcTabs>
    </StyledTabs>
  );
};

Tabs.prefixCls = 'LdsTabs';

Tabs.defaultProps = {
  children: '',
  tabs: [],
  prerenderingSiblingsNumber: false,
  swipeable: false,
  expand: null,
  direction: 'horizontal',
  onChange: EMPTY_FUNCTION,
  render: EMPTY_FUNCTION,
};

Tabs.propTypes = {
  children: PropTypes.node,
  direction: uiPropTypes.direction,
  tabs: PropTypes.arrayOf(PropTypes.object),
  prerenderingSiblingsNumber: PropTypes.bool,
  swipeable: PropTypes.bool,
  expand: PropTypes.node,
  onChange: PropTypes.func,
  render: PropTypes.func,
};

export default Tabs;
