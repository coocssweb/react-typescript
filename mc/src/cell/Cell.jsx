/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-21 11:43:16
 * Copyright © Leedarson. All rights reserved.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const StyledCell = styled.div`
  overflow: hidden;
  position: relative;

  ${({ theme }) => css`
    ${{ ...theme.body1 }}
  `};
`;

const Cells = props => {
  const { children } = props;
  return <StyledCell>{children}</StyledCell>;
};

Cells.defaultProps = {};

Cells.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Cells;
