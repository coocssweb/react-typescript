/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-15 19:17:01
 * Copyright © Leedarson. All rights reserved.
 */

import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { themeDefault } from '@leedarson/theme';
import { Progress, Button, WingBlank } from '../../index';

const Demo = () => {
  const [percent, setPercent] = useState(30);

  const handlePlusFiveClick = () => {
    if (percent >= 100) {
      return;
    }
    setPercent(percent + 5);
  };

  const handleSubFiveClick = () => {
    if (percent <= 0) {
      return;
    }
    setPercent(percent - 5);
  };

  const style = {
    width: '150px',
    margin: '0 auto',
  };

  return (
    <ThemeProvider theme={themeDefault}>
      <WingBlank size={2}>
        <div className="demo">
          <div className="demo-title">Pop </div>
          <div className="demo-box">
            <Progress percent={percent} />
          </div>
          <div className="demo-box">
            <div style={style}>
              <Progress type="circle" percent={percent} />
            </div>
          </div>

          <Button onClick={handlePlusFiveClick}>加上5</Button>
          <div className="demo-split" />
          <Button onClick={handleSubFiveClick}>减去5</Button>
        </div>
      </WingBlank>
    </ThemeProvider>
  );
};

export default Demo;
