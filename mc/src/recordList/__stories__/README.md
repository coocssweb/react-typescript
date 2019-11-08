# RecordList

设备活动记录列表

## 属性说明

| 属性    | 说明                     | 类型    | 默认值 |
| ------- | ------------------------ | ------- | ------ |
| data    | 列表数据                 | Array   |        |
| hasTabs | 是否要减去头部 Tabs 高度 | Boolean | false  |

## 方法说明

| 属性         | 说明                   | 默认值   |
| ------------ | ---------------------- | -------- |
| onEndReached | 列表滑到底部后触发事件 | () => {} |
| render       | 渲染列表 Item 方法     | () => {} |