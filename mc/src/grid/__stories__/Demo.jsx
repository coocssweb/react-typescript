/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-15 19:17:01
 * Copyright © Leedarson. All rights reserved.
 */
import React from 'react';
import { Grid, WingBlank, Square, Flex, GridItem } from '../../index';

const Demo = () => {
  return (
    <div className="demo">
      <div className="demo-title">Grid (九宫格) </div>
      <div className="demo-box">
        <Grid cols={3} border={true}>
          <GridItem>
            <div className="placeholder">Grid</div>
          </GridItem>
          <GridItem>
            <div className="placeholder">Grid</div>
          </GridItem>
          <GridItem>
            <div className="placeholder">Grid</div>
          </GridItem>
          <GridItem>
            <div className="placeholder">Grid</div>
          </GridItem>
          <GridItem>
            <div className="placeholder">Grid</div>
          </GridItem>
          <GridItem>
            <div className="placeholder">Grid</div>
          </GridItem>
          <GridItem>
            <div className="placeholder">Grid</div>
          </GridItem>
          <GridItem>
            <div className="placeholder">Grid</div>
          </GridItem>
          <GridItem>
            <div className="placeholder">Grid</div>
          </GridItem>
        </Grid>
      </div>
      <div className="demo-title">Grid (四宫格) </div>
      <div className="demo-box">
        <WingBlank spacing={4}>
          <Grid cols={2} border={false} spacing={4}>
            <GridItem>
              <Square align="center">正方形</Square>
            </GridItem>
            <GridItem>
              <Square align="center">正方形</Square>
            </GridItem>
            <GridItem>
              <Square align="center">正方形</Square>
            </GridItem>
            <GridItem>
              <Square align="center">正方形</Square>
            </GridItem>
          </Grid>
        </WingBlank>
      </div>
    </div>
  );
};

export default Demo;
