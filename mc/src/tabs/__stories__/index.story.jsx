/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-15 19:17:12
 * Copyright © Leedarson. All rights reserved.
 */

import React from 'react';
import README from './README.md';
import Demo from './Demo';
import DemoVertical from './DemoVertical';
import { storiesOf } from '@storybook/react';
import DemoRaw from '!raw-loader!./Demo';
import DemoVerticalRaw from '!raw-loader!./DemoVertical';

storiesOf('导航. Tabs 切换', module)
  .addParameters({
    notes: README,
  })
  .add('演示', () => <Demo />, {
    jsx: {
      onBeforeRender: () => DemoRaw,
    },
  })
  .add('垂直方向', () => <DemoVertical />, {
    jsx: {
      onBeforeRender: () => DemoVerticalRaw,
    },
  });
