# Pop

Pop 对话框

## 属性说明

| 属性         | 说明         | 类型            | 默认值   |
| ------------ | ------------ | --------------- | -------- |
| placement    | 位置         | `top`, `bottom` | `bottom` |
| title        | 对话框标题   | string          | null     |
| visible      | 是否可见     | boolean         | false    |
| closable     | 关闭按钮     | boolean         | false    |
| maskClosable | 点击蒙层关闭 | boolean         | true     |

## 方法说明

| 属性       | 说明         | 默认值   |
| ---------- | ------------ | -------- |
| onClose    | 关闭         | () => {} |
| afterClose | 关闭动画结束 | () => {} |

## 行内调用

```javascript
Modal.pop({ title, content, confirm, cancel, maskClosable, onConfirm, onCancel });
```
