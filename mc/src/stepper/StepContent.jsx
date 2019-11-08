/* eslint-disable react/require-default-props */
/*
 * @Author: lixinxiang@leedarson.com
 * @Date: 2019-10-14 16:17:10
 * Copyright © Leedarson. All rights reserved.
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { getColor } from '../styledUtils';

const StyledContainer = styled.div`
  ${({ theme, last, color }) => css`
    margin-top: ${theme.pxToRem(16)};
    border-left: ${last ? 'none' : `1px solid ${getColor(theme, color)}`};
    margin-left: ${theme.pxToRem(24)};
    padding-left: ${theme.pxToRem(40)};
    padding-right: ${theme.pxToRem(16)};
  `}
`;

const StepContent = props => {
  const { children, last, completed } = props;

  const color = completed ? 'primary' : 'neuter500';

  return (
    <StyledContainer last={last} color={color}>
      {children}
    </StyledContainer>
  );
};

StepContent.propTypes = {
  last: PropTypes.bool,
  completed: PropTypes.bool,
  children: PropTypes.node,
};

export default StepContent;
