import * as PropTypes from 'prop-types';
import { THEME_COLORS, ICONS } from './constants';

// 按钮类型
const button = PropTypes.oneOf(['text', ...THEME_COLORS]);

// 颜色
const color = PropTypes.oneOf(THEME_COLORS);

// 文本
const typography = PropTypes.oneOf([
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'subtitle1',
  'subtitle2',
  'body1',
  'body2',
  'button',
  'caption',
  'overline',
]);

// 位置
const placement = PropTypes.oneOf(['top', 'right', 'bottom', 'left']);

// 尺寸大小
const size = PropTypes.oneOf(['small', 'medium', 'large']);

// 块显示模式
const display = PropTypes.oneOf(['block', 'inline-block', 'inline', 'none']);

// 方向
const direction = PropTypes.oneOf(['horizontal', 'vertical']);

// 文字对齐
const textAlign = PropTypes.oneOf(['left', 'center', 'right']);

// flex Wrap
const flexWrap = PropTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse']);

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

// Flex Direction
const flexDirection = PropTypes.oneOf(['row', 'row-reverse', 'column', 'column-reverse']);

// Position定位方式
const position = PropTypes.oneOf(['relative', 'absolute', 'fixed']);

// 阴影
const shadow = PropTypes.oneOf(['none', 'primary', 'error', 'normal']);

// 文字图标
const icon = PropTypes.oneOf(ICONS);

// 主题
const theme = PropTypes.shape({
  neuter: PropTypes.object,
  primary: PropTypes.object,
  secondary: PropTypes.object,
  background: PropTypes.object,
  surface: PropTypes.object,
  info: PropTypes.object,
  success: PropTypes.object,
  warn: PropTypes.object,
  error: PropTypes.object,
  mask: PropTypes.object,
  border: PropTypes.object,
  divider: PropTypes.string,
  fontEN: PropTypes.string,
  fontCN: PropTypes.string,
  fontDefault: PropTypes.string,
  borderRadius: PropTypes.object,
  pxToRem: PropTypes.func,
  space: PropTypes.func,
  h1: PropTypes.object,
  h2: PropTypes.object,
  h3: PropTypes.object,
  h4: PropTypes.object,
  h5: PropTypes.object,
  h6: PropTypes.object,
  subtitle1: PropTypes.object,
  subtitle2: PropTypes.object,
  body1: PropTypes.object,
  body2: PropTypes.object,
  button: PropTypes.object,
  caption: PropTypes.object,
  overline: PropTypes.object,
  fontWeightLight: PropTypes.string,
  fontWeightRegular: PropTypes.string,
  fontWeightMedium: PropTypes.string,
  fontWeightBold: PropTypes.string,
  shadow: PropTypes.object,
});

export default {
  button,
  color,
  typography,
  placement,
  size,
  display,
  direction,
  textAlign,
  flexAlign,
  flexWrap,
  flexDirection,
  flexJustify,
  icon,
  position,
  shadow,
  theme,
};
