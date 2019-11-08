/*
 * @Author: lixinxiang@leedarson.com
 * @Date: 2019-09-16 20:27:02
 * Copyright © Leedarson. All rights reserved.
 */

import React from 'react';
import { SwipeOut, Cell, CellBody, CellItem, CellFooter, Button } from '../../index';

const Demo = () => {
  return (
    <div className="demo">
      <div className="demo-title">基础用法</div>
      <SwipeOut
        left={[
          {
            text: 'click',
          },
        ]}
        right={[
          {
            text: 'Remove',
          },
        ]}
      >
        <Cell>
          <CellItem>
            <CellBody>标题文字</CellBody>
            <CellFooter arrow>说明文字</CellFooter>
          </CellItem>
        </Cell>
      </SwipeOut>
    </div>
  );
};

export default Demo;
