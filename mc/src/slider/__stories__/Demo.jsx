/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-15 19:17:01
 * Copyright © Leedarson. All rights reserved.
 */

import React from 'react';

import { Slider, WingBlank, WhiteSpace, Flex, FlexItem, Icon } from '../../index';

const Demo = () => {
  const handleSliderChange = () => {};

  return (
    <div className="demo">
      <div className="demo-title">Slider</div>
      <WhiteSpace spacing={20} />
      <WingBlank spacing={10}>
        <Slider onChange={handleSliderChange} tooltip />
      </WingBlank>

      <WhiteSpace spacing={20} />
      <WingBlank spacing={10}>
        <Flex>
          <Icon type="bright-less" color="neuter600" />
          <FlexItem padding={[0, 15]}>
            <Slider onChange={handleSliderChange} tooltip />
          </FlexItem>
          <Icon type="bright" color="neuter600" />
        </Flex>
      </WingBlank>

      <WhiteSpace spacing={20} />
      <div className="demo-title">Slider disabled</div>
      <WhiteSpace spacing={20} />
      <WingBlank spacing={10}>
        <Slider disabled defaultValue={10} onChange={handleSliderChange} />
      </WingBlank>
    </div>
  );
};

export default Demo;
