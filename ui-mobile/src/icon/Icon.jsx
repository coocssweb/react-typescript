/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-15 10:58:54
 * Copyright © Leedarson. All rights reserved.
 */

import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ type, className, ...restProps }) => {
  return <i className={`LdsIcon-${type} ${className}`} {...restProps} />;
};
Icon.defaultProps = {
  className: '',
};

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Icon;
