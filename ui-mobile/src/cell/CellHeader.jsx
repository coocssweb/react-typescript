/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-21 11:43:29
 * Copyright © Leedarson. All rights reserved.
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const StyledCellHeader = styled.div`
  ${({ width }) => css`
    width: ${width}px;
  `}
`;

const CellHeader = props => {
  const { children, width } = props;

  return <StyledCellHeader width={width}>{children}</StyledCellHeader>;
};

CellHeader.defaultProps = {
  width: 0,
};

CellHeader.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.number,
};

export default CellHeader;
