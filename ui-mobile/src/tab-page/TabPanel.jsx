/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-22 11:28:43
 * Copyright © Leedarson. All rights reserved.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTabPanel = styled.div`
  flex: 1;
  box-sizing: border-box;
  overflow: auto;
`;

const TabPanel = ({ className, children }) => {
  return <StyledTabPanel className={className}>{children}</StyledTabPanel>;
};

TabPanel.defaultProps = {
  className: '',
};

TabPanel.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default TabPanel;
