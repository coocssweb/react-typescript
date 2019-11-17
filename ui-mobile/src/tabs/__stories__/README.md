# Tabs

## Tabs 属性说明

| 属性         | 说明                 | 类型                  | 默认值                                |
| ------------ | -------------------- | --------------------- | ------------------------------------- |
| tabs         | tab 数据             | arrayOf[{key, title}] | []                                    |
| onChange     | tab 改变             | func                  | () => {}                              |
| renderTabBar | Tabbar 自定义 render | func                  | props => <DefaultTabBar {...props} /> |
