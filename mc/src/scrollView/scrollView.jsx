/*
 * @Author: caozhihui@leedarson.com
 * @Date: 2019/8/29
 * Copyright © Leedarson. All rights reserved.
 */

import React, { useRef, useEffect } from 'react';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';
import StyledScrollView from './StyledScrollView';

const ScrollView = props => {
  const { onScroll, onEndReached, threshold, children } = props;
  const viewRef = useRef();
  const timerRef = useRef(null);

  useEffect(() => {
    const container = viewRef.current;
    const { clientHeight, scrollHeight } = container;

    const handleScroll = e => {
      const { scrollTop } = container;
      if (scrollHeight - threshold <= clientHeight + scrollTop) {
        clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => {
          onEndReached();
        }, 100);
      }
      onScroll(e);
    };
    container.addEventListener('scroll', handleScroll);

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, [onEndReached, onScroll, threshold]);

  return (
    <StyledScrollView
      ref={vieElement => {
        viewRef.current = vieElement;
      }}
    >
      <div>{children}</div>
    </StyledScrollView>
  );
};

ScrollView.defaultProps = {
  onScroll: () => {},
  onEndReached: () => {},
  threshold: 200,
};

ScrollView.propTypes = {
  onScroll: PropTypes.func,
  onEndReached: PropTypes.func,
  threshold: PropTypes.number,
  children: PropTypes.node.isRequired,
};

export default withTheme(ScrollView);
