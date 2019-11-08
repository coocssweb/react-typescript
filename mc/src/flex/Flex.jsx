/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-15 10:58:54
 * Copyright © Leedarson. All rights reserved.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import uiPropTypes from '../propTypes';

const StyledFlex = styled.div`
  display: flex;
  flex: 1;
  z-index: 1;

  ${({ wrap, direction, justify, align, height, width }) => css`
    flex-wrap: ${wrap};
    flex-direction: ${direction};
    justify-content: ${justify};
    align-items: ${align};
    height: ${height};
    width: ${width};
  `}
`;

const Flex = ({ children, wrap, direction, justify, align, height, width, ...restProps }) => {
  return (
    <StyledFlex
      wrap={wrap}
      direction={direction}
      justify={justify}
      align={align}
      height={height}
      width={width}
      {...restProps}
    >
      {children}
    </StyledFlex>
  );
};

Flex.defaultProps = {
  direction: 'row',
  wrap: 'nowrap',
  justify: '',
  align: '',
  width: 'auto',
  height: 'auto',
};

Flex.propTypes = {
  wrap: uiPropTypes.flexWrap,
  direction: uiPropTypes.flexDirection,
  justify: uiPropTypes.flexJustify,
  align: uiPropTypes.flexAlign,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  children: PropTypes.node.isRequired,
};

export default Flex;
