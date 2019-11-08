/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-15 19:17:01
 * Copyright © Leedarson. All rights reserved.
 */

import React from 'react';
import styled from 'styled-components';
import { Flex, FlexItem } from '../../index';

const StyledFlex = styled(Flex)`
  height: 100vh;
`;

const StyledFooter = styled.div`
  background-color: #eee;
  text-align: center;
  padding: 30px;
`;

const Demo = () => {
  return (
    <div className="demo">
      <StyledFlex direction="column">
        <FlexItem>這是主内容</FlexItem>
        <StyledFooter>这是底部</StyledFooter>
      </StyledFlex>
    </div>
  );
};

export default Demo;
