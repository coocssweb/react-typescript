/*
 * @Author: yuxinyu@leedarson.com
 * @Date: 2019-08-27 11:34:41
 * Copyright © Leedarson. All rights reserved.
 */

import React from 'react';
import PropTypes from 'prop-types';
import uiPropTypes from '../propTypes';
import { StyledBadgeWrap, StyledBadge } from './StyledBadge';

const Badge = props => {
  const { children, count, color, size, max, showZero, position, invisible: invisibleProp, ...restProps } = props;

  let invisible = invisibleProp;
  if (invisibleProp == null && ((count === 0 && !showZero) || (count == null && size === 'large'))) {
    invisible = true;
  }

  let displayContent = '';
  if (size === 'large') {
    displayContent = count > max ? `${max}+` : count;
  }

  return (
    <StyledBadgeWrap {...restProps}>
      {children}
      <StyledBadge color={color} size={size} invisible={invisible} position={position}>
        {displayContent}
      </StyledBadge>
    </StyledBadgeWrap>
  );
};

Badge.propTypes = {
  children: PropTypes.node,
  count: PropTypes.number,
  color: uiPropTypes.color,
  position: PropTypes.oneOf(['absolute', 'relative']),
  size: uiPropTypes.size,
  invisible: PropTypes.bool,
  max: PropTypes.number,
  showZero: PropTypes.bool,
};

Badge.defaultProps = {
  children: null,
  count: null,
  color: 'error',
  position: 'absolute',
  size: 'large',
  max: 99,
  invisible: null,
  showZero: false,
};

export default Badge;
