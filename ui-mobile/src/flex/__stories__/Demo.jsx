/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-15 19:17:01
 * Copyright © Leedarson. All rights reserved.
 */

import React from 'react';
import { ThemeProvider } from 'styled-components';
import { themeDefault } from '@leedarson/theme';
import { Flex } from '../../index';

const { FlexItem } = Flex;

const Demo = () => {
  return (
    <ThemeProvider theme={themeDefault}>
      <div className="demo">
        <div className="demo-title">Flex </div>
        <div className="demo-box">
          <Flex>
            <FlexItem>
              <div className="placeholder">Flex</div>
            </FlexItem>
          </Flex>
          <div className="demo-split" />
          <Flex>
            <FlexItem>
              <div className="placeholder" style={{ margin: '0px 5px' }}>
                Flex
              </div>
            </FlexItem>
            <FlexItem>
              <div className="placeholder" style={{ margin: '0px 5px' }}>
                Flex
              </div>
            </FlexItem>
          </Flex>
          <div className="demo-split" />
          <Flex>
            <FlexItem>
              <div className="placeholder" style={{ margin: '0px 5px' }}>
                Flex
              </div>
            </FlexItem>
            <FlexItem flex={2}>
              <div className="placeholder" style={{ margin: '0px 5px' }}>
                Flex
              </div>
            </FlexItem>
            <FlexItem>
              <div className="placeholder" style={{ margin: '0px 5px' }}>
                Flex
              </div>
            </FlexItem>
          </Flex>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Demo;
