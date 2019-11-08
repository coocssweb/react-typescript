/*
 * @Author: yuxinyu@leedarson.com
 * @Date: 2019-08-27 15:05:10
 * Copyright © Leedarson. All rights reserved.
 */

import React, { useState } from 'react';
import { Checkbox, Button, WingBlank, WhiteSpace } from '../../index';

function onChange(e) {
  console.log('Checkbox checked:', e.target.checked);
}

const Demo = () => {
  const [disabled, setDisabled] = useState(false);
  const onClick = e => {
    setDisabled(!disabled);
  };

  return (
    <div className="demo">
      <div className="demo-title">Checkbox</div>
      <div className="demo-box">
        <WingBlank spacing={4}>
          <Checkbox checked disabled={disabled} onChange={onChange} /> 受控状态
          <WhiteSpace spacing={8} />
          <Checkbox defaultChecked disabled={disabled} onChange={onChange} /> 非受控状态
          <WhiteSpace spacing={8} />
          <Checkbox checked size="small"></Checkbox>
          <WhiteSpace spacing={8} />
          <Button color="surface" onClick={onClick}>
            禁用 / 恢复
          </Button>
        </WingBlank>
      </div>
    </div>
  );
};

export default Demo;
