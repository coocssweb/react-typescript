/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-21 12:08:11
 * Copyright © Leedarson. All rights reserved.
 */

import * as React from 'react';
import * as PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTabPage = styled.div`
  display: flex;
  box-sizing: border-box;
  height: 100vh;
  flex-direction: column;
`;

const TabPage = ({ children }) => {
  return <StyledTabPage>{children}</StyledTabPage>;
};

TabPage.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TabPage;
