/*
 * @Author: yuxinyu@leedarson.com
 * @Date: 2019-08-29 17:02:00
 * Copyright © Leedarson. All rights reserved.
 */

import React, { useState } from 'react';
import { Radio, Button, WingBlank, WhiteSpace } from '../../index';

const Demo = () => {
  const [disabled, setDisabled] = useState(false);
  const [value, setValue] = useState('1');

  const onClick = e => {
    setDisabled(!disabled);
  };

  const onChange = e => {
    setValue(e.target.value);
  };

  return (
    <div className="demo">
      <div className="demo-title">Radio</div>
      <div className="demo-box">
        <WingBlank spacing={4}>
          <Radio checked={value === '1'} disabled={disabled} onChange={onChange} value="1" /> radio1
          <WhiteSpace spacing={4} />
          <Radio checked={value === '2'} disabled={disabled} onChange={onChange} value="2" /> radio2
          <WhiteSpace spacing={4} />
          <Radio checked={value === '3'} disabled={disabled} onChange={onChange} value="3" /> radio3
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
