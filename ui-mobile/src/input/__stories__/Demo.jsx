/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-15 19:17:01
 * Copyright © Leedarson. All rights reserved.
 */

import React from 'react';
import { ThemeProvider } from 'styled-components';
import { themeDefault } from '@leedarson/theme';
import { Input, Cell } from '../../index';

const Demo = () => {
  const { CellItem, CellBody, CellLabel } = Cell;
  return (
    <ThemeProvider theme={themeDefault}>
      <div className="demo">
        <div className="demo-title">Input</div>
        <div className="demo-box">
          <Cell>
            <CellItem>
              <CellLabel>姓名</CellLabel>
              <CellBody>
                <Input placeholder="请输入姓名" />
              </CellBody>
            </CellItem>
            <CellItem>
              <CellLabel>密码</CellLabel>
              <CellBody>
                <Input placeholder="请输入密码" type="password" />
              </CellBody>
            </CellItem>
          </Cell>
          <div className="demo-split" />
          <Cell>
            <CellItem>
              <CellBody>
                <Input placeholder="请输入姓名" />
              </CellBody>
            </CellItem>
            <CellItem color={themeDefault.textColorTips}>
              <CellLabel>失效</CellLabel>
              <CellBody>
                <Input value="disabled" disabled />
              </CellBody>
            </CellItem>
            <CellItem>
              <CellLabel>不可编辑</CellLabel>
              <CellBody>
                <Input value="readonly" readOnly />
              </CellBody>
            </CellItem>
          </Cell>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Demo;
