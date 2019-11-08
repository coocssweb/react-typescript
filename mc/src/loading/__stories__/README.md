# Loading

加载中说明

```javascript
export const PROP_TYPES_TYPE = [
  'primary',
  'secondary',
  'info',
  'success',
  'error',
  'warn',
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
```

## 属性说明

| 属性  | 说明                                      | 类型   | 默认值  |
| ----- | ----------------------------------------- | ------ | ------- |
| color | loading 颜色 ,PROP_TYPES_TYPE，或特定颜色 | string | #fff    |
| size  | loading 大小，会转为 rem                  | number | 48      |
| type  | ['bubbles', 'bars', 'spokes', 'spin']     | string | bubbles |
