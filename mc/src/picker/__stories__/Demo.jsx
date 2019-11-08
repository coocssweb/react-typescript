/*
 * @Author: yuxinyu@leedarson.com
 * @Date: 2019-08-30 13:45:01
 * Copyright © Leedarson. All rights reserved.
 */

import React, { useState } from 'react';
import { Picker, Button, WingBlank, WhiteSpace } from '../../index';

const seasons = [
  [
    {
      label: '2018',
      value: '2018',
    },
    {
      label: '2019',
      value: '2019',
    },
  ],
  [
    {
      label: '春',
      value: '春',
    },
    {
      label: '夏',
      value: '夏',
    },
  ],
];

const season = [
  {
    label: '春',
    value: '春',
  },
  {
    label: '夏',
    value: '夏',
  },
];

const province = [
  {
    label: '北京',
    value: '01',
    children: [
      {
        label: '东城区',
        value: '01-1',
      },
      {
        label: '西城区',
        value: '01-2',
      },
      {
        label: '崇文区',
        value: '01-3',
      },
      {
        label: '宣武区',
        value: '01-4',
      },
    ],
  },
  {
    label: '浙江',
    value: '02',
    children: [
      {
        label: '杭州',
        value: '02-1',
        children: [
          {
            label: '西湖区',
            value: '02-1-1',
          },
          {
            label: '上城区',
            value: '02-1-2',
          },
          {
            label: '江干区',
            value: '02-1-3',
          },
          {
            label: '下城区',
            value: '02-1-4',
          },
        ],
      },
      {
        label: '宁波',
        value: '02-2',
        children: [
          {
            label: 'xx区',
            value: '02-2-1',
          },
          {
            label: 'yy区',
            value: '02-2-2',
          },
        ],
      },
      {
        label: '温州',
        value: '02-3',
      },
      {
        label: '嘉兴',
        value: '02-4',
      },
      {
        label: '湖州',
        value: '02-5',
      },
      {
        label: '绍兴',
        value: '02-6',
      },
    ],
  },
];

const Demo = () => {
  const [value, setValue] = useState(null);

  const onChange = value => {
    setValue(value);
  };

  return (
    <div className="demo">
      <div className="demo-title">PickerView</div>
      <WhiteSpace spacing={10} />
      <WingBlank spacing={10}>
        <Picker data={seasons} value={value} onChange={onChange} />
        <WhiteSpace spacing={10} />
        <Picker data={season} />
        <WhiteSpace spacing={10} />
        <Picker data={province} cascade={true} value={['02', '02-1', '02-1-1']} />
        <WhiteSpace spacing={10} />
      </WingBlank>
    </div>
  );
};

export default Demo;
