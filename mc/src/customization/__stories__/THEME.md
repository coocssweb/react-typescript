# Theme

主题支持

## rem 支持

用于特殊的字号，长度

```css
.demo{
    ${({theme}) => css`
      font-size: ${theme.pxToRem(50)};
    `}
}
```

## space 支持

用于间距计算，4px 的倍数

```css
.demo{
    ${({theme}) => css`
      width: ${theme.space(3)};
    `}
}
```

## color 支持

用于间距计算，4px 的倍数

```css
.demo{
    ${({theme}) => css`
      color: ${theme.primary.main};
      color: ${theme.surface.main};
      color: ${theme.neuter[100]};
    `}
}
```

## font 支持

用于常用 font 的设置

```css
.demo{
    ${({theme}) => css`
      ${{ ...theme.h1 }}
    `}
}
```

## border-radius 支持

用于常用 font 的设置

```css
.demo{
    ${({theme}) => css`
      border-radius: theme.borderRadius[2];
      border-radius: theme.borderRadius[4];
      border-radius: theme.borderRadius[8];
    `}
}
```

## box-shadow 支持

用于常用阴影，待补充

```css
.demo{
    ${({theme}) => css`

    `}
}
```
