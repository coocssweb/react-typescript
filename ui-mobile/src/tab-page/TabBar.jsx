/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-22 11:29:01
 * Copyright © Leedarson. All rights reserved.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { setTopLine } from '../styled-engine';

const StyledTabBar = styled.div`
  display: flex;
  position: relative;
  background-color: #f7f7f7;
  z-index: 500;
  &:before {
    ${setTopLine()}
  }
`;

const TabBar = ({ children }) => {
  return <StyledTabBar>{children}</StyledTabBar>;
};

TabBar.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TabBar;
