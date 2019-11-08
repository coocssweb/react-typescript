/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-15 19:17:01
 * Copyright © Leedarson. All rights reserved.
 */

import React from 'react';
import { Flex, FlexItem, WhiteSpace } from '../../index';

const Demo = () => {
  return (
    <div className="demo">
      <div className="demo-title">Flex </div>
      <div className="demo-box">
        <Flex>
          <FlexItem margin={[0, 5]}>
            <div className="placeholder">Flex</div>
          </FlexItem>
        </Flex>
        <WhiteSpace spacing={5} />
        <Flex>
          <FlexItem margin={[0, 5]}>
            <div className="placeholder">Flex</div>
          </FlexItem>
          <FlexItem margin={[0, 5]}>
            <div className="placeholder">Flex</div>
          </FlexItem>
        </Flex>
        <WhiteSpace spacing={5} />
        <Flex>
          <FlexItem margin={[0, 5]}>
            <div className="placeholder">Flex</div>
          </FlexItem>
          <FlexItem margin={[0, 5]}>
            <div className="placeholder">Flex</div>
          </FlexItem>
          <FlexItem margin={[0, 5]}>
            <div className="placeholder">Flex</div>
          </FlexItem>
        </Flex>
      </div>
    </div>
  );
};

export default Demo;
