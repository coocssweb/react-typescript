/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-15 19:17:12
 * Copyright © Leedarson. All rights reserved.
 */

import React from 'react';
import README from './README.md';
import Demo from './Demo';
import { storiesOf } from '@storybook/react';
import DemoRaw from '!raw-loader!./Demo';

storiesOf('Slider 滑块', module)
  .addParameters({
    notes: README,
  })
  .add('演示', () => <Demo />, {
    jsx: {
      onBeforeRender: () => DemoRaw,
    },
  });
