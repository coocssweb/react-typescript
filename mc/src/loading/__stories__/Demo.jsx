/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-15 19:17:01
 * Copyright © Leedarson. All rights reserved.
 */

import React from 'react';
import { Loading, Grid, GridItem } from '../../index';

const Demo = () => {
  const loadingWrapStyle = {
    padding: '20px 0px 10px 0px',
  };

  const textStyle = {
    textAlign: 'center',
    fontWeight: 700,
    padding: '10px',
  };

  return (
    <div className="demo">
      <div className="demo-title">Loading </div>
      <div className="demo-box">
        <Grid cols={2} border={true}>
          <GridItem>
            <div style={loadingWrapStyle}>
              <Loading type="bubbles" color="primary" />
            </div>
            <p style={textStyle}>bubbles</p>
          </GridItem>
          <GridItem>
            <div style={loadingWrapStyle}>
              <Loading type="spin" color="primary" />
            </div>
            <p style={textStyle}>spin</p>
          </GridItem>
          <GridItem>
            <div style={loadingWrapStyle}>
              <Loading type="spokes" color="primary" />
            </div>
            <p style={textStyle}>spokes</p>
          </GridItem>
          <GridItem>
            <div style={loadingWrapStyle}>
              <Loading type="bars" color="primary" />
            </div>
            <p style={textStyle}>bars</p>
          </GridItem>
        </Grid>
      </div>
    </div>
  );
};

export default Demo;
