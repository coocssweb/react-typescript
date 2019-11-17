/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-22 11:29:01
 * Copyright © Leedarson. All rights reserved.
 */

import * as React from 'react';
import * as PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTabBar = styled.div`
  display: flex;
  position: relative;
  background-color: #f7f7f7;
`;

const TabBar = ({ children }) => {
  return <StyledTabBar>{children}</StyledTabBar>;
};

TabBar.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TabBar;
