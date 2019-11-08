/* eslint-disable react/require-default-props */
/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-15 11:02:59
 * Copyright © Leedarson. All rights reserved.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { formatUnits, getColor } from '../styledUtils';
import uiPropTypes from '../propTypes';

const StyledBox = styled.div`
  box-sizing: border-box;
  ${({
    display,
    position,
    top,
    right,
    bottom,
    left,
    align,
    margin,
    padding,
    width,
    minwidth,
    maxwidth,
    height,
    minheight,
    maxheight,
    theme,
    fill,
    borderwidth,
    bordercolor,
    radius,
    activable,
    overflow,
  }) => css`
    position: ${position};
    top: ${theme.pxToRem(top)};
    right: ${theme.pxToRem(right)};
    bottom: ${theme.pxToRem(bottom)};
    left: ${theme.pxToRem(left)};
    display: ${display};
    text-align: ${align};
    width: ${width && theme.pxToRem(width)};
    min-width: ${minwidth && theme.pxToRem(minwidth)};
    max-width: ${maxwidth && theme.pxToRem(maxwidth)};
    height: ${height && theme.pxToRem(height)};
    min-height: ${minheight && theme.pxToRem(minheight)};
    max-height: ${maxheight && theme.pxToRem(maxheight)};
    margin: ${formatUnits(margin, theme.pxToRem)};
    padding: ${formatUnits(padding, theme.pxToRem)};
    border: ${borderwidth && `${theme.pxToRem(borderwidth)} solid ${getColor(theme, bordercolor)}`};
    border-radius: ${theme.pxToRem(radius)};
    background: ${getColor(theme, fill)};
    transition: color 0.2s ease;
    overflow: ${overflow};
    ${activable === 1 &&
      css`
        &:active {
          color: ${getColor(theme, 'primary')};
        }
      `}
  `}
`;

const Box = ({
  overflow,
  display,
  position,
  top,
  right,
  bottom,
  left,
  align,
  margin,
  padding,
  width,
  height,
  children,
  fill,
  borderColor,
  borderWidth,
  minHeight,
  maxHeight,
  minWidth,
  maxWidth,
  ...restProps
}) => {
  const { onClick, as } = restProps;

  return (
    <StyledBox
      overflow={overflow}
      display={display}
      position={position}
      top={top}
      right={right}
      bottom={bottom}
      left={left}
      align={align}
      margin={margin}
      padding={padding}
      width={width}
      height={height}
      minheight={minHeight}
      maxheight={maxHeight}
      minwidth={minWidth}
      maxwidth={maxWidth}
      fill={fill}
      bordercolor={borderColor}
      borderwidth={borderWidth}
      activable={+(!!onClick || !!as)}
      {...restProps}
    >
      {children}
    </StyledBox>
  );
};

Box.defaultProps = {
  overflow: 'initial',
  fill: 'transparent',
  position: 'relative',
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto',
  radius: 0,
  display: 'block',
  align: 'left',
  borderColor: 'neuter400',
  margin: [0],
  padding: [0],
  children: '',
};

Box.propTypes = {
  overflow: PropTypes.oneOf(['auto', 'hidden', 'initial']),
  position: PropTypes.oneOf(['relative', 'absolute', 'fixed']),
  top: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  right: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  bottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  left: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  radius: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  borderWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  borderColor: uiPropTypes.color,
  fill: uiPropTypes.color,
  display: uiPropTypes.display,
  align: uiPropTypes.textAlign,
  margin: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
  padding: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  minHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  maxHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  minWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  maxWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  children: PropTypes.node,
};

export default Box;
