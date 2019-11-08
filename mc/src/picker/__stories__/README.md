# PickerView

PickerView 的功能类似于 Picker ，但它是直接渲染在区域中，而不是弹出窗口

## 属性说明

| 属性       | 说明                                                                   | 类型    | 默认值   |
| ---------- | ---------------------------------------------------------------------- | ------- | -------- |
| data       | 数据源, 由对象`array[{object}]`或数组`array[[array]]`组成的数组        | array   |          |
| value      | 当前值, 格式是`[value1, value2, value3]`, 对应数据源的相应级层 `value` | array   |          |
| cascade    | 是否级联                                                               | boolean | false    |
| title      | 标题                                                                   | string  |          |
| okText     | 确定按钮文本                                                           | string  | `Done`   |
| cancelText | 取消按钮文本                                                           | string  | `Cancel` |

## 方法说明

| 属性     | 说明         | 默认值 |
| -------- | ------------ | ------ |
| onOk     | 点击确定事件 |        |
| onCancel | 点击取消事件 |        |

---

# Picker

Picker 选择器，从底部弹出选择器

## 属性说明

| 属性    | 说明                                                                   | 类型    | 默认值 |
| ------- | ---------------------------------------------------------------------- | ------- | ------ |
| data    | 数据源, 由对象`array[{object}]`或数组`array[[array]]`组成的数组        | array   | 无     |
| value   | 当前值, 格式是`[value1, value2, value3]`, 对应数据源的相应级层 `value` | array   | 无     |
| cascade | 是否级联                                                               | boolean | false  |

## 方法说明

| 属性     | 说明         | 默认值   |
| -------- | ------------ | -------- |
| onChange | 选中后的回调 | () => {} |
