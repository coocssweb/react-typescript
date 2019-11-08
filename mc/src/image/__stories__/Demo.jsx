/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-15 19:17:01
 * Copyright © Leedarson. All rights reserved.
 */

import React from 'react';
import { Grid, GridItem, Image, Square } from '../../index';

const Demo = () => {
  return (
    <div className="demo">
      <div className="demo-title">Image</div>
      <Grid cols={2} border={true}>
        <GridItem>
          <Square align="center">
            <Image src="https://www.shuxia123.com/uploads/2019/1560414276274_width_800_height_534.jpg" />
          </Square>
        </GridItem>
        <GridItem>
          <Square align="center">
            <Image src="https://www.shuxia123.com/uploads/2019/1556603555443_width_720_height_398.jpg" width="80%" />
          </Square>
        </GridItem>
        <GridItem>
          <Square align="center">
            <Image src="https://www.shuxia123.com/uploads/2019/1555857156285_width_573_height_430.jpg" width={200} />
          </Square>
        </GridItem>
        <GridItem>
          <Square align="center">
            <Image src="https://www.shuxia123.com/uploads/2019/1554545283148_width_812_height_408.jpeg" width={200} />
          </Square>
        </GridItem>
      </Grid>
    </div>
  );
};

export default Demo;
