/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-21 11:43:38
 * Copyright © Leedarson. All rights reserved.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const StyledCellTitle = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.pxToRem(24)};
    color: ${theme.neuter[800]};
    ${{ ...theme.subtitle1 }};
  `};
`;

const CellTitle = props => {
  const { children, ...restProps } = props;
  return <StyledCellTitle {...restProps}>{children}</StyledCellTitle>;
};

CellTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CellTitle;
