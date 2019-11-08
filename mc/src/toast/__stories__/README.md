# Toast

Toast 提示框

## 全局方法

```javascript
/**
 * content 内容
 * duration 持续时间, 1 equal 100ms, 默认2.5
 * delay delay时间, 1 equal 100ms, 在delay时间内调用destroy，不会显示提示
 * onClose，关闭后回调
 */

$Toast.info(content, duration, delay, onClose);

$Toast.success(duration, delay, onClose);

$Toast.failure(duration, delay, onClose);

$Toast.loading({ type = 'bubbles', fill = 'transparent', color = 'primary' }, delay, onClose);

$Toast.modal({ title, content, confirm, cancel, maskClosable, onConfirm, onCancel })

// 销毁
$Toast.destroy();
```
