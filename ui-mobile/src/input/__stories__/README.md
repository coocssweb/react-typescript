# Input

输入框组件，支持 Styling component

## API

| 属性         | 说明                                                   | 类型    | 默认值 |
| ------------ | ------------------------------------------------------ | ------- | ------ |
| type         | 输入框类型，可选值为`text`/`password`/`number`/`phone` | string  | `text` |
| readOnly     | 只读属性                                               | boolean | false  |
| disabled     | 失效                                                   | boolean | false  |
| defaultValue | 默认值                                                 | string  | 无     |
| value        | 值                                                     | string  | 无     |
| placeholder  | placeholder                                            | string  | 无     |

## 方法

| 名称     | 说明       | 默认值   |
| -------- | ---------- | -------- |
| onChange | 输入值改变 | () => {} |
| onBlur   | 失去焦点   | () => {} |
| onFocus  | 后去焦点   | () => {} |
