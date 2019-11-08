/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-22 11:29:01
 * Copyright © Leedarson. All rights reserved.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import WhiteSpace from '../whiteSpace';
import Icon from '../icon';
import { getOpacityColor } from '../styledUtils';

const StyledTabPageBarItem = styled.a`
  flex: 1;
  display: block;
  text-align: center;
  user-select: none;
  transition: color 0.2s ease;
  ${({ theme }) => css`
    padding: ${theme.space(4)} 0 ${theme.space(3)} 0;
    color: ${theme.neuter[500]};
    ${{ ...theme.overline }}
  `}

  &.active {
    ${({ theme }) =>
      css`
        color: ${theme.primary.main};
      `}
  }

  &:active {
    ${({ theme }) =>
      css`
        color: ${getOpacityColor(theme, 'primary', 0.6)};
      `}
  }
`;

const StyledTabPageBarIcon = styled(Icon)`
  ${({ theme }) => css`
    ${{ ...theme.h5 }}
  `}
`;

const StyledTabPageBarItemName = styled.p`
  padding: 0px;
  margin: 0px;
  font-size: 10px;
`;

const TabBarItem = ({ icon, children, ...restProps }) => {
  return (
    <StyledTabPageBarItem {...restProps}>
      <StyledTabPageBarIcon type={icon} />
      <WhiteSpace spacing={2} />
      <StyledTabPageBarItemName>{children}</StyledTabPageBarItemName>
    </StyledTabPageBarItem>
  );
};

TabBarItem.propTypes = {
  icon: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default TabBarItem;
