/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-21 11:43:24
 * Copyright © Leedarson. All rights reserved.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { setRightArrow } from '../styled-engine';

const cellFooterArrow = ({ theme }) => css`
  padding-right: ${theme.cellInnerPadding}px;
  ${setRightArrow('8px', '#b2b2b2', '2px')}
`;

const StyledCellFooter = styled.div`
  text-align: right;
  position: relative;
  ${({ arrow, theme }) => css`
    color: ${theme.textColorTips};
    ${arrow && cellFooterArrow({ theme })}
  `}
`;

const CellFooter = props => {
  const { children, arrow } = props;
  return <StyledCellFooter arrow={arrow}>{children}</StyledCellFooter>;
};

CellFooter.defaultProps = {
  arrow: false,
};

CellFooter.propTypes = {
  children: PropTypes.node.isRequired,
  arrow: PropTypes.bool,
};

export default CellFooter;
