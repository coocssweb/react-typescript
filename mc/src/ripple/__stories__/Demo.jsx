/*
 * @Author: yuxinyu@leedarson.com
 * @Date: 2019-09-12 15:33:50
 * Copyright © Leedarson. All rights reserved.
 */
import React from 'react';
import { Ripple, Box, WhiteSpace, Typography, Square } from '../../index';

const Demo = () => {
  return (
    <div className="demo">
      <div className="demo-title">Wave</div>
      <WhiteSpace spacing={10}></WhiteSpace>
      <Ripple type="wave" fill="#FF5858" />
      <WhiteSpace spacing={10}></WhiteSpace>

      <div className="demo-title">Radar</div>
      <WhiteSpace spacing={10}></WhiteSpace>
      <Ripple type="radar" fill="#376CC2">
        <Square align="center" fill="transparent">
          <Typography color="primary" variant="h5">
            Radar
          </Typography>
        </Square>
      </Ripple>
    </div>
  );
};

export default Demo;
