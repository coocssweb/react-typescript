/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-15 19:17:01
 * Copyright © Leedarson. All rights reserved.
 */

import React from 'react';
import Styled, { css } from 'styled-components';
import { Grid, GridItem, WingBlank } from '../../index';

const _typography = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'subtitle1',
  'subtitle2',
  'body1',
  'body2',
  'button',
  'caption',
  'overline',
];

const _typographySize = [
  '64px, 300',
  '58px, 300',
  '36px, 400',
  '34px, 400',
  '48px, 400',
  '40px, 700',
  '34px, 500',
  '32px, 500',
  '32px, 400',
  '28px, 400',
  '34px, 500',
  '26px, 400',
  '22px, 400',
];

const StyledSquare = Styled.div`
  width: 100%;
  padding-bottom: 100%;
  position: relative;
  border-radius: 4px;
  color: #000;
  background: #ffffff;
  ${({ theme, typography }) => css`
    ${{ ...theme[typography] }}
  `} 
`;

const StyledSquareContent = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const Demo = () => {
  return (
    <div className="demo">
      <div className="demo-title">字号系统</div>
      <div className="demo-box">
        <WingBlank spacing={4}>
          <Grid cols={2} border={false} spacing={4}>
            {_typography.map((typography, index) => (
              <GridItem key={typography}>
                <StyledSquare typography={typography}>
                  <StyledSquareContent>
                    {typography}
                    <br />
                    <br /> {_typographySize[index]}
                  </StyledSquareContent>
                </StyledSquare>
              </GridItem>
            ))}
          </Grid>
        </WingBlank>
      </div>
    </div>
  );
};

export default Demo;
