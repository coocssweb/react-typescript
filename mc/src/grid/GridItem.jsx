/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-21 11:42:44
 * Copyright © Leedarson. All rights reserved.
 */

import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { StyledGridItem, StyledGridItemContent } from './StyledGrid';
import GridContext from './GridContext';

const GridItem = ({ children, cols, ...restProps }) => {
  const { border, cols: baseCols, spacing } = useContext(GridContext);
  return (
    <StyledGridItem baseCols={baseCols} spacing={spacing} cols={cols} border={border} {...restProps}>
      <StyledGridItemContent>{children}</StyledGridItemContent>
    </StyledGridItem>
  );
};

GridItem.defaultProps = {
  cols: 1,
};
GridItem.propTypes = {
  cols: PropTypes.number,
  children: PropTypes.node.isRequired,
};

export default GridItem;
