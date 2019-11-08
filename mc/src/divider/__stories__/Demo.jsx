/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-15 19:17:01
 * Copyright © Leedarson. All rights reserved.
 */

import React from 'react';
import { Divider, WingBlank, Flex, FlexItem, Button } from '../../index';
import styled from 'styled-components';

const StyledBox = styled.div`
  background-color: #efefef;
  padding: 10px;
`;

const Demo = () => {
  return (
    <div className="demo">
      <div className="demo-title">水平分割线 </div>
      <div className="demo-box">
        <WingBlank spacing={5}>
          <StyledBox>一个盒子</StyledBox>
          <Divider margin={[20, 50, 20, 40]} />
          <StyledBox>另一个盒子</StyledBox>
        </WingBlank>
      </div>

      <div className="demo-title">垂直分割线 </div>
      <div className="demo-box">
        <WingBlank spacing={5}>
          <Flex>
            <FlexItem>
              <Button>按钮</Button>
            </FlexItem>
            <Divider type="vertical" margin={['auto', 30]} size={50} />
            <FlexItem>
              <Button>按钮</Button>
            </FlexItem>
          </Flex>
        </WingBlank>
      </div>
    </div>
  );
};

export default Demo;
