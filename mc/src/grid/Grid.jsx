/* eslint-disable react/no-array-index-key */

/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-21 12:04:33
 * Copyright © Leedarson. All rights reserved.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { StyledGrid } from './StyledGrid';
import GridContext from './GridContext';

const _width = window.innerWidth;
let _gridRatio = 1;
if (_width >= 720) {
  _gridRatio = 1.6;
} else if (_gridRatio > 840) {
  _gridRatio = 3;
}

const Grid = ({ children, cols, border, spacing, ...restProps }) => {
  const value = {
    cols: Math.ceil(_gridRatio * cols, 10),
    spacing,
    border,
  };

  return (
    <StyledGrid border={border} {...restProps}>
      <GridContext.Provider value={value}>{children}</GridContext.Provider>
    </StyledGrid>
  );
};

Grid.defaultProps = {
  cols: 2,
  border: false,
  spacing: 0,
};

Grid.propTypes = {
  children: PropTypes.node.isRequired,
  cols: PropTypes.number,
  spacing: PropTypes.number,
  border: PropTypes.bool,
};

export default Grid;
