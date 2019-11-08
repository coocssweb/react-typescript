# Textarea

Textarea 多行输入框组件，支持 Styling component

## API

| 属性         | 说明         | 类型    | 默认值 |
| ------------ | ------------ | ------- | ------ |
| rows         | 最小显示行数 | number  | 3      |
| readOnly     | 只读属性     | boolean | false  |
| disabled     | 失效         | boolean | false  |
| defaultValue | 默认值       | string  | 无     |
| value        | 值           | string  | 无     |
| placeholder  | placeholder  | string  | 无     |

## 方法

| 名称     | 说明                      | 默认值   |
| -------- | ------------------------- | -------- |
| onChange | change 事件触发的回调函数 | () => {} |
| onBlur   | blur 事件触发的回调函数   | () => {} |
| onFocus  | focus 事件触发的回调函数  | () => {} |
