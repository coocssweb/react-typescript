/* eslint-disable no-script-url */
/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-20 12:11:38
 * Copyright © Leedarson. All rights reserved.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { setLeftLine } from '../styledUtils';

const StyleModalButton = styled.a`
  display: block;
  flex: 1;
  text-align: center;
  text-decoration: none;
  position: relative;
  transition: 0.2s ease all;

  &:nth-of-type(2) {
    &:after {
      ${setLeftLine()}
    }
  }

  ${({ theme, buttonType }) => css`
    ${{ ...theme.button }}
    color: ${buttonType === 'confirm' ? theme.primary.main : theme.neuter[600]};
    line-height: ${theme.space(22)};

    &:active {
      background: ${theme.surface.active};
    }
  `}
`;

const ModalButton = ({ children, type, onClick }) => {
  return (
    <StyleModalButton buttonType={type} onClick={onClick}>
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
