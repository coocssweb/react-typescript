/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-21 11:43:33
 * Copyright © Leedarson. All rights reserved.
 */

import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { setTopLine } from '../styled-engine/setOnePx';

const StyledCellItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  user-select: none;
  &:first-of-type {
    &:before {
      display: none;
    }
  }
  ${({ theme, lineLeft, link, noGap, colored }) => css`
    padding: ${noGap ? 0 : theme.cellPaddingX}px ${theme.cellPaddingX}px;
    color: ${colored || theme.textColorTitle};
    &:before {
      ${setTopLine()}
      left: ${theme.cellPaddingX + lineLeft}px;
      z-index: 2;
    }
    ${link &&
      css`
        &:active {
          background: ${theme.activeBgColor};
        }
      `}
  `}
`;

const CellItem = ({ children, link, noGap, color }) => {
  const lineLeft = useMemo(() => {
    const childFirst = Array.isArray(children) ? children[0] : children;
    if (childFirst.type.name === 'CellHeader' || childFirst.type.displayName === 'CellHeader') {
      return childFirst.props.width;
    }
    return 0;
  }, [children]);

  return (
    <StyledCellItem lineLeft={lineLeft} noGap={noGap} colored={color} link={link}>
      {children}
    </StyledCellItem>
  );
};

CellItem.defaultProps = {
  link: '',
  noGap: false,
  color: '',
};

CellItem.propTypes = {
  children: PropTypes.node.isRequired,
  link: PropTypes.string,
  noGap: PropTypes.bool,
  color: PropTypes.string,
};

export default CellItem;
