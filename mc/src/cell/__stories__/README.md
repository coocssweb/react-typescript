# Cell

Cell 布局，Cell 为列表而工作，`Cell`组件包含`CellItem`、`CellHeader`、`CellBody`、`CellFooter`、`CellLabel`等子组件

## Cell 列表框

无属性要求

## CellItem 列表子组件

注意：可当成 Link 使用

```javascript
import { Link } from 'react-router-dom';

<CellItem as={Link} to="abc">
  打开链接
</CellItem>;
```

| 属性     | 说明                 | 类型            | 默认值 |
| -------- | -------------------- | --------------- | ------ |
| to       | 链接地址             | sting           | ''     |
| noGap    | 不需要默认 padding   | boolean         | false  |
| spacings | [垂直间距, 水平间距] | arrayOf(number) | [9, 8] |

## CellHeader 子组件左侧元素

| 属性    | 说明 | 类型   | 默认值 |
| ------- | ---- | ------ | ------ |
| spacing | 宽度 | number | 0      |

## CellBody 子组件左侧元素

非必要，无属性要求

## CellFooter 子组件左侧元素

| 属性  | 说明         | 类型             | 默认值   |
| ----- | ------------ | ---------------- | -------- |
| arrow | 是否显示箭头 | boolean          | false    |
| align | 对齐方式     | string.flexAlign | `center` |

## CellLabel 为表单布局而生

非必要，无属性要求
