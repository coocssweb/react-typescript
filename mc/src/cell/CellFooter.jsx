/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-21 11:43:24
 * Copyright © Leedarson. All rights reserved.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { setRightArrow } from '../styledUtils';
import uiPropTypes from '../propTypes';

const cellFooterArrow = ({ theme }) => css`
  padding-right: ${theme.pxToRem(48)};
  ${setRightArrow('8px', '#b2b2b2', '2px')}
`;

const StyledCellFooter = styled.div`
  text-align: right;
  position: relative;

  ${({ arrow, align, theme }) => css`
    align-self: ${align};
    color: ${theme.neuter[700]};
    ${arrow && cellFooterArrow({ theme })}
    ${{ ...theme.body2 }}
  `}
`;

const CellFooter = ({ children, arrow, align, ...restProps }) => {
  return (
    <StyledCellFooter align={align} arrow={arrow} {...restProps}>
      {children}
    </StyledCellFooter>
  );
};

CellFooter.defaultProps = {
  arrow: false,
  children: null,
  align: 'center',
};

CellFooter.propTypes = {
  children: PropTypes.node,
  arrow: PropTypes.bool,
  align: uiPropTypes.flexAlign,
};

export default CellFooter;
