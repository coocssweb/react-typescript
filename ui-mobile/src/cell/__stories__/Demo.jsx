/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-15 19:17:01
 * Copyright © Leedarson. All rights reserved.
 */

import React from 'react';
import { ThemeProvider } from 'styled-components';
import { themeDefault } from '@leedarson/theme';
import { Cell, Input } from '../../index';
import ImgPlaceholder from './ImgPlaceholder';
import ButtonCode from './ButtonCode';

const { CellItem, CellHeader, CellBody, CellFooter, CellLabel } = Cell;

const Demo = () => {
  const handleInputChange = () => {};

  return (
    <ThemeProvider theme={themeDefault}>
      <div className="demo">
        <div className="demo-title">Cell </div>
        <div className="demo-box">
          <Cell>
            <CellItem>
              <CellBody>标题文字</CellBody>
            </CellItem>
            <CellItem>
              <CellBody>标题文字</CellBody>
              <CellFooter>说明文字</CellFooter>
            </CellItem>
            <CellItem link="/">
              <CellBody>标题文字</CellBody>
              <CellFooter arrow>说明文字</CellFooter>
            </CellItem>
          </Cell>

          <div className="demo-split" />
          <Cell>
            <CellItem link="/">
              <CellHeader width={36}>
                <ImgPlaceholder />
              </CellHeader>
              <CellBody>标题文字</CellBody>
              <CellFooter arrow>说明文字</CellFooter>
            </CellItem>
            <CellItem link="/">
              <CellHeader width={36}>
                <ImgPlaceholder />
              </CellHeader>
              <CellBody>标题文字</CellBody>
              <CellFooter arrow>说明文字</CellFooter>
            </CellItem>
          </Cell>

          <div className="demo-split" />
          <Cell>
            <CellItem>
              <CellLabel>姓名</CellLabel>
              <CellBody>
                <Input placeholder="请输入姓名" onChange={handleInputChange} />
              </CellBody>
            </CellItem>
            <CellItem noGap>
              <CellLabel>手机号码</CellLabel>
              <CellBody>
                <Input placeholder="请输入手机号" onChange={handleInputChange} />
              </CellBody>
              <CellFooter>
                <ButtonCode>获取验证码</ButtonCode>
              </CellFooter>
            </CellItem>
            <CellItem color={themeDefault.colorDanger}>
              <CellLabel>报错</CellLabel>
              <CellBody>
                <Input placeholder="请输入" value="表单报错" onChange={handleInputChange} />
              </CellBody>
            </CellItem>
          </Cell>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Demo;
