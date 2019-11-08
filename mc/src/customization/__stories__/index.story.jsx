/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-15 19:17:12
 * Copyright © Leedarson. All rights reserved.
 */

import React from 'react';
import COLOR_MD from './COLOR.md';
import FONT_MD from './FONT.md';
import THEME_MD from './THEME.md';
import Font from './Font';
import Color from './Color';
import Theme from './Theme';
import { storiesOf } from '@storybook/react';
import DemoRaw from '!raw-loader!./Demo';

storiesOf('个性化.Color 颜色', module)
  .addParameters({
    notes: COLOR_MD,
  })
  .add('演示', () => <Color />, {
    jsx: {
      onBeforeRender: () => DemoRaw,
    },
  });

storiesOf('个性化.Font 字体', module)
  .addParameters({
    notes: FONT_MD,
  })
  .add('演示', () => <Font />, {
    jsx: {
      onBeforeRender: () => DemoRaw,
    },
  });

storiesOf('个性化.Theme 主题', module)
  .addParameters({
    notes: THEME_MD,
  })
  .add('演示', () => <Theme />, {
    jsx: {
      onBeforeRender: () => DemoRaw,
    },
  });
