/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-14 17:55:47
 * Copyright © Leedarson. All rights reserved.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { pxToRem } from '../styled-engine/unit';

const StyledWingBlank = styled.div`
  margin-left: ${props => pxToRem(props.size * 8)};
  margin-right: ${props => pxToRem(props.size * 8)};
`;

const WingBlank = React.memo(props => {
  const { size, children } = props;
  return <StyledWingBlank size={size}>{children}</StyledWingBlank>;
});

WingBlank.defaultProps = {
  size: 1,
  children: null,
};

WingBlank.propTypes = {
  size: PropTypes.number,
  children: PropTypes.node,
};

export default WingBlank;
