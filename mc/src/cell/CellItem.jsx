/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-21 11:43:33
 * Copyright © Leedarson. All rights reserved.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { setTopLine, formatUnits, getColor, getActiveColor } from '../styledUtils';

const StyledCellItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  user-select: none;

  ${({ theme, activable, spacings, fill }) => css`
    padding: ${formatUnits(spacings, theme.space)};
    color: ${theme.surface.text};
    background-color: ${getColor(theme, fill)};
    ${{ ...theme.body1 }}

    &::before {
      ${setTopLine()}
      left: ${theme.space(spacings[1])};
      right: ${theme.space(spacings[1])};
      z-index: 2;
    }
    
    &:first-child {
      border-top-left-radius: ${theme.borderRadius[8]};
      border-top-right-radius: ${theme.borderRadius[8]};
    }

    &:last-child {
      border-bottom-left-radius: ${theme.borderRadius[8]};
      border-bottom-right-radius: ${theme.borderRadius[8]};
    }

    ${activable === 1 &&
      css`
        &:active {
          background: ${getActiveColor(theme, fill)};
        }
      `}

  `}

  &:first-child {
    &:before {
      display: none;
    }
  }
`;

const CellItem = ({ children, spacings, fill, ...restProps }) => {
  const { as, onClick } = restProps;

  return (
    <StyledCellItem spacings={spacings} fill={fill} {...restProps} activable={+(!!onClick || !!as)}>
      {children}
    </StyledCellItem>
  );
};

CellItem.defaultProps = {
  fill: 'surface',
  spacings: [9, 8],
};

CellItem.propTypes = {
  fill: PropTypes.string,
  children: PropTypes.node.isRequired,
  spacings: PropTypes.arrayOf(PropTypes.number),
};

export default CellItem;
