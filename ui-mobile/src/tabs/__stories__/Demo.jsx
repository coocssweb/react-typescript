/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-15 19:17:01
 * Copyright © Leedarson. All rights reserved.
 */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { themeDefault } from '@leedarson/theme';
import { Tabs } from '../../index';

const Demo = () => {
  const tabData = [
    { title: '很长的选项一' },
    { title: '选项二' },
    { title: '很长的选项三' },
    { title: '选项四' },
    { title: '很长的选项五' },
    { title: '选项六' },
    { title: '很长的选项七' },
    { title: '选项八' },
    { title: '很长的选项九' },
  ];

  const handleTabChange = () => {};

  return (
    <ThemeProvider theme={themeDefault}>
      <div className="demo">
        <div className="demo-title">Tabs，触屏请在移动端模式下查看 </div>
        <div className="demo-box">
          <Tabs tabs={tabData} onChange={handleTabChange}>
            <div style={{ padding: '16px' }}>
              <p>single content</p>
              <p>single content</p>
              <p>single content</p>
              <p>single content</p>
            </div>
          </Tabs>
          <div className="demo-split" />
          <div className="demo-title">Tabs 带下划线</div>

          <div className="demo-box">
            <Tabs tabs={tabData} onChange={handleTabChange} underline>
              <div style={{ padding: '16px' }}>
                <p>single content</p>
                <p>single content</p>
                <p>single content</p>
                <p>single content</p>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Demo;
