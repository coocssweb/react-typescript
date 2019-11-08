/*
 * @Author: yuxinyu@leedarson.com
 * @Date: 2019-08-22 18:17:21
 * Copyright © Leedarson. All rights reserved.
 */

import React from 'react';
import { Textarea, Cell, CellItem, CellBody } from '../../index';

const Demo = () => {
  return (
    <div className="demo">
      <div className="demo-title">Textarea</div>
      <div className="demo-box">
        <Cell>
          <CellItem>
            <CellBody>
              <Textarea placeholder="请输入内容" />
            </CellBody>
          </CellItem>
        </Cell>
      </div>
    </div>
  );
};

export default Demo;
