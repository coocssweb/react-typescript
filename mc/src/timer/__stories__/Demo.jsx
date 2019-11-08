/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-15 19:17:01
 * Copyright © Leedarson. All rights reserved.
 */

import React from 'react';
import { Timer } from '../../index';

const Demo = () => {
  return (
    <div className="demo">
      <div className="demo-title">Timer倒计时 </div>
      <div className="demo-box">
        <Timer countdown={12} render={value => value} />
      </div>
      <div className="demo-title">Timer计时 </div>
      <div className="demo-box">
        <Timer countdown={3000} type="timer" format="mm:ss" render={value => value} />
      </div>

      <div className="demo-title">自定义格式 </div>
      <div className="demo-box">
        <Timer countdown={3000} format="" render={value => value.join(',')} />
      </div>
    </div>
  );
};

export default Demo;
