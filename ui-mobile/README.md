# @leedarson/new-component

为了令用户的使用感知更加统一，leedson 前端团队创建的一套为 leedson 移动产品服务的组件库。

底层代码多为[react-component](http://react-component.github.io/badgeboard/)，上的代码。

注意，为了保证代码质量，减少测试成本，操作类的组件(如: Tab, Popup, Switch, Modal)，在 react-component 的基础上进行封装。

## 样式编码规范

推荐使用 BEM 的命名方式，配合 React 的组件使用，采用 Block-Element--modifier，`Block`、`Element`采用驼峰式的命名方式。出#root 节点外，不允许使用#id 和 tag 选择器。强烈推荐使用扁平化的写法，不要出现子选择器的写法。

**Example**

```jsx
// ListingCard.jsx
function ListingCard() {
  return (
    <article class="ListingCard ListingCard--featured">
      <h1 class="ListingCard-title">Adorable 2BR in the sunny Mission</h1>

      <div class="ListingCard-content">
        <p>Vestibulum id ligula porta felis euismod semper.</p>
      </div>
    </article>
  );
}
```

```css
/* ListingCard.css */
.ListingCard {
}
.ListingCard--featured {
}
.ListingCard-title {
}
.ListingCard-content {
}
```

```css
/* less/sass 属性编写顺序 */
/* z-index: 值采用 pop > mask ? navigation> content */
/* top -> right -> bottom -> left */
.selector {
  /* box属性,如: display, padding/margin, box-sizing, height/ width; */

  /* font属性,如: font-family, font-size, color, overflow, text-overflow, white-space, word-wrap; */

  /* border属性,如: border-type, border-size, border-color; */

  /* position属性,如: position, z-index(建议加注释), top/right/bottom/left, transform; */

  /* transition属性,如: transition-name, transition-delay; */

  /* animation,如: animation-name; */
}
```

#### Styled Component 编码规范

推荐简单的样式直接写在 react 组件文件内，如果是样式复杂的组件，建立新的样式文件。

**Example**

```jsx
/* Mask.jsx */
import React from 'react';
import PropTypes from 'prop-types';
import StyledMask from './StyledMask';

const Mask = ({ type, onClick }) => {
  return <StyledMask type={type} onClick={onClick} />;
};
```

```js
/* StyledMask.js */
import styled, { css } from 'styled-components';

// mask风格, ['transparent', 'white', 'black']
const maskType = {
  transparent: () => css`
    background: rgba(255, 255, 255, 0);
  `,
  white: theme => css`
    background: ${theme.maskWhite};
  `,
  black: theme => css`
    background: ${theme.maskBlack};
  `,
};

const StyledMask = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  ${({ type, theme }) => maskType[type](theme)}
`;

export default StyledMask;
```

## 颜色说明

主颜色采用设计稿提供的颜色，目前支持 default, primary, success, warn, danger 颜色，由于 mobile 端设计会相对简洁，适应一段时间后，可以删除不必要的主颜色，和对应的代码。

主颜色对应的&:active、&:disabled 颜色为 color mix 的形式自动生成的颜色，不用自己写。

## 组件列表

注意，开发列表暂时如下，组件库是为内部所有产品服务的，如果要添加新的组件，需要在前端团队群内提出来，和大家讨论是否有有必要加到组件库内。

```bash
    // done: ✔︎ , doing: - , plan: *
    ├──Button                       ✔︎ 按钮组件
    ├──Input                        ✔︎ 输入框组件
    ├──Cell                         ✔︎ 列表单元格
    ├──Flex                         ✔︎ Flex组件
    ├──Loading                      ✔︎ Loading组件
    ├──Mask                         ✔︎ Mask蒙层组件
    ├──WhiteSpace                   ✔︎ 上下间距
    ├──WingBlank                    ✔︎ 两侧空白
    ├──Slider                       ✔︎ 滑块
    ├──Tooltip                      ✔︎ 提示框
    ├──Modal                        ✔︎ Modal，Modal对话框
    ├──Pop                          ✔︎ Pop弹出框
    ├──Toast                        ✔︎ Toast，提示框
    ├──Tabs                         ︎︎︎✔︎ Tab
    ├──TabPage                     ︎︎ ︎✔︎ TabPage 页面导航
    ├──Icon                        ︎ ✔︎︎ Icon
    ├──Progress                     ︎✔︎︎  Progress 进度条(建议：应支持圆形和条状的)
    ├──Gesture                      ︎✔︎︎  手势系统
    ├──Sortable                     - 排序组件
    ├──RgbwSlider                   - RgbwSlider Rgbw 颜色选择器
    ├──CctSlider                    - CctSlider Cct 色温选择器
    ├──Switch                       ** Switch 开关
    ├──Radio                        ** Radio 单选
    ├──Checkbox                     ** Checkbox 单选
    ├──Badge                        * Badge 徽章
    ├──Text                         ** Text 输入框
    ├──Empty                        * Empty 空省（建议：包含各个列表数据的Empty）
    ├──Dropdown                     * Dropdown 下拉框
    ├──LazyImage                    * Lazy 懒加载图片
    ├──Picker                       * Picker 选择器
    ├──LoadMore                     * LoadMore（建议：应支持未开始，加载中，没有更多等状态）
```
