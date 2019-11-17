/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-15 11:02:59
 * Copyright © Leedarson. All rights reserved.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledFlexItem = styled.div`
  flex: ${props => props.flex};
  overflow: hidden;
`;

const FlexItem = ({ children, flex }) => {
  return <StyledFlexItem flex={flex}>{children}</StyledFlexItem>;
};

FlexItem.defaultProps = {
  flex: 1,
};

FlexItem.propTypes = {
  flex: PropTypes.number,
  children: PropTypes.node.isRequired,
};

export default FlexItem;
