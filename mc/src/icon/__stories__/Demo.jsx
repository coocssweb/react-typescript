/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-15 19:17:01
 * Copyright © Leedarson. All rights reserved.
 */

import React from 'react';
import Styled from 'styled-components';
import { THEME_COLORS, ICONS } from '../../constants';
import { Icon, Grid, GridItem, WhiteSpace } from '../../index';

const SIZE = ['small', 'medium', 'large'];

const StyledIcon = Styled.div`
  text-align: center;
  font-size: 30px;
  padding-top: 10px;
`;

const StyledWord = Styled.div`
text-align: center;
font-size: 17px;
padding: 10px 0px;
`;

const Demo = () => {
  return (
    <div className="demo">
      <div className="demo-title">Icon </div>
      <Grid cols={4} border={true}>
        {ICONS.map(type => (
          <GridItem key={type}>
            <StyledIcon>
              <Icon type={type} />
            </StyledIcon>
            <StyledWord>{type}</StyledWord>
          </GridItem>
        ))}
      </Grid>

      <WhiteSpace spacing={5} />
      <div className="demo-title">Color </div>

      <Grid cols={4} border={true}>
        {THEME_COLORS.map(color => (
          <GridItem key={color}>
            <StyledIcon>
              <Icon type="user" color={color} />
            </StyledIcon>
            <StyledWord>{color}</StyledWord>
          </GridItem>
        ))}
      </Grid>

      <WhiteSpace spacing={5} />
      <div className="demo-title">Size </div>
      <Grid cols={3} border={true}>
        <GridItem>
          <StyledIcon>
            <Icon type="user" fontSize={24} />
          </StyledIcon>
          <StyledWord>24</StyledWord>
        </GridItem>
        {SIZE.map(size => (
          <GridItem key={size}>
            <StyledIcon>
              <Icon type="user" size={size} />
            </StyledIcon>
            <StyledWord>{size}</StyledWord>
          </GridItem>
        ))}
      </Grid>
    </div>
  );
};

export default Demo;
