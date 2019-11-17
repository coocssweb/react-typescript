/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-15 19:17:01
 * Copyright © Leedarson. All rights reserved.
 */

import React from 'react';
import { ThemeProvider } from 'styled-components';
import { themeDefault } from '@leedarson/theme';
import { WingBlank } from '../../index';

const Demo = () => {
  return (
    <ThemeProvider theme={themeDefault}>
      <div className="demo">
        <div className="demo-title">WingBlank 两边间隔 </div>
        <div className="demo-box">
          <WingBlank size={1}>
            <div className="placeholder">WingBlank</div>
          </WingBlank>
          <div className="demo-split" />
          <WingBlank size={2}>
            <div className="placeholder">WingBlank</div>
          </WingBlank>
          <div className="demo-split" />
          <WingBlank size={3}>
            <div className="placeholder">WingBlank</div>
          </WingBlank>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Demo;
