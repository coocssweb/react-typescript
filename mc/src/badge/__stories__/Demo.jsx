/*
 * @Author: yuxinyu@leedarson.com
 * @Date: 2019-08-26 10:18:21
 * Copyright © Leedarson. All rights reserved.
 */

import React from 'react';
import { Button, Badge, WingBlank, WhiteSpace } from '../../index';

const Demo = () => {
  return (
    <div className="demo">
      <div className="demo-title">Badge</div>
      <div className="demo-box">
        <WingBlank spacing={4}>
          <Badge count={9}>
            <Button type="info">默认样式</Button>
          </Badge>
          <WhiteSpace spacing={8} />
          <Badge count={999} max={99}>
            <Button type="info">最大值</Button>
          </Badge>
          <WhiteSpace spacing={8} />
          <Badge size="small" count={9}>
            <Button type="info">Dot 样式</Button>
          </Badge>
        </WingBlank>
      </div>
    </div>
  );
};

export default Demo;
