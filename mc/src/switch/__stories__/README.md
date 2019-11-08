# Switch

按钮说明, 支持 Styling component

## 属性说明

| 属性     | 说明         | 类型    | 默认值 |
| -------- | ------------ | ------- | ------ |
| checked  | 是否默认选中 | boolean | false  |
| disabled | 是否不可修改 | boolean | false  |

## 方法

| 属性     | 说明                                                                                      | 类型                  | 默认值 |
| -------- | ----------------------------------------------------------------------------------------- | --------------------- | ------ |
| onChange | change 事件触发的回调函数                                                                 | (checked: bool): void | 无     |
| onClick  | click 事件触发的回调函数，当 switch 为 disabled 时，入参的值始终是默认传入的 checked 值。 | (checked: bool): void | 无     |
