/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-21 12:10:55
 * Copyright © Leedarson. All rights reserved.
 */

import React from 'react';
import PropTypes from 'prop-types';
import RCDropdown from 'rc-dropdown';
import 'rc-dropdown/assets/index.css';

const Dropdown = ({ overlay, trigger, animation, ...restProps }) => {
  return <RCDropdown overlay={overlay} trigger={trigger} animation={animation} {...restProps} />;
};

Dropdown.defaultProps = {
  overlay: null,
  trigger: ['click'],
  animation: 'slide-up',
};

Dropdown.propTypes = {
  overlay: PropTypes.node,
  trigger: PropTypes.arrayOf(PropTypes.string),
  animation: PropTypes.string,
};

export default Dropdown;
