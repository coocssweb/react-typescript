/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-15 19:17:01
 * Copyright © Leedarson. All rights reserved.
 */

import React from 'react';
import { Password, WingBlank } from '../../index';

const Demo = () => {
  return (
    <div className="demo">
      <div className="demo-title">常用按钮</div>
      <div className="demo-box">
        <WingBlank spacing={4}>
          <Password />
        </WingBlank>
      </div>
    </div>
  );
};

export default Demo;
