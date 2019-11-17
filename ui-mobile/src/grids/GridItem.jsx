/* eslint-disable react/no-unused-prop-types */
/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-21 11:42:44
 * Copyright © Leedarson. All rights reserved.
 */

import React from 'react';
import PropTypes from 'prop-types';

class GridItem extends React.PureComponent {}

GridItem.defaultProps = {
  cols: 1,
};
GridItem.propTypes = {
  cols: PropTypes.number,
  children: PropTypes.node.isRequired,
};

export default GridItem;
