/*
 * @Author: lixinxiang@leedarson.com
 * @Date: 2019-09-16 19:30:15
 * Copyright © Leedarson. All rights reserved.
 */

import React from 'react';
import PropTypes from 'prop-types';
import RmcSwipeOut from 'rc-swipeout';
import StyledSwipeOut from './StyledSwipeOut';

const SwipeOut = props => {
  const { left, right, autoClose, disabled, onOpen, onClose, children } = props;
  return (
    <StyledSwipeOut>
      <RmcSwipeOut
        prefixCls={SwipeOut.prefixCls}
        left={left}
        right={right}
        autoClose={autoClose}
        disabled={disabled}
        onOpen={onOpen}
        onClose={onClose}
      >
        {children}
      </RmcSwipeOut>
    </StyledSwipeOut>
  );
};

SwipeOut.prefixCls = 'LdsSwipeOut';

SwipeOut.defaultProps = {
  autoClose: false,
  disabled: false,
  left: [],
  right: [],
  onClose: () => {},
  onOpen: () => {},
};

SwipeOut.propTypes = {
  children: PropTypes.node.isRequired,
  autoClose: PropTypes.bool,
  disabled: PropTypes.bool,
  left: PropTypes.arrayOf(PropTypes.object),
  right: PropTypes.arrayOf(PropTypes.object),
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
};

export default SwipeOut;
