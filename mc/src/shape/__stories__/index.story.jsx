/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-09-03 14:51:35
 * Copyright © Leedarson. All rights reserved.
 */

import React from 'react';
import README from './README.md';
import Demo from './Demo';
import { storiesOf } from '@storybook/react';
import DemoRaw from '!raw-loader!./Demo';

storiesOf('布局. Shape 形状', module)
  .addParameters({
    notes: README,
  })
  .add('演示', () => <Demo />, {
    jsx: {
      onBeforeRender: () => DemoRaw,
    },
  });
