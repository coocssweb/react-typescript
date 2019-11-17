/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-21 11:43:16
 * Copyright © Leedarson. All rights reserved.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { setTopLine, setBottomLine } from '../styled-engine/setOnePx';

const StyledCell = styled.div`
  background-color: #fff;
  overflow: hidden;
  position: relative;
  ${({ theme }) => css`
    line-height: ${theme.cellLineHeight};
    font-size: ${theme.cellFontSize}px;
  `};
  &:before {
    ${setTopLine()}
  }
  &:after {
    ${setBottomLine()}
  }
`;

const Cells = props => {
  const { children } = props;
  return <StyledCell>{children}</StyledCell>;
};

Cells.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Cells;
