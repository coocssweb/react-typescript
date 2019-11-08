/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-21 12:08:11
 * Copyright © Leedarson. All rights reserved.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTabPage = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  z-index: 1;
  flex-grow: 1;
  height: 100%;
`;

const TabPage = ({ children }) => {
  return <StyledTabPage>{children}</StyledTabPage>;
};

TabPage.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TabPage;
