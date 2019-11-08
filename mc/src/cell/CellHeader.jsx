/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-21 11:43:29
 * Copyright © Leedarson. All rights reserved.
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const StyledCellHeader = styled.div`
  ${({ theme, spacing }) => {
    return spacing > 0
      ? css`
          width: ${theme.space(spacing)};
        `
      : null;
  }}
`;

const CellHeader = props => {
  const { children, spacing, ...restProps } = props;

  return (
    <StyledCellHeader spacing={spacing} {...restProps}>
      {children}
    </StyledCellHeader>
  );
};

CellHeader.defaultProps = {
  spacing: 0,
};

CellHeader.propTypes = {
  children: PropTypes.node.isRequired,
  spacing: PropTypes.number,
};

export default CellHeader;
