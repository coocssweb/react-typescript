/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-15 19:17:01
 * Copyright © Leedarson. All rights reserved.
 */

import React from 'react';
import { ThemeProvider } from 'styled-components';
import { themeDefault } from '@leedarson/theme';
import { Slider, WingBlank } from '../../index';

const Demo = () => {
  const handleSliderChange = evt => {
    console.log(evt);
  };

  return (
    <ThemeProvider theme={themeDefault}>
      <div className="demo">
        <WingBlank size={5}>
          <div className="demo-title">Slider</div>
          <div className="demo-box">
            <Slider onChange={handleSliderChange} />
          </div>

          <div className="demo-title">Slider Tooltip</div>
          <div className="demo-box">
            <Slider onChange={handleSliderChange} tooltip />
          </div>

          <div className="demo-title">Slider disabled</div>
          <div className="demo-box">
            <Slider disabled defaultValue={10} onChange={handleSliderChange} />
          </div>
        </WingBlank>
      </div>
    </ThemeProvider>
  );
};

export default Demo;
