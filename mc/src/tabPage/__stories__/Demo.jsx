/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-15 19:17:01
 * Copyright © Leedarson. All rights reserved.
 */

import React from 'react';
import { TabPage, TabPagePanel, TabPageBar, TabPageBarItem } from '../../index';

const Demo = () => {
  return (
    <TabPage>
      <TabPagePanel>
        这是内容
        <br />
        这是内容
        <br />
        这是内容
        <br />
        这是内容
        <br />
        这是内容
        <br />
      </TabPagePanel>
      <TabPageBar>
        <TabPageBarItem active icon="home" link="/">
          Home
        </TabPageBarItem>
        <TabPageBarItem icon="scene" link="/contact">
          Scene
        </TabPageBarItem>
        <TabPageBarItem icon="security" link="/find">
          Security
        </TabPageBarItem>
        <TabPageBarItem icon="automation" link="/me">
          Automation
        </TabPageBarItem>
      </TabPageBar>
    </TabPage>
  );
};

export default Demo;
