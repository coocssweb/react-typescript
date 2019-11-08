import React, { useRef, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useGesture } from './gesture';
import { EMPTY_FUNCTION } from '../constants';

const LongPress = ({ children, onPress }) => {
  const timer = useRef(null);

  const bindTouch = useCallback(
    useGesture({
      // 触屏开始
      onDragStart: () => {
        timer.current = setTimeout(() => {
          onPress();
          clearTimeout(timer.current);
          timer.current = null;
        }, 1000);
      },
      // 触屏结束
      onDragEnd: () => {
        if (timer.current) {
          clearTimeout(timer.current);
          timer.current = null;
        }
      },
    }),
    [],
  );

  const touchProps = useMemo(() => {
    return bindTouch();
  }, [bindTouch]);

  return <div {...touchProps}>{children}</div>;
};

LongPress.defaultProps = {
  onPress: EMPTY_FUNCTION,
};

LongPress.propTypes = {
  children: PropTypes.node.isRequired,
  onPress: PropTypes.func,
};

export default LongPress;
