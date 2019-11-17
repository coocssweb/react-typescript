/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-15 10:58:54
 * Copyright © Leedarson. All rights reserved.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledFlex = styled.div`
  display: flex;
`;

const Flex = ({ children }) => {
  return <StyledFlex>{children}</StyledFlex>;
};

Flex.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Flex;
