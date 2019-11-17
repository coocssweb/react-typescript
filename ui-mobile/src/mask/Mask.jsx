/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-15 11:02:59
 * Copyright © Leedarson. All rights reserved.
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StyledMask from './StyledMask';

const Mask = ({ type, visible, onClick }) => {
  const [maskVisible] = useState(visible);
  // TODO，逻辑实现
  useEffect(() => {}, []);
  return <StyledMask type={type} visible={maskVisible} onClick={onClick} />;
};

Mask.defaultProps = {
  type: 'black',
  visible: false,
  onClick: () => {},
};

Mask.propTypes = {
  type: PropTypes.oneOf(['transparent', 'black', 'white']),
  visible: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Mask;
