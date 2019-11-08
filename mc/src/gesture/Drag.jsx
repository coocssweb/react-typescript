/* eslint-disable react/require-default-props */
/* eslint-disable react/prop-types */
import React, { useCallback, useMemo, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useDrag } from './gesture';
import { EMPTY_FUNCTION } from '../constants';

const StyledDragElement = styled.div``;

const Drag = ({
  children,
  disabled,
  bounds,
  offset,
  direction,
  onDragStart,
  onDrag,
  onDragEnd,
  style,
  ...restProps
}) => {
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
      // 首次，触发 onDragStart
      if (first) {
        onDragStart();
      }
      // 最后一次，触发 onDragEnd
      if (last) {
        axis.current = null;
        onDragEnd();
      }

      // 记住上一次的位置
      if (direction && axis.current !== direction) {
        return memo;
      }
      const [x, y] = delta;
      const [left, top] = memo;
      let finalLeft = !direction || direction === 'x' ? left + x : left;
      let finalTop = !direction || direction === 'y' ? top + y : top;

      if (bounds) {
        finalLeft = Math.max(finalLeft, bounds[3]);
        finalLeft = Math.min(finalLeft, bounds[1]);

        finalTop = Math.max(finalTop, bounds[0]);
        finalTop = Math.min(finalTop, bounds[2]);
      }

      if (down) {
        onDrag([finalLeft, finalTop]);
      }

      // 记住上一次的位置
      return memo;
    }),
    [],
  );
  const [left, top] = offset;

  // dragProps
  const dragProps = useMemo(() => {
    if (disabled) {
      return () => {};
    }
    return bindDrag();
  }, [bindDrag, disabled]);

  return (
    <StyledDragElement
      {...dragProps}
      {...restProps}
      style={{ transform: `translate3d(${left}px, ${top}px, 0px)`, ...style }}
    >
      {children}
    </StyledDragElement>
  );
};

Drag.defaultProps = {
  onDragStart: EMPTY_FUNCTION,
  onDrag: EMPTY_FUNCTION,
  onDragEnd: EMPTY_FUNCTION,
  offset: [0, 0],
  disabled: false,
};

Drag.propTypes = {
  children: PropTypes.node.isRequired,
  bounds: PropTypes.arrayOf(PropTypes.number),
  onDragStart: PropTypes.func,
  onDrag: PropTypes.func,
  onDragEnd: PropTypes.func,
  offset: PropTypes.arrayOf(PropTypes.number),
  direction: PropTypes.oneOf(['x', 'y']),
  disabled: PropTypes.bool,
};

export default Drag;
