# Flex

Flex 布局

```
// flex Wrap
const flexWrap = PropTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse']);

// Flex Direction
const flexDirection = PropTypes.oneOf(['row', 'row-reverse', 'column', 'column-reverse']);

// Flex Justify
const flexJustify = PropTypes.oneOf([
  '',
  'flex-start',
  'flex-end',
  'center',
  'baseline',
  'space-between',
  'space-around',
  'stretch',
]);

// Flex Align
const flexAlign = PropTypes.oneOf(['', 'space-between', 'flex-start', 'flex-end', 'center', 'space-around', 'stretch']);

```

## Flex 属性说明

| 属性      | 说明            | 类型                              | 默认值   |
| --------- | --------------- | --------------------------------- | -------- |
| direction | flex-direct     | flexDirection                     | `row`    |
| wrap      | flex-wrap       | flexWrap                          | `nowrap` |
| justify   | justify-content | flexJustify                       | ``       |
| align     | align-items     | flexAlign                         | ``       |
| padding   | padding         | [number, string],最多可定义四个值 | [0]      |
| height    | 高度            | [number, string]                  | `auto`   |
| width     | 宽度            | [number, string]                  | `auto`   |

## FlexItem 属性说明

| 属性   | 说明        | 类型 默认值 |
| ------ | ----------- | ----------- |
| flex   | flex 占位   | number      | 1 |
| grow   | flex grow   | number      | 0 |
| shrink | flex shrink | number      | 1 |
| align  | align-self  | flexAlign   | `` |
