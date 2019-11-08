/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-15 19:17:01
 * Copyright © Leedarson. All rights reserved.
 */

import React from 'react';
import styled from 'styled-components';
import { Country } from '../../index';
import data from './data';

const StyleWarp = styled.div`
  height: 100vh;
`;

const Demo = () => {
  let countries = [];
  countries = data.map(item => (item.name = item.country));
  return (
    <StyleWarp>
      <Country
        countries={countries}
        onChange={checked => {
          console.log(checked);
        }}
      />
    </StyleWarp>
  );
};

export default Demo;
