/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-22 11:29:01
 * Copyright © Leedarson. All rights reserved.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { setTopLine } from '../styledUtils';

const StyledTabPageBar = styled.div`
  display: flex;
  width: 100vw;
  padding-bottom: env(safe-area-inset-bottom);
  z-index: 500;

  ${({ theme }) => css`
    background: ${theme.surface.main};
  `}

  &:before {
    ${setTopLine(' rgba(0,0,0,0.2)')}
  }
`;

const TabPageBar = ({ children }) => {
  return <StyledTabPageBar>{children}</StyledTabPageBar>;
};

TabPageBar.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TabPageBar;
