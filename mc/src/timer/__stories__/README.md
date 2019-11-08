# Timer 计时组件

支持 Render Props

## Timer 属性说明

| 属性      | 说明 | 类型                         | 默认值      |
| --------- | ---- | ---------------------------- | ----------- |
| type      | 类型 | string[`countdown`, `timer`] | `countdown` |
| countdown | 时间 | numver                       | 0           |
| format    | 格式 | string                       | `hh:mm:ss`  |
| stop      | 停止 | bool                         | false       |

## Timer 事件说明

| 属性   | 说明         | 类型 | 默认值   |
| ------ | ------------ | ---- | -------- |
| render | render props | func | () => {} |
| onEnd  | 结束         | func | () => {} |
