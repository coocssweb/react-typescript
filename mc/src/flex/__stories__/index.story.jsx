/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-15 19:17:12
 * Copyright © Leedarson. All rights reserved.
 */

import React from 'react';
import README from './README.md';
import Demo from './Demo';
import DemoColumn from './DemoColumn';
import { storiesOf } from '@storybook/react';
import DemoRaw from '!raw-loader!./Demo';
import DemoColumnRaw from '!raw-loader!./DemoColumn';

storiesOf('布局. Flex 布局', module)
  .addParameters({
    notes: README,
  })
  .add('row 演示', () => <Demo />, {
    jsx: {
      onBeforeRender: () => DemoRaw,
    },
  })
  .add('column 演示', () => <DemoColumn />, {
    jsx: {
      onBeforeRender: () => DemoColumnRaw,
    },
  });
