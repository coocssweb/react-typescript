# Badge

徽章，对其子元素生效，支持 Styling component

## 属性说明

| 属性      | 说明                                                                     | 类型   | 默认值     |
| --------- | ------------------------------------------------------------------------ | ------ | ---------- |
| count     | Badge 中显示的内容                                                       | number | null       |
| color     | 徽章类型，可选值为 `Color 颜色`                                          | string | 'error'    |
| size      | 按钮大小，可选值为 `large`/`medium`/`small`                              | string | 'large'    |
| position  | 不含子节点时设置为`relative`可显示在行内，可选值为 `absolute`/`relative` | string | 'absolute' |
| max       | 计数最大值，超出时显示 xxx+                                              | number | 99         |
| invisible | 是否显示 Badge                                                           | bool   | null       |
| showZero  | 当 content 为 0 时，是否显示 Badge                                       | bool   | false      |
