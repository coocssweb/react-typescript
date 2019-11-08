/* eslint-disable react/require-default-props */
/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-15 11:02:59
 * Copyright © Leedarson. All rights reserved.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import propTypes from '../propTypes';
import { getColor, formatUnits } from '../styledUtils';

const StyledTypography = styled.div`
  ${({
    variant,
    display,
    fontSize,
    fontWeight,
    colored,
    textalign,
    theme,
    margin,
    padding,
    lineheight,
    wordbreak,
    whitespace,
    nowrap,
  }) => css`
    text-align: ${textalign};
    color: ${getColor(theme, colored)};
    margin: ${formatUnits(margin, theme.pxToRem)};
    padding: ${formatUnits(padding, theme.pxToRem)};

    ${{ ...theme[variant] }}

    ${fontSize &&
      css`
        font-size: ${theme.pxToRem(fontSize)};
      `};

    ${fontWeight &&
      css`
        font-weight: ${fontWeight};
      `};

    ${display &&
      css`
        display: ${display};
      `};

    ${lineheight &&
      css`
        line-height: ${lineheight};
      `}

    ${wordbreak &&
      css`
        word-break: ${wordbreak};
      `}

    ${whitespace &&
      css`
        white-space: ${whitespace};
      `}

    ${nowrap === 1 &&
      css`
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      `}
  `}
`;

// 标签映射
const _as = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'h6',
  subtitle2: 'h6',
  body1: 'div',
  body2: 'div',
  button: 'span',
  caption: 'span',
  overline: 'span',
};

const Typography = ({
  nowrap,
  variant,
  display,
  size,
  weight,
  color,
  align,
  margin,
  padding,
  lineHeight,
  wordBreak,
  whiteSpace,
  forwardedRef,
  children,
  ...restProps
}) => {
  return (
    <StyledTypography
      as={_as[variant]}
      variant={variant}
      display={display}
      fontSize={size}
      fontWeight={weight}
      colored={color}
      textalign={align}
      margin={margin}
      padding={padding}
      lineheight={lineHeight}
      wordbreak={wordBreak}
      whitespace={whiteSpace}
      nowrap={+nowrap}
      ref={forwardedRef}
      {...restProps}
    >
      {children}
    </StyledTypography>
  );
};

Typography.defaultProps = {
  variant: 'body1',
  margin: [],
  padding: [0],
  wordBreak: 'break-word',
  nowrap: false,
  forwardedRef: null,
  children: null,
};

Typography.propTypes = {
  nowrap: PropTypes.bool,
  variant: propTypes.typography,
  children: PropTypes.node,
  size: PropTypes.number,
  weight: PropTypes.number,
  color: PropTypes.string,
  align: propTypes.textAlign,
  display: propTypes.display,
  margin: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
  padding: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
  lineHeight: PropTypes.number,
  wordBreak: PropTypes.oneOf(['break-all', 'break-word', 'keep-all', 'normal']),
  whiteSpace: PropTypes.string,
  forwardedRef: PropTypes.oneOfType([PropTypes.object]),
};

export default Typography;
