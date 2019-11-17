# Storybook

用于说明 storybook 注意事项

## 配置说明

- `.eslintrc.js` (component 根目录的 eslint 配置)

在编写 storybook 文档过程中，需要获取 demo 文件源码，目前采用的形式是 [webpack raw-loader](https://github.com/webpack-contrib/raw-loader)。

但 Eslint 会针对该形式报错，所以暂时关闭 import/no-webpack-loader-syntax 及 'import/no-unresolved' 规则。

- `.babelrc`

目前只发现这种形式可以继承项目根部 babel 配置。（storybook 文档中只提及 .babelrc 的格式写配置文件）TODO：后续时间充足的情况，会对此进行优化。

- `preview-head.html`

新增全局样式、全局 css 等

## Story 模板

### 目录

```bash
|- __stories__
 |- demo.jsx # 组件实例代码
 |- index.story.jsx # 用于组织文档形式
 |- README.md # 组件说明
```

### story 文件

```js
import React from 'react';
import README from './README.md';
import Demo from './demo';
import { storiesOf } from '@storybook/react';
// raw-loader的方式获取 demo 源码的纯文本形式
import DemoRaw from '!raw-loader!./demo';

storiesOf('Navbar', module)
  .addParameters({
    // 添加组件说明
    notes: README,
  })
  .add('基础使用', () => <Demo />, {
    // 引入 Demo 源码
    jsx: {
      onBeforeRender: () => DemoRaw,
    },
  });
```
