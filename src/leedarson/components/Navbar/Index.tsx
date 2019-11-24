/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-10-30 10:22:22
 * Copyright © Leedarson. All rights reserved.
 */

import * as React from 'react';
import * as PropTypes from 'prop-types';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
const StyledNavbar = styled.div`
    background: #ccc;
    color: #999;
`;

const Navbar = ({ history }) => {
  const handleBackClick = () => {
      console.log(window._paths);
    window._paths.pop();
    console.log(window._paths);
    history.goBack();
  };

  return (
    <StyledNavbar >
      <a href="javascript:;" onClick={handleBackClick}>后退</a>
    </StyledNavbar>
  );
};

Navbar.defaultProps = {
  
};

Navbar.propTypes = {
 
};

export default withRouter(Navbar);
