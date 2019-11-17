/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-15 19:17:01
 * Copyright © Leedarson. All rights reserved.
 */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { themeDefault } from '@leedarson/theme';
import { Grids } from '../../index';

const { GridItem } = Grids;

const Demo = () => {
  return (
    <ThemeProvider theme={themeDefault}>
      <div className="demo">
        <div className="demo-title">Grids (四宫格) </div>
        <div className="demo-box">
          <Grids cols={2}>
            <GridItem>
              <div className="placeholder">Grids</div>
            </GridItem>
            <GridItem>
              <div className="placeholder">Grids</div>
            </GridItem>
            <GridItem>
              <div className="placeholder">Grids</div>
            </GridItem>
            <GridItem>
              <div className="placeholder">Grids</div>
            </GridItem>
          </Grids>
        </div>

        <div className="demo-title">Grids (九宫格) </div>
        <div className="demo-box">
          <Grids cols={3}>
            <GridItem>
              <div className="placeholder">Grids</div>
            </GridItem>
            <GridItem>
              <div className="placeholder">Grids</div>
            </GridItem>
            <GridItem>
              <div className="placeholder">Grids</div>
            </GridItem>
            <GridItem>
              <div className="placeholder">Grids</div>
            </GridItem>
            <GridItem>
              <div className="placeholder">Grids</div>
            </GridItem>
            <GridItem>
              <div className="placeholder">Grids</div>
            </GridItem>
            <GridItem>
              <div className="placeholder">Grids</div>
            </GridItem>
            <GridItem>
              <div className="placeholder">Grids</div>
            </GridItem>
            <GridItem>
              <div className="placeholder">Grids</div>
            </GridItem>
          </Grids>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Demo;
