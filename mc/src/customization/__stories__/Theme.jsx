/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-15 19:17:01
 * Copyright © Leedarson. All rights reserved.
 */

import React from 'react';
import Styled from 'styled-components';
import { WingBlank } from '../../index';

const StyledContent = Styled.div`
  text-align: center;
  padding: 50px 0;
  font-size: 30px;
  color: #999;
`;

const Demo = () => {
  return (
    <div className="demo">
      <div className="demo-title">主题系统</div>
      <WingBlank spacing={4}>
        <StyledContent>请看THEME.md</StyledContent>
      </WingBlank>
    </div>
  );
};

export default Demo;
