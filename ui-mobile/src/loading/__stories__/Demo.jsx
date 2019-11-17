/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-15 19:17:01
 * Copyright © Leedarson. All rights reserved.
 */

import React from 'react';
import { ThemeProvider } from 'styled-components';
import { themeDefault } from '@leedarson/theme';
import { Loading, Grids } from '../../index';

const { GridItem } = Grids;

const Demo = () => {
  const loadingWrapStyle = {
    height: '50px',
  };

  const textStyle = {
    textAlign: 'center',
    fontWeight: 700,
  };

  return (
    <ThemeProvider theme={themeDefault}>
      <div className="demo">
        <div className="demo-title">Loading </div>
        <div className="demo-box">
          <Grids cols={2}>
            <GridItem>
              <div style={loadingWrapStyle}>
                <Loading color={themeDefault.colorSuccess} />
              </div>
              <p style={textStyle}>bubbles</p>
            </GridItem>
            <GridItem>
              <div style={loadingWrapStyle}>
                <Loading type="spin" color={themeDefault.colorSuccess} />
              </div>
              <p style={textStyle}>spin</p>
            </GridItem>
            <GridItem>
              <div style={loadingWrapStyle}>
                <Loading type="spokes" color={themeDefault.colorSuccess} />
              </div>
              <p style={textStyle}>spokes</p>
            </GridItem>
            <GridItem>
              <div style={loadingWrapStyle}>
                <Loading type="bars" color={themeDefault.colorSuccess} />
              </div>
              <p style={textStyle}>bars</p>
            </GridItem>
          </Grids>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Demo;
