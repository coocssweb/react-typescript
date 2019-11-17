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

$Toast.success(content, duration, delay, onClose);

$Toast.failure(content, duration, delay, onClose);

$Toast.loading(content, duration, delay, onClose);

// 销毁
$Toast.destroy();
```

## 待开发

```javascript
$Toast.spin(content, duration, delay, onClose);
```
