# Box 盒子

盒子布局，可以自定义 margin, padding, width, height 的盒子布局

## Box 属性说明

| 属性        | 说明              | 类型                                | 默认值      |
| ----------- | ----------------- | ----------------------------------- | ----------- |
| display     | display           | string[`block`, `inline-block`]     | `block`     |
| margin      | margin            | number[],最多可定义四个值           | [0]         |
| padding     | padding           | number[],最多可定义四个值           | [0]         |
| width       | width,会转为 rem  | number                              | null        |
| height      | height,会转为 rem | number                              | null        |
| align       | 内容对齐          | string[`left`, `center`, `right`]   | `left`      |
| position    | 定位方式          | string`absolute`,`relative`,`fixed` | `relative`  |
| top         | top 定位          | string / number                     | `auto`      |
| right       | right 定位        | string / number                     | `auto`      |
| bottom      | bottom 定位       | string / number                     | `auto`      |
| left        | left 定位         | string / number                     | `auto`      |
| fill        | 填充颜色          | string                              | `#fff`      |
| radius      | 圆角幅度          | number                              | [0]         |
| borderWidth | 边框大小          | string / number                     | [0]         |
| borderColor | 边框颜色          | string                              | `neuter400` |
