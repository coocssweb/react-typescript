/* eslint-disable react/require-default-props */
/* eslint-disable react/prop-types */
import * as React from 'react';
import * as PropTypes from 'prop-types';
import styled from 'styled-components';
import { useDrag } from './gesture';
const  { useCallback, useMemo, useRef }  = React;

const StyledDragElement = styled.div`
  will-change: transform;
`;

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
  const axis = useRef('');
  const offsetCurrent = useRef(offset);
  offsetCurrent.current = offset;
  const [left, top] = offset;

  const bindDrag = useCallback(useDrag(({event, down, direction: [dx, dy], first, last, movement: [mx, my], memo = offset }) => {
      event.stopPropagation();
      event.preventDefault();
      // 只允许在固定的方向上拖动
      axis.current = Math.abs(dx) > Math.abs(dy) ? 'x' : 'y';
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

      const [x, y] = memo;
      let finalLeft = !direction || direction === 'x' ? x + mx : x;
      let finalTop = !direction || direction === 'y' ? y + my : y;
    

      if (bounds) {
        finalLeft = Math.max(finalLeft, bounds[3]);
        finalLeft = Math.min(finalLeft, bounds[1]);

        finalTop = Math.max(finalTop, bounds[0]);
        finalTop = Math.min(finalTop, bounds[2]);
      }

      if (down) {
        onDrag([finalLeft, finalTop]);
      }

      return memo;
    }, {
      event:  { passive: false, capture: true }
    }), []);
    
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
      touchAction="none" 
      style={{ transform: `translate3d(${left}px, ${top}px, 0px)`, ...style }}
    >
      {children}
    </StyledDragElement>
  );
};

Drag.defaultProps = {
  onDragStart: () => {},
  onDrag: () => {},
  onDragEnd: () => {},
  offset: [0, 0],
  disabled: false,
  direction: 'x'
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
