/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-14 17:55:41
 * Copyright © Leedarson. All rights reserved.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { pxToRem } from '../styled-engine/unit';

const StyledWhiteSpace = styled.div`
  height: ${props => pxToRem(props.size * 8)};
`;

const WhiteSpace = ({ size }) => {
  return <StyledWhiteSpace size={size} />;
};

WhiteSpace.defaultProps = {
  size: 1,
};

WhiteSpace.propTypes = {
  size: PropTypes.number,
};

export default WhiteSpace;
