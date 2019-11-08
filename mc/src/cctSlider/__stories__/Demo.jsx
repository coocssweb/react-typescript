/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-15 19:17:01
 * Copyright © Leedarson. All rights reserved.
 */

import React from 'react';
import { WingBlank, WhiteSpace, CctSlider } from '../../index';

const Demo = () => {
  return (
    <div className="demo">
      <div className="demo-title">CctSlider 颜色调整器 </div>
      <div className="demo-box">
        <WingBlank spacing={5}>
          <CctSlider defaultValue={0} min={0} max={5000} />
        </WingBlank>
      </div>
      <WhiteSpace spacing={4} />
      <div className="demo-title">禁用状态 </div>
      <div className="demo-box">
        <WingBlank spacing={5}>
          <CctSlider disabled={true} min={0} max={5000} />
        </WingBlank>
      </div>
    </div>
  );
};

export default Demo;
