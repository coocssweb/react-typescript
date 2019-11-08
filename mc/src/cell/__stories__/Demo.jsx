/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-15 19:17:01
 * Copyright © Leedarson. All rights reserved.
 */

import React from 'react';
import { Cell, CellTitle, CellItem, CellHeader, CellBody, CellFooter, WingBlank, WhiteSpace } from '../../index';
import ImgPlaceholder from './ImgPlaceholder';

const Demo = () => {
  return (
    <div className="demo">
      <div className="demo-title">Cell 布局 </div>
      <WhiteSpace spacing={5} />
      <WingBlank spacing={8}>
        <CellTitle>单行</CellTitle>
        <Cell>
          <CellItem link="/">
            <CellHeader spacing={18}>
              <ImgPlaceholder width={20} />
            </CellHeader>
            <CellBody>标题文字</CellBody>
            <CellFooter arrow>说明文字</CellFooter>
          </CellItem>
        </Cell>

        <WhiteSpace spacing={5} />
        <CellTitle>多行</CellTitle>
        <Cell>
          <CellItem link="/" spacings={[7, 8]}>
            <CellHeader spacing={28}>
              <ImgPlaceholder width={40} />
            </CellHeader>
            <CellBody title="Door / Window sensor">Bedroom </CellBody>
            <CellFooter arrow />
          </CellItem>
        </Cell>

        <WhiteSpace spacing={5} />
        <CellTitle>多个子元素</CellTitle>
        <Cell>
          <CellItem link="/">
            <CellHeader spacing={18}>
              <ImgPlaceholder width={20} />
            </CellHeader>
            <CellBody>标题文字</CellBody>
            <CellFooter arrow>说明文字</CellFooter>
          </CellItem>
          <CellItem link="/">
            <CellHeader spacing={18}>
              <ImgPlaceholder width={20} />
            </CellHeader>
            <CellBody>标题文字</CellBody>
            <CellFooter arrow>说明文字</CellFooter>
          </CellItem>
        </Cell>
      </WingBlank>
    </div>
  );
};

export default Demo;
