/* eslint-disable react/require-default-props */
/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-15 10:58:54
 * Copyright © Leedarson. All rights reserved.
 */

import React from 'react';
import PropTypes from 'prop-types';
import Styled, { css } from 'styled-components';
import uiPropTypes from '../propTypes';
import { getColor } from '../styledUtils';

const _size = {
  small: 48,
  medium: 64,
  large: 120,
};

const StyleIcon = Styled.i`
  line-height:1;
  
  ${({ colored, size, fontSize, theme }) => css`
    color: ${getColor(theme, colored)};
    font-size: ${theme.pxToRem(fontSize || _size[size])} !important;
  `}
`;

const Icon = ({ type, className, color, size, fontSize, ...restProps }) => {
  return (
    <StyleIcon
      type={type}
      colored={color}
      size={size}
      fontSize={fontSize}
      className={`LdsIcon-${type} ${className}`}
      {...restProps}
    />
  );
};

Icon.defaultProps = {
  className: '',
  size: 'small',
};

Icon.propTypes = {
  type: uiPropTypes.icon.isRequired,
  className: PropTypes.string,
  color: uiPropTypes.color,
  size: uiPropTypes.size,
  fontSize: PropTypes.number,
};

export default Icon;
