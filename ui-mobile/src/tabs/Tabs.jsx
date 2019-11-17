/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-21 12:08:11
 * Copyright © Leedarson. All rights reserved.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Tabs as RmcTabs } from 'rmc-tabs';
import StyledTabs from './StyledTabs';
import DefaultTabBar from './TabBar';

const Tabs = ({ children, tabs, underline, onChange, renderTabBar }) => {
  return (
    <StyledTabs underline={underline}>
      <RmcTabs prefixCls={Tabs.prefixCls} tabs={tabs} onChange={onChange} renderTabBar={renderTabBar}>
        {children}
      </RmcTabs>
    </StyledTabs>
  );
};

Tabs.prefixCls = 'LdsTabs';

Tabs.defaultProps = {
  onChange: () => {},
  underline: false,
  renderTabBar: props => <DefaultTabBar {...props} />,
};

Tabs.propTypes = {
  children: PropTypes.node.isRequired,
  tabs: PropTypes.arrayOf(PropTypes.object).isRequired,
  underline: PropTypes.bool,
  onChange: PropTypes.func,
  renderTabBar: PropTypes.func,
};

export default Tabs;
