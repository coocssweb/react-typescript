/* eslint-disable react/prop-types */
/* eslint-disable react/default-props-match-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import uiPropTypes from '../propTypes';
import Shape from './Shape';

const Circle = ({ children, display, shadow, fill, width, padding, margin, actived, ...restProps }) => {
  return (
    <Shape
      fill={fill}
      display={display}
      shadow={shadow}
      width={width}
      radius="50%"
      padding={padding}
      margin={margin}
      actived={actived}
      {...restProps}
    >
      {children}
    </Shape>
  );
};

Circle.defaultProps = {
  position: 'relative',
  display: 'block',
  shadow: 'none',
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto',
  width: '100%',
  fill: 'surface',
  padding: [0],
  margin: [0],
  align: 'left',
  actived: false,
  children: null,
};

Circle.propTypes = {
  position: PropTypes.oneOf(['relative', 'absolute']),
  display: PropTypes.oneOf(['block', 'inline-block']),
  shadow: uiPropTypes.shadow,
  top: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  right: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  bottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  left: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  padding: PropTypes.arrayOf(PropTypes.number),
  margin: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
  align: uiPropTypes.textAlign,
  actived: PropTypes.bool,
  children: PropTypes.node,
};

export default Circle;
