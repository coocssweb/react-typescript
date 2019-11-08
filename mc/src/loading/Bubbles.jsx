import React from 'react';
import PropTypes from 'prop-types';
import { StyledBubbles, StyledBubblesItem } from './StyledBubbles';

const Bubbles = ({ color, size }) => {
  return (
    <StyledBubbles>
      <StyledBubblesItem key="1" delay="-.3s" colored={color} size={size} />
      <StyledBubblesItem key="2" delay="-0.15s" colored={color} size={size} />
      <StyledBubblesItem key="3" last delay="0s" colored={color} size={size} />
    </StyledBubbles>
  );
};

Bubbles.defaultProps = {
  color: '#fff',
  size: 48,
};

Bubbles.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
};

export default Bubbles;
