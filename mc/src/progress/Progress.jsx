/* eslint-disable react/forbid-prop-types */
/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-22 14:22:03
 * Copyright © Leedarson. All rights reserved.
 */

import React from 'react';
import PropTypes from 'prop-types';
import Line from './Line';
import Circle from './Circle';

const Progress = ({ type, percent, ...restProps }) => {
  let finalPercent = Math.min(100, percent);
  finalPercent = Math.max(0, percent);

  return type === 'line' ? (
    <Line percent={finalPercent} {...restProps} />
  ) : (
    <Circle percent={finalPercent} {...restProps} />
  );
};

Progress.defaultProps = {
  type: 'line',
  percent: 0,
};

Progress.propTypes = {
  type: PropTypes.oneOf(['line', 'circle']),
  percent: PropTypes.number,
};

export default Progress;
