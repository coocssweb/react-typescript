# Button

按钮说明, 支持 Styling component

```javascript
export const PROP_TYPES_TYPE = [
  "",
  "text"
  "primary",
  "secondary",
  "info",
  "success",
  "error",
  "warn",
  "surface",
  "neuter50",
  "neuter100",
  "neuter200",
  "neuter300",
  "neuter400",
  "neuter500",
  "neuter600",
  "neuter700",
  "neuter800",
  "neuter900"
];


export const PROP_TYPES_COLOR = [
  "primary",
  "secondary",
  "info",
  "success",
  "error",
  "warn",
  "background",
  "surface",
  "neuter50",
  "neuter100",
  "neuter200",
  "neuter300",
  "neuter400",
  "neuter500",
  "neuter600",
  "neuter700",
  "neuter800",
  "neuter900"
];
```

为更好的满足需求，为 text, surface 类型的 button 放开 color 定义。

## 注意

为满足链接需求，开放 as 和 to 参数，link 接收 react-router-dom.Link，to 接收链接地址

```javascript
import { Link } from 'react-router-dom';

<Button as={Link} to="abc">
  打开链接
</Button>;
```

## 属性说明

| 属性      | 说明                                           | 类型    | 默认值    |
| --------- | ---------------------------------------------- | ------- | --------- |
| type      | 按钮类型，PROP_TYPES_TYPE                      | string  | primary   |
| size      | 按钮大小，可选值为`large`/`small`              | string  | large     |
| block     | block 元素                                     | boolean | true      |
| round     | 圆弧                                           | boolean | false     |
| disabled  | 设置禁用                                       | boolean | false     |
| loading   | 加载中                                         | boolean | false     |
| plain     | 扁平化                                         | boolean | false     |
| textAlign | 文字排版,可选值为`center`/`left`/`right`       | string  | `center`  |
| color     | type 为，`surface`, `text`时，PROP_TYPES_COLOR | string  | `primary` |

## 方法

| 名称    | 说明     | 默认值   |
| ------- | -------- | -------- |
| onClick | 按钮点击 | () => {} |
