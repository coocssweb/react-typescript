# SwipeOut

## 属性说明

| 属性      | 说明                   | 类型          | 默认值          |
| --------- | ---------------------- | ------------- | --------------- |
| left      | 左侧按钮组             | `[{text:''}]` | `null`          |
| right     | 右侧按钮组             | `[{text:''}]` | `null`          |
| autoClose | 点击按钮后自动隐藏按钮 | Boolean       | `function() {}` |
| disabled  | 禁用 `SwipeOut`        | Boolean       | `false`         |


## 方法

| 属性    | 说明           | 类型     | 默认值          |
| ------- | -------------- | -------- | --------------- |
| onOpen  | 打开时回调函数 | (): void | `function() {}` |
| onClose | 关闭时回调函数 | (): void | `function() {}` |