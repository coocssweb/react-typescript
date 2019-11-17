/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-22 11:29:01
 * Copyright © Leedarson. All rights reserved.
 */

import * as React from 'react';
import * as PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const StyleTabBarItem = styled.a`
  flex: 1;
  display: block;
  padding: 8px 0;
  text-align: center;
  ${({ theme, active }) => css`
    color: ${active ? theme.colorSuccess : 'rgba(0, 0, 0, 0.9)'};
  `}
  user-select: none;
  &:active {
    ${({ theme }) => css`
      background-color: ${theme.activeBgColor};
    `}
  }
`;

const StyleTabBarIcon = styled.i`
  font-size: 28px;
`;

const StyleTabBarItemName = styled.p`
  padding: 0px;
  margin: 0px;
  font-size: 10px;
`;

const TabBarItem = ({ link, icon, active, children }) => {
  return (
    <StyleTabBarItem as={Link} to={{pathname: link, state: {effect: 'fade'}}} active={active}>
      <StyleTabBarIcon type={icon} />
      <StyleTabBarItemName>{children}</StyleTabBarItemName>
    </StyleTabBarItem>
  );
};

TabBarItem.defaultProps = {
  active: false,
};

TabBarItem.propTypes = {
  link: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  active: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default TabBarItem;
