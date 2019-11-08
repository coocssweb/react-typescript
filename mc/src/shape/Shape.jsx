/* eslint-disable react/prop-types */
/* eslint-disable react/default-props-match-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import uiPropTypes from '../propTypes';
import { getColor, formatUnits, getActiveColor } from '../styledUtils';

const StyledShape = styled.div`
  position: relative;
  padding-bottom: 100%;
  transition: all 0.2s ease;

  ${({
    theme,
    radius,
    display,
    shadow,
    position,
    top,
    right,
    bottom,
    left,
    fill,
    margin,
    width,
    activable,
    actived,
  }) => css`
    display: ${display};
    position: ${position};
    top: ${theme.pxToRem(top)};
    right: ${theme.pxToRem(right)};
    bottom: ${theme.pxToRem(bottom)};
    left: ${theme.pxToRem(left)};
    width: ${theme.pxToRem(width)};
    padding-bottom: ${theme.pxToRem(width)};
    border-radius: ${theme.pxToRem(radius)};
    background: ${getColor(theme, fill)};
    margin: ${formatUnits(margin, theme.pxToRem)};
    box-shadow: ${theme.shadow[shadow]};

    ${activable === 1 &&
      css`
        &:active {
          background: ${getActiveColor(theme, fill)};
        }
      `}

    ${actived === 1 &&
      css`
        background: ${getActiveColor(theme, fill)};
      `}
  `}
`;

const StyledShapeContent = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  ${({ theme, padding }) => css`
    padding: ${formatUnits(padding, theme.pxToRem)};
  `}

  ${({ align }) => css`
    ${align === 'center' &&
      css`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      `}
  `}
`;

const Shape = ({
  children,
  position,
  shadow,
  top,
  right,
  bottom,
  left,
  fill,
  width,
  radius,
  padding,
  margin,
  align,
  actived,
  ...restProps
}) => {
  const { onClick, as } = restProps;
  return (
    <StyledShape
      fill={fill}
      shadow={shadow}
      position={position}
      top={top}
      right={right}
      bottom={bottom}
      left={left}
      width={width}
      radius={radius}
      margin={margin}
      activable={+(!!onClick || !!as)}
      as={as}
      actived={+actived}
      {...restProps}
    >
      <StyledShapeContent padding={padding} align={align}>
        {children}
      </StyledShapeContent>
    </StyledShape>
  );
};

Shape.defaultProps = {
  position: 'relative',
  display: 'block',
  shadow: 'none',
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto',
  fill: 'surface',
  width: '100%',
  radius: 0,
  padding: [0],
  margin: [0],
  align: 'center',
  actived: false,
  children: null,
};

Shape.propTypes = {
  position: PropTypes.oneOf(['relative', 'absolute']),
  display: PropTypes.oneOf(['block', 'inline-block']),
  shadow: uiPropTypes.shadow,
  top: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  right: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  bottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  left: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  radius: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  padding: PropTypes.arrayOf(PropTypes.number),
  margin: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
  align: uiPropTypes.textAlign,
  actived: PropTypes.bool,
  children: PropTypes.node,
};

export default Shape;
