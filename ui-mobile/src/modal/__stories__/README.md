# Modal

Modal 对话框

## 属性说明

| 属性         | 说明         | 类型    | 默认值 |
| ------------ | ------------ | ------- | ------ |
| title        | 对话框标题   | string  | null   |
| visible      | 是否可见     | boolean | false  |
| closable     | 关闭按钮     | boolean | false  |
| confirm      | 确认按钮     | string  | ''     |
| cancel       | 取消按钮     | string  | ''     |
| maskClosable | 点击蒙层关闭 | boolean | true   |

## 方法说明

| 属性       | 说明                     | 默认值   |
| ---------- | ------------------------ | -------- |
| onClose    | 关闭                     | () => {} |
| afterClose | 关闭动画结束             | () => {} |
| onConfirm  | 点击 confirm, 支持 async | () => {} |
| onCancel   | 点击 cancel，支持 async  | () => {} |
