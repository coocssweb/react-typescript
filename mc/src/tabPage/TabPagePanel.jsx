/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-22 11:28:43
 * Copyright © Leedarson. All rights reserved.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTabPagePanel = styled.div`
  flex: 1;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;
  position: relative;
  -ms-overflow-style: none;
  overflow: -moz-scrollbars-none;
  -webkit-overflow-scroll: touch;
`;

const TabPagePanel = ({ className, children, forwardedRef }) => {
  return (
    <StyledTabPagePanel className={`${className} tabpanel`} ref={forwardedRef}>
      {children}
    </StyledTabPagePanel>
  );
};

TabPagePanel.defaultProps = {
  className: '',
  forwardedRef: null,
};

TabPagePanel.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  forwardedRef: PropTypes.oneOfType([PropTypes.object]),
};

export default TabPagePanel;
