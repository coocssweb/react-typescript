/*
 * @Author: yuxinyu@leedarson.com
 * @Date: 2019-08-30 11:12:26
 * Copyright © Leedarson. All rights reserved.
 */
import React from 'react';
import README from './README.md';
import Demo from './Demo';
import { storiesOf } from '@storybook/react';
import DemoRaw from '!raw-loader!./Demo';

storiesOf('用户输入. Picker 选择器', module)
  .addParameters({
    notes: README,
  })
  .add('演示', () => <Demo />, {
    jsx: {
      onBeforeRender: () => DemoRaw,
    },
  });
