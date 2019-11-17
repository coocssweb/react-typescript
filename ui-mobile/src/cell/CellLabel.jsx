/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-21 11:43:38
 * Copyright © Leedarson. All rights reserved.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledCellLabel = styled.div`
  display: block;
  width: ${({ theme }) => theme.cellLabelWidth}px;
`;

const CellLabel = props => {
  const { children } = props;
  return <StyledCellLabel>{children}</StyledCellLabel>;
};

CellLabel.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CellLabel;
