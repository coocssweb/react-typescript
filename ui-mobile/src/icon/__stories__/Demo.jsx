/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-15 19:17:01
 * Copyright © Leedarson. All rights reserved.
 */

import React from 'react';
import { ThemeProvider } from 'styled-components';
import { themeDefault } from '@leedarson/theme';
import { Icon } from '../../index';

const Demo = () => {
  return (
    <ThemeProvider theme={themeDefault}>
      <div className="demo">
        <div className="demo-title">Icon </div>
        <div className="demo-box">
          <Icon type="success" />
          <div className="demo-split" />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Demo;
