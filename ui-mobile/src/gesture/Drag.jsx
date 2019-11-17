/* eslint-disable react/prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import React, { useCallback, useMemo, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useDrag } from './gesture';

const StyledDragElement = styled.div``;

const Drag = ({ children, offset, direction, onDragStart, onDrag, onDragEnd, style }) => {
  const axis = useRef();

  const bindDrag = useCallback(
    useDrag(props => {
      const { delta, direction: gestureDirection, down, first, last, memo = offset } = props;

      // 只允许在固定的方向上拖动
      if (!axis.current) {
        if (Math.abs(gestureDirection[0]) > Math.abs(gestureDirection[1])) {
          axis.current = 'x';
        } else if (Math.abs(gestureDirection[1]) > Math.abs(gestureDirection[0])) {
          axis.current = 'y';
        }
      }
      if (first) {
        onDragStart();
      }
      if (last) {
        axis.current = null;
        onDragEnd();
      }
      if (direction && axis.current !== direction) {
        return memo;
      }
      const [x, y] = delta;
      const [left, top] = memo;
      const finalLeft = !direction || direction === 'x' ? left + x : left;
      const finalTop = !direction || direction === 'y' ? top + y : top;
      if (down) {
        onDrag([finalLeft, finalTop]);
      }

      return memo;
    }),
    [],
  );
  const [left, top] = offset;

  // dragProps
  const dragProps = useMemo(() => {
    return bindDrag();
  }, [bindDrag]);

  return (
    <StyledDragElement {...dragProps} style={{ transform: `translate3d(${left}px, ${top}px, 0px)`, ...style }}>
      {children}
    </StyledDragElement>
  );
};
Drag.defaultProps = {
  onDragStart: () => {},
  onDrag: () => {},
  onDragEnd: () => {},
  offset: [0, 0],
};

Drag.propTypes = {
  children: PropTypes.node.isRequired,
  onDragStart: PropTypes.func,
  onDrag: PropTypes.func,
  onDragEnd: PropTypes.func,
  offset: PropTypes.array,
  direction: PropTypes.oneOf(['x', 'y']),
  boundaries: PropTypes.array,
};

export default Drag;
