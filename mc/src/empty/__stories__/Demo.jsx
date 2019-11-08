/*
 * @Author: yuxinyu@leedarson.com
 * @Date: 2019-08-23 10:48:21
 * Copyright © Leedarson. All rights reserved.
 */

import React from 'react';
import { Empty } from '../../index';

const Demo = () => {
  return (
    <div className="demo">
      <div className="demo-title">Empty</div>
      <div className="demo-box">
        <Empty icon="storage">No Message</Empty>
      </div>
    </div>
  );
};

export default Demo;
