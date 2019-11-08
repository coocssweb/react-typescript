/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-15 19:17:01
 * Copyright © Leedarson. All rights reserved.
 */

import React from 'react';
import { Input, Cell, CellTitle, CellItem, CellHeader, CellBody, WingBlank, WhiteSpace, Icon } from '../../index';

const Demo = () => {
  return (
    <div className="demo">
      <WingBlank spacing={8}>
        <CellTitle>登录框</CellTitle>
        <Cell>
          <CellItem>
            <CellHeader spacing={20}>
              <Icon type="email" />
            </CellHeader>
            <CellBody>
              <Input placeholder="Email" />
            </CellBody>
          </CellItem>
          <CellItem>
            <CellHeader spacing={20}>
              <Icon type="password" />
            </CellHeader>
            <CellBody>
              <Input placeholder="Password" type="password" />
            </CellBody>
          </CellItem>
          <CellItem>
            <CellHeader spacing={20}>
              <Icon type="password" type="password" />
            </CellHeader>
            <CellBody>
              <Input placeholder="Re-enter Password" type="password" />
            </CellBody>
          </CellItem>
        </Cell>

        <WhiteSpace spacing={8} />
        <CellTitle>登录框 clear eye edit</CellTitle>
        <Cell>
          <CellItem>
            <CellHeader spacing={20}>
              <Icon type="email" />
            </CellHeader>
            <CellBody>
              <Input defaultValue="edit" placeholder="Email" edit />
            </CellBody>
          </CellItem>
          <CellItem>
            <CellHeader spacing={20}>
              <Icon type="email" />
            </CellHeader>
            <CellBody>
              <Input defaultValue="clear" placeholder="Email" clear />
            </CellBody>
          </CellItem>
          <CellItem>
            <CellHeader spacing={20}>
              <Icon type="email" />
            </CellHeader>
            <CellBody>
              <Input defaultValue="clear and edit" placeholder="Email" edit clear />
            </CellBody>
          </CellItem>
          <CellItem>
            <CellHeader spacing={20}>
              <Icon type="password" />
            </CellHeader>
            <CellBody>
              <Input placeholder="Password" type="password" eye />
            </CellBody>
          </CellItem>
        </Cell>

        <WhiteSpace spacing={8} />
        <CellTitle>失效状态</CellTitle>
        <Cell>
          <CellItem>
            <CellBody>
              <Input defaultValue="disabled" disabled />
            </CellBody>
          </CellItem>
        </Cell>

        <WhiteSpace spacing={8} />
        <CellTitle>禁用状态</CellTitle>
        <Cell>
          <CellItem>
            <CellBody>
              <Input value="readonly" readOnly />
            </CellBody>
          </CellItem>
        </Cell>
      </WingBlank>
    </div>
  );
};

export default Demo;
