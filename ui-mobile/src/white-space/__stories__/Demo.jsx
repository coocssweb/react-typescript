/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-15 19:17:01
 * Copyright © Leedarson. All rights reserved.
 */

import React from 'react';
import { ThemeProvider } from 'styled-components';
import { themeDefault } from '@leedarson/theme';
import { WhiteSpace } from '../../index';

const Demo = () => {
  return (
    <ThemeProvider theme={themeDefault}>
      <div className="demo">
        <div className="demo-title">WhiteSpace 上下间隔 </div>
        <div className="demo-box">
          <div className="placeholder">WhiteSpace</div>
          <WhiteSpace size={1} />
          <div className="placeholder">WhiteSpace</div>
          <WhiteSpace size={1} />
          <div className="placeholder">WhiteSpace</div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Demo;
