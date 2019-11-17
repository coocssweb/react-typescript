/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-15 19:17:01
 * Copyright © Leedarson. All rights reserved.
 */

import React from 'react';
import { ThemeProvider } from 'styled-components';
import { themeDefault } from '@leedarson/theme';
import { TabPage } from '../../index';

const { TabPanel, TabBar, TabBarItem } = TabPage;

const Demo = () => {
  return (
    <ThemeProvider theme={themeDefault}>
      <TabPage>
        <TabPanel>
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
        </TabPanel>
        <TabBar>
          <TabBarItem active icon="success" link="/">
            微信
          </TabBarItem>
          <TabBarItem icon="success" link="/contact">
            通讯录
          </TabBarItem>
          <TabBarItem icon="success" link="/find">
            发现
          </TabBarItem>
          <TabBarItem icon="success" link="/me">
            我
          </TabBarItem>
        </TabBar>
      </TabPage>
    </ThemeProvider>
  );
};

export default Demo;
