/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-09-03 14:48:39
 * Copyright © Leedarson. All rights reserved.
 */

import React from 'react';
import { Square, Circle, WingBlank, WhiteSpace, Grid, GridItem, Icon, Typography } from '../../index';

const Demo = () => {
  return (
    <div className="demo">
      <div className="demo-title">正方形</div>
      <WhiteSpace spacing={10} />
      <WingBlank spacing={10}>
        <Square width={100} radius={10} fill="primary" align="center">
          <Typography variant="h3" color="surface">
            字
          </Typography>
        </Square>
        <WhiteSpace spacing={10} />
        <Circle width={100} fill="primary" align="center">
          <Typography variant="h3" color="surface">
            字
          </Typography>
        </Circle>
      </WingBlank>

      <WhiteSpace spacing={10} />
      <div className="demo-title">配合网格</div>
      <WhiteSpace spacing={10} />

      <WingBlank spacing={10}>
        <Grid spacing={4}>
          <GridItem>
            <Square padding={[20]} radius={10}>
              <Icon type="home" />
              <Typography variant="subtitle1">Siren hub</Typography>
            </Square>
          </GridItem>
          <GridItem>
            <Square padding={[20]} radius={10}>
              <Icon type="home" />
              <Typography variant="subtitle1">Siren hub</Typography>
            </Square>
          </GridItem>
          <GridItem>
            <Square padding={[20]} radius={10}>
              <Icon type="home" />
              <Typography variant="subtitle1">Siren hub</Typography>
            </Square>
          </GridItem>
          <GridItem>
            <Square padding={[20]} radius={10}>
              <Icon type="home" />
              <Typography variant="subtitle1">Siren hub</Typography>
            </Square>
          </GridItem>
        </Grid>
      </WingBlank>
    </div>
  );
};

export default Demo;
