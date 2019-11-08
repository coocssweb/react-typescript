/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-15 19:17:12
 * Copyright © Leedarson. All rights reserved.
 */

import React from 'react';
import README from './README.md';
import DemoDrag from './DemoDrag';
import DemoLongPress from './DemoLongPress';
import DemoSortable from './DemoSortable';
import { storiesOf } from '@storybook/react';
import DemoDragRaw from '!raw-loader!./DemoDrag';
import DemoLongPressRaw from '!raw-loader!./DemoLongPress';
import DemoSortableRaw from '!raw-loader!./DemoSortable';

storiesOf('用户输入.Gesture 手势', module)
  .addParameters({
    notes: README,
  })
  .add('拖拽', () => <DemoDrag />, {
    jsx: {
      onBeforeRender: () => DemoDragRaw,
    },
  })
  .add('长按', () => <DemoLongPress />, {
    jsx: {
      onBeforeRender: () => DemoLongPressRaw,
    },
  })
  .add('排序', () => <DemoSortable />, {
    jsx: {
      onBeforeRender: () => DemoSortableRaw,
    },
  });
