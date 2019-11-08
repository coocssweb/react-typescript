/* eslint-disable react/require-default-props */
/*
 * @Author: lixinxiang@leedarson.com
 * @Date: 2019-10-14 15:31:54
 * Copyright © Leedarson. All rights reserved.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { getColor } from '../styledUtils';

const containerVertical = ({ theme }) => css`
  margin-left: ${theme.pxToRem(40)};
`;

const containerHorizontal = () => css`
  flex: 1;
`;

const lineVertical = ({ theme }) => css`
  min-height: ${theme.pxToRem(32)};
  border-left-style: solid;
  border-left-width: 1px;
`;

const lineHorizontal = () => css`
  border-top-style: solid;
  border-top-width: 1px;
`;

const alternative = ({ theme }) => css`
  top: ${theme.pxToRem(24)};
  left: calc(-50% + 20px);
  right: calc(50% + 20px);
  position: absolute;
`;

const StyleContainer = styled.div`
  ${({ direction, alternativeLabel }) => css`
    ${direction === 'horizontal' ? containerHorizontal : containerVertical}
    ${alternativeLabel && alternative}
  `}
`;

const StyledLine = styled.div`
  ${({ theme, color, direction }) => css`
    display: block;
    border-color: ${getColor(theme, color)};
    ${direction === 'vertical' ? lineVertical : lineHorizontal}
  `}
`;

const StepConnector = props => {
  const { completed, active, direction, alternativeLabel } = props;

  const color = active || completed ? 'primary' : 'neuter500';

  return (
    <StyleContainer direction={direction} alternativeLabel={alternativeLabel}>
      <StyledLine color={color} direction={direction} />
    </StyleContainer>
  );
};

StepConnector.propTypes = {
  alternativeLabel: PropTypes.bool,
  active: PropTypes.bool,
  completed: PropTypes.bool,
  direction: PropTypes.oneOf(['horizontal', 'vertical']),
};

export default StepConnector;
