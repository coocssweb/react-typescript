/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-14 17:55:41
 * Copyright © Leedarson. All rights reserved.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledWhiteSpace = styled.div`
  height: ${({ theme, spacing }) => theme.space(spacing)};
`;

const WhiteSpace = ({ spacing }) => {
  return <StyledWhiteSpace spacing={spacing} />;
};

WhiteSpace.defaultProps = {
  spacing: 0,
};

WhiteSpace.propTypes = {
  spacing: PropTypes.number,
};

export default WhiteSpace;
