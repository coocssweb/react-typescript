/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-14 17:55:47
 * Copyright © Leedarson. All rights reserved.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { formatUnits } from '../styledUtils';

const StyledWingBlank = styled.div`
  margin: 0 ${({ theme, spacing }) => formatUnits([spacing], theme.space)};
`;

const WingBlank = React.memo(props => {
  const { spacing, children } = props;
  return <StyledWingBlank spacing={spacing}>{children}</StyledWingBlank>;
});

WingBlank.defaultProps = {
  spacing: 0,
  children: null,
};

WingBlank.propTypes = {
  spacing: PropTypes.number,
  children: PropTypes.node,
};

export default WingBlank;
