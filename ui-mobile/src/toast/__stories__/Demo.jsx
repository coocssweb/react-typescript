/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-15 19:17:01
 * Copyright © Leedarson. All rights reserved.
 */

import React from 'react';
import { ThemeProvider } from 'styled-components';
import { themeDefault } from '@leedarson/theme';
import { Button } from '../../index';

const Demo = () => {
  const handleToastInfoClick = () => {
    window.$Toast.info('This is message.');
  };
  const handleToastSuccessClick = () => {
    window.$Toast.success('SUCCESS');
  };
  const handleToastFailClick = () => {
    window.$Toast.fail('FAILURE');
  };
  const handleToastLoadingClick = () => {
    window.$Toast.loading();
  };

  return (
    <ThemeProvider theme={themeDefault}>
      <div className="demo">
        <div className="demo-title">Toast</div>
        <div className="demo-box">
          <Button onClick={handleToastInfoClick} type="success">
            $Toast.info
          </Button>
          <div className="demo-split" />
          <Button onClick={handleToastSuccessClick} type="success">
            $Toast.success
          </Button>
          <div className="demo-split" />
          <Button onClick={handleToastFailClick} type="success">
            $Toast.fail
          </Button>
          <div className="demo-split" />
          <Button onClick={handleToastLoadingClick} type="success">
            $Toast.loading
          </Button>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Demo;
