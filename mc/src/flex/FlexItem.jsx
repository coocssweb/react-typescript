/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-15 11:02:59
 * Copyright © Leedarson. All rights reserved.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import uiPropTypes from '../propTypes';
import { formatUnits } from '../styledUtils';

const StyledFlexItem = styled.div`
  box-sizing: border-box;

  ${({ theme, flex, grow, shrink, align, padding, margin }) => css`
    align-self: ${align};
    flex: ${flex};
    flex-shrink: ${shrink};
    flex-grow: ${grow};
    padding: ${formatUnits(padding, theme.pxToRem)};
    margin: ${formatUnits(margin, theme.pxToRem)};
  `}
`;

const FlexItem = ({ children, flex, grow, shrink, align, padding, margin, ...restProps }) => {
  return (
    <StyledFlexItem
      flex={flex}
      grow={grow}
      shrink={shrink}
      align={align}
      padding={padding}
      margin={margin}
      {...restProps}
    >
      {children}
    </StyledFlexItem>
  );
};

FlexItem.defaultProps = {
  flex: 1,
  grow: 1,
  shrink: 1,
  align: '',
  padding: [0],
  margin: [0],
};

FlexItem.propTypes = {
  flex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  grow: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  shrink: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  align: uiPropTypes.flexAlign,
  padding: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
  margin: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
  children: PropTypes.node.isRequired,
};

export default FlexItem;
