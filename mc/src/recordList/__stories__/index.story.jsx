/*
 * @Author: yuxinyu@leedarson.com
 * @Date: 2019-09-16 17:06:37
 * Copyright © Leedarson. All rights reserved.
 */
import React from 'react';
import README from './README.md';
import Demo from './Demo';
import { storiesOf } from '@storybook/react';
import DemoRaw from '!raw-loader!./Demo';

storiesOf('数据展示. RecordList 记录列表 ', module)
  .addParameters({
    notes: README,
  })
  .add('演示', () => <Demo />, {
    jsx: {
      onBeforeRender: () => DemoRaw,
    },
  });
