# Color

主题的颜色支持

```css
.demo{
    ${({theme}) => css`
      color: ${theme.neuter[700]};
      background: ${theme.primary.main};
    `}
}
```
