/* eslint-disable react/require-default-props */
/*
 * @Author: lixinxiang@leedarson.com
 * @Date: 2019-10-14 14:45:04
 * Copyright © Leedarson. All rights reserved.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import StepIcon from './StepIcon';
import Typography from '../typography';

const StyledContainer = styled.div`
  ${({ alternativeLabel }) => css`
    display: flex;
    align-items: center;
    flex-direction: ${alternativeLabel && 'column'};
  `}
`;

const StyledIconContainer = styled.div`
  ${({ theme, alternativeLabel }) => css`
    display: flex;
    flex-shrink: 0;
    padding-right: ${alternativeLabel ? 0 : theme.pxToRem(16)};
  `}
`;

const alternative = css`
  margin-top: 16px;
  display: flex;
  justify-content: center;
`;

const StyledLabelContainer = styled.span`
  ${({ alternativeLabel }) => css`
    width: 100%;
    ${alternativeLabel && alternative}
  `}
`;

const StepLabel = props => {
  const { children, active, completed, error, disabled, direction, icon, alternativeLabel } = props;

  return (
    <StyledContainer direction={direction} alternativeLabel={alternativeLabel}>
      <StyledIconContainer alternativeLabel={alternativeLabel}>
        <StepIcon completed={completed} active={active} error={error} icon={icon} />
      </StyledIconContainer>
      <StyledLabelContainer alternativeLabel={alternativeLabel}>
        <Typography
          variant="body2"
          component="span"
          display="block"
          color={disabled || (!active && !completed) ? 'neuter500' : ''}
        >
          {children}
        </Typography>
      </StyledLabelContainer>
    </StyledContainer>
  );
};

StepLabel.propTypes = {
  alternativeLabel: PropTypes.bool,
  active: PropTypes.bool,
  children: PropTypes.node,
  completed: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  icon: PropTypes.number,
  direction: PropTypes.oneOf(['horizontal', 'vertical']),
};

export default StepLabel;
