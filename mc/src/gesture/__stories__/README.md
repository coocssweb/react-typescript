# 手势

手势系统，包括 Drag 拖拽组件，LongPress 长按组件，Pulldown 下拉刷新组件。基于 react-use-gesture 开发，同时暴露以下方法

- ✔︎ useDrag
- ✔︎ usePinch
- ✔︎ useGesture

## LongPress 组件

| 事件    | 说明     | 类型 | 默认值   |
| ------- | -------- | ---- | -------- |
| onPress | 长按事件 | func | () => {} |

## Drag 组件

| 属性      | 说明       | 类型                                    | 默认值 |
| --------- | ---------- | --------------------------------------- | ------ |
| bounds    | 安全区域   | number[`top`, `right`, `bottom`, `left` | null   |
| offset    | 元素坐标   | [left, top]                             | [0, 0] |
| direction | 允许的方向 | sting[`x`, `y`]                         | null   |

| 事件   | 说明     | 类型                | 默认值   |
| ------ | -------- | ------------------- | -------- |
| onDrag | 拖拽事件 | ([left, top]) => {} | () => {} |

## 排序组件

| 属性         | 说明               | 类型                                 | 默认值                 |
| ------------ | ------------------ | ------------------------------------ | ---------------------- |
| data         | 排序数据           | array                                | []                     |
| direction    | 允许的方向         | sting[`x`, `y`, `xy`],`xy`为网格排序 | `y`                    |
| disabled     | 失效               | bool                                 | false                  |
| render       | render 子元素      | func                                 | (value, index) => null |
| renderHandle | render handle 元素 | func                                 | (value, index) => null |

| 事件        | 说明     | 类型 | 默认值   |
| ----------- | -------- | ---- | -------- |
| onSortStart | 排序开始 | func | () => {} |
| onSortMove  | 排序中   | func | () => {} |
| onSortEnd   | 排序结束 | func | () => {} |
