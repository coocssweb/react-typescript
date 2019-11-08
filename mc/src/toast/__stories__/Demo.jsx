/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-15 19:17:01
 * Copyright © Leedarson. All rights reserved.
 */

import React from 'react';
import { withTheme } from 'styled-components';
import { Button, WhiteSpace, WingBlank, Toast } from '../../index';

const Demo = ({ theme }) => {
  const handleToastInfoClick = () => {
    Toast.info('Password or email address is incorrect.');
  };
  const handleToastSuccessClick = () => {
    Toast.success();
  };
  const handleToastFailClick = () => {
    Toast.fail();
  };
  const handleToastLoadingClick = () => {
    Toast.loading({}, 0);
    // 3s 后关闭
    setTimeout(() => {
      Toast.destroy();
    }, 3000);
  };

  return (
    <div className="demo">
      <div className="demo-title">Toast</div>
      <WingBlank spacing={5}>
        <div className="demo-box">
          <Button onClick={handleToastInfoClick}>Toast.info</Button>
          <WhiteSpace spacing={5} />
          <Button onClick={handleToastSuccessClick}>Toast.success</Button>
          <WhiteSpace spacing={5} />
          <Button onClick={handleToastFailClick}>Toast.fail</Button>
          <WhiteSpace spacing={5} />
          <Button onClick={handleToastLoadingClick}>Toast.loading</Button>
        </div>
      </WingBlank>
    </div>
  );
};

export default withTheme(Demo);
