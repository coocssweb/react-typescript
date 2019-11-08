# Typography 字体

支持系统的字体定义

```javascript
export const PROP_TYPES_TYPOGRAPHY = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'subtitle1',
  'subtitle2',
  'body1',
  'body2',
  'button',
  'caption',
  'overline',
];

export const PROP_TYPES_COLOR = [
  'primary',
  'secondary',
  'info',
  'success',
  'error',
  'warn',
  'background',
  'surface',
  'neuter50',
  'neuter100',
  'neuter200',
  'neuter300',
  'neuter400',
  'neuter500',
  'neuter600',
  'neuter700',
  'neuter800',
  'neuter900',
];
```

## 注意

为满足链接需求，开放 as 和 to 参数，link 接收 react-router-dom.Link，to 接收链接地址

```javascript
import { Link } from 'react-router-dom';

<Typography as={Link} to="abc">
  打开链接
</Typography>;
```

## Box 属性说明

| 属性    | 说明                  | 类型                           | 默认值  |
| ------- | --------------------- | ------------------------------ | ------- |
| variant | 字体                  | PROP_TYPES_TYPOGRAPHY          | `body1` |
| size    | font-size, 会转为 rem | number                         | null    |
| weight  | font-weight           | number                         | number  |
| color   | color                 | PROP_TYPES_COLOR / `hex颜色值` | null    |
| align   | 对齐方式              | `left`,`center`,`right`        | `left`  |
| display | display               | `inline-block`,`block`         | null    |
| margin  | margin                | number[],最多可定义四个值      | [0]     |
| padding | padding               | number[],最多可定义四个值      | [0]     |
