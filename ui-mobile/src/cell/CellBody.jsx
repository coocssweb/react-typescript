/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-21 11:43:20
 * Copyright © Leedarson. All rights reserved.
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledCellBody = styled.div`
  flex: 1;
`;

const CellBody = props => {
  const { children } = props;

  return <StyledCellBody>{children}</StyledCellBody>;
};

CellBody.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CellBody;
