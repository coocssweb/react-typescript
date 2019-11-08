/*
 * @Author: lixinxiang@leedarson.com
 * @Date: 2019-10-14 16:15:18
 * Copyright © Leedarson. All rights reserved.
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Icon from '../icon';
import { getColor } from '../styledUtils';

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000;
  border-radius: 50%;
  ${({ theme, active, completed }) => css`
    color: #fff;
    width: ${theme.pxToRem(48)};
    height: ${theme.pxToRem(48)};
    background: ${active || completed ? getColor(theme, 'primary') : getColor(theme, 'neuter500')};
  `}
`;

const StepIcon = props => {
  const { icon, active, completed, error } = props;

  if (completed) {
    return (
      <StyledContainer completed={completed} active={active}>
        <Icon type="selected" color="surface" />
      </StyledContainer>
    );
  }

  if (error) {
    return (
      <StyledContainer error={error}>
        <Icon type="selected" color="surface" />
      </StyledContainer>
    );
  }

  return <StyledContainer active={active}>{icon}</StyledContainer>;
};

StepIcon.defaultProps = {
  active: false,
  completed: false,
  error: false,
};

StepIcon.propTypes = {
  icon: PropTypes.number.isRequired,
  active: PropTypes.bool,
  completed: PropTypes.bool,
  error: PropTypes.bool,
};

export default StepIcon;
