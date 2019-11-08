/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-15 19:17:01
 * Copyright © Leedarson. All rights reserved.
 */

import React from 'react';
import { Switch } from '../../index';

const Demo = () => {
  return (
    <div className="demo">
      <div className="demo-title">Switch 默认状态</div>
      <div className="demo-box">
        <Switch
          onChange={checked => {
            console.log(checked);
          }}
        />
      </div>
      <div className="demo-title">Switch 关 禁用状态</div>
      <div className="demo-box">
        <Switch disabled={true} />
      </div>
      <div className="demo-title">Switch 开 禁用状态</div>
      <div className="demo-box">
        <Switch disabled={true} checked={true} />
      </div>
    </div>
  );
};

export default Demo;
