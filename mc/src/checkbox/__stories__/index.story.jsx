/*
 * @Author: yuxinyu@leedarson.com
 * @Date: 2019-08-27 15:05:10
 * Copyright © Leedarson. All rights reserved.
 */

import React from 'react';
import README from './README.md';
import Demo from './Demo';
import { storiesOf } from '@storybook/react';
import DemoRaw from '!raw-loader!./Demo';

storiesOf('用户输入. Checkbox 复选框', module)
  .addParameters({
    notes: README,
  })
  .add('演示', () => <Demo />, {
    jsx: {
      onBeforeRender: () => DemoRaw,
    },
  });
