/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-15 19:17:01
 * Copyright © Leedarson. All rights reserved.
 */

import React from 'react';
import { WingBlank, WhiteSpace } from '../../index';

const Demo = () => {
  return (
    <div className="demo">
      <div className="demo-title">WingBlank 两边间隔 </div>
      <div className="demo-box">
        <WingBlank spacing={0}>
          <div className="placeholder">WingBlank</div>
        </WingBlank>
        <WhiteSpace spacing={4} />
        <WingBlank spacing={4}>
          <div className="placeholder">WingBlank</div>
        </WingBlank>
        <WhiteSpace spacing={4} />
        <WingBlank spacing={8}>
          <div className="placeholder">WingBlank</div>
        </WingBlank>
        <WhiteSpace spacing={4} />
        <WingBlank size={80}>
          <div className="placeholder">WingBlank</div>
        </WingBlank>
      </div>
    </div>
  );
};

export default Demo;
