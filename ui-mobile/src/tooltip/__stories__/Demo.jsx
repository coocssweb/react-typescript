/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-15 19:17:01
 * Copyright © Leedarson. All rights reserved.
 */

import React from 'react';
import { ThemeProvider } from 'styled-components';
import { themeDefault } from '@leedarson/theme';
import { Tooltip, WingBlank } from '../../index';

const Demo = () => {
  return (
    <ThemeProvider theme={themeDefault}>
      <div className="demo">
        <WingBlank size={5}>
          <div className="demo-title">Tooltip Top</div>
          <div className="demo-box">
            <Tooltip value="I'm a tooltip" trigger="click">
              <div style={{ height: 100, width: 100, border: '1px solid red' }}>trigger</div>
            </Tooltip>
          </div>

          <div className="demo-title">Tooltip Bottom</div>
          <div className="demo-box">
            <Tooltip value="I'm a tooltip" trigger="click" placement="bottom">
              <div style={{ height: 100, width: 100, border: '1px solid red' }}>trigger</div>
            </Tooltip>
          </div>
        </WingBlank>
      </div>
    </ThemeProvider>
  );
};

export default Demo;
