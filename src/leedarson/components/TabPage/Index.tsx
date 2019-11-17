/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-22 11:29:01
 * Copyright © Leedarson. All rights reserved.
 */

import * as React from 'react';
import * as PropTypes from 'prop-types';
import TabPage from './TabPage';
import TabPanel from './TabPanel';
import TabBar from './TabBar';
import TabBarItem from './TabBarItem';


const Index = ({ children }) => {
  return <TabPage>
  <TabPanel>
   {
       children
   }
  </TabPanel>
  <TabBar>
    <TabBarItem active icon="success" link="/" >
      微信
    </TabBarItem>
    <TabBarItem icon="success" link="/list">
      通讯录
    </TabBarItem>
    <TabBarItem icon="success" link="/me">
      我
    </TabBarItem>
  </TabBar>
</TabPage>;
};

Index.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Index;
