/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-15 19:17:01
 * Copyright © Leedarson. All rights reserved.
 */
import React from 'react';
import styled, { css } from 'styled-components';
import { Tabs } from '../../index';

const TabBarItem = styled.div`
  white-space: nowrap;
  word-break: keep-all;
  box-sizing: border-box;

  ${({ active, theme }) => css`
    color: ${theme.primary.main};
    border-radius: ${theme.space(7)};
    padding: ${theme.space(3)} ${theme.space(7)};
    ${{ ...theme.body1 }}
    ${active &&
      css`
        color: rgba(255, 255, 255, 0.6);
        background-color: #000;
      `};
  `}
`;

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

  const tabData2 = [{ title: '很长的选项一' }, { title: '选项二' }];

  const handleTabChange = () => {};

  return (
    <div className="demo">
      <div className="demo-title">默认格式 </div>
      <div className="demo-box">
        <Tabs tabs={tabData2} onChange={handleTabChange}>
          <div style={{ padding: '16px' }}>
            <p>single content</p>
            <p>single content</p>
            <p>single content</p>
            <p>single content</p>
          </div>
        </Tabs>
        <div className="demo-split" />
        <div className="demo-title">自定义Tab</div>

        <div className="demo-box">
          <Tabs
            tabs={tabData}
            onChange={handleTabChange}
            render={(tab, active) => <TabBarItem active={active}>{tab.title}</TabBarItem>}
          >
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
  );
};

export default Demo;
