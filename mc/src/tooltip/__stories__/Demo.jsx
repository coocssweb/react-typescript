/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-15 19:17:01
 * Copyright © Leedarson. All rights reserved.
 */

import React from 'react';
import { Tooltip, WingBlank, Button } from '../../index';

const Demo = () => {
  return (
    <div className="demo">
      <div className="demo-title">Tooltip </div>
      <WingBlank spacing={5}>
        <div className="demo-box">
          <Tooltip value="I'm a tooltip" trigger="click">
            <Button type="success">Top</Button>
          </Tooltip>
        </div>
      </WingBlank>
      <div className="demo-title">Tooltip </div>
      <WingBlank spacing={5}>
        <div className="demo-box">
          <Tooltip value="I'm a tooltip" trigger="click" placement="bottom">
            <Button type="success">Bottom</Button>
          </Tooltip>
        </div>
      </WingBlank>
    </div>
  );
};

export default Demo;
