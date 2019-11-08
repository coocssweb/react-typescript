/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-15 19:17:01
 * Copyright © Leedarson. All rights reserved.
 */

import React from 'react';
import Styled, { withTheme, css } from 'styled-components';
import { Grid, GridItem, WingBlank } from '../../index';
import { getColor } from '../../styledUtils';
import { THEME_COLORS } from '../../constants';

const StyledSquare = Styled.div`
  width: 100%;
  padding-bottom: 100%;
  position: relative;
  border-radius: 4px;
  ${({ theme, colored }) => css`
    color: ${['background', 'surface', 'neuter50', 'neuter100', 'neuter200'].includes(colored) ? '#000' : '#fff'};
    background: ${getColor(theme, colored)};
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

const Demo = ({ theme }) => {
  return (
    <div className="demo">
      <div className="demo-title">颜色系统</div>
      <div className="demo-box">
        <WingBlank spacing={4}>
          <Grid cols={2} border={false} spacing={4}>
            {THEME_COLORS.map(color => (
              <GridItem key={color}>
                <StyledSquare colored={color}>
                  <StyledSquareContent>
                    {color}
                    <br />
                    <br /> {getColor(theme, color)}
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

export default withTheme(Demo);
