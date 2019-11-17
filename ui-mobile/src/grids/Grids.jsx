/* eslint-disable react/no-array-index-key */

/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-21 12:04:33
 * Copyright © Leedarson. All rights reserved.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { StyledGrid, StyledGridItem } from './StyledGrid';

const Grid = ({ children, cols, lineColor }) => {
  return (
    <StyledGrid lineColor={lineColor}>
      {React.Children.map(children, (child, index) => {
        const { cols: childrenCols } = child.props;
        return (
          <StyledGridItem baseCols={cols} cols={childrenCols} lineColor={lineColor} key={`gridItem-${index}`}>
            {child.props.children}
          </StyledGridItem>
        );
      })}
    </StyledGrid>
  );
};

Grid.defaultProps = {
  cols: 3,
  lineColor: '#C7C7C7',
};

Grid.propTypes = {
  children: PropTypes.node.isRequired,
  cols: PropTypes.number,
  lineColor: PropTypes.string,
};

export default Grid;
