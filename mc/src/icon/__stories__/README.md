# Icon

Icon， 支持 Styling component

```javascript
const PROP_TYPES_COLOR: [
'transparent',
'primary',
'secondary',
'info',
'success',
'error',
'warn',
'background',
'surface',
'neuter50',
'neuter100',
'neuter200',
'neuter300',
'neuter400',
'neuter500',
'neuter600',
'neuter700',
'neuter800',
'neuter900',
];

const _size = {
  small: 48,
  medium: 64,
  large: 120,
};
```

## 属性说明

| 属性     | 说明                               | 类型   | 默认值 |
| -------- | ---------------------------------- | ------ | ------ |
| color    | 颜色 PROP_TYPES_COLOR              | string | ``     |
| size     | icon 大小                          | string | small  |
| fontSize | icon 大小, 会转为 rem，优先于 size | number |        |
