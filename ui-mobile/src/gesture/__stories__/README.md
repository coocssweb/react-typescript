# 手势

手势系统，包括 Drag 拖拽组件，LongPress 长按组件。基于 react-use-gesture 开发，同时暴露以下方法

- ✔︎ useDrag
- ✔︎ usePinch
- ✔︎ useGesture

## LongPress 组件

| 事件    | 说明     | 类型 | 默认值   |
| ------- | -------- | ---- | -------- |
| onPress | 长按事件 | func | () => {} |

## Drag 组件

| 属性      | 说明       | 类型            | 默认值 |
| --------- | ---------- | --------------- | ------ |
| offset    | 元素坐标   | [left, top]     | [0, 0] |
| direction | 允许的方向 | sting[`x`, `y`] | null   |

| 事件   | 说明     | 类型                | 默认值   |
| ------ | -------- | ------------------- | -------- |
| onDrag | 拖拽事件 | ([left, top]) => {} | () => {} |

## Todo

- Drag 组件需要支持 boundaries 可拖拽区域
