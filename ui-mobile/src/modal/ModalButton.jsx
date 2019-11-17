/* eslint-disable no-script-url */
/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-20 12:11:38
 * Copyright © Leedarson. All rights reserved.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { setLeftLine } from '../styled-engine';

const StyleModalButton = styled.a`
  display: block;
  flex: 1;
  height: 50px;
  line-height: 50px;
  text-align: center;
  text-decoration: none;
  position: relative;
  transition: 0.2s ease all;
  &:nth-of-type(2) {
    &:after {
      ${setLeftLine()}
    }
  }
  ${({ theme, type }) => css`
    font-size: ${theme.sizeFont}px;
    color: ${type === 'confirm' ? theme.colorPrimary : theme.colorDefault};
    &:active {
      background: ${theme.activeBgColor};
    }
  `}
`;

const ModalButton = ({ children, type, onClick }) => {
  return (
    <StyleModalButton type={type} href="javascript:;" onClick={onClick}>
      {children}
    </StyleModalButton>
  );
};

ModalButton.defaultProps = {
  type: 'confirm',
  onClick: () => {},
};

ModalButton.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['cancel', 'confirm']),
  onClick: PropTypes.func,
};

export default ModalButton;
