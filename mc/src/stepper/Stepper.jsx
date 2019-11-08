/*
 * @Author: lixinxiang@leedarson.com
 * @Date: 2019-10-14 15:27:53
 * Copyright © Leedarson. All rights reserved.
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import StepConnector from './StepConnector';

const vertical = () => css`
  flex-direction: column;
`;

const horizontal = () => css`
  flex-direction: row;
  align-items: center;
`;

const StyledContainer = styled.div`
  ${({ direction, alternativeLabel }) =>
    css`
      display: flex;
      ${direction === 'horizontal' ? horizontal : vertical}
      align-items: ${alternativeLabel && 'flex-start'};
    `}
`;

const Stepper = props => {
  const { children, activeStep, direction, alternativeLabel } = props;
  const connector = <StepConnector direction={direction} />;
  const childrenArray = React.Children.toArray(children);

  const steps = childrenArray.map((step, index) => {
    const last = index + 1 === childrenArray.length;
    const controlProps = { last, direction, connector, alternativeLabel };

    const state = {
      index,
      active: activeStep === index,
      completed: activeStep > index,
      disabled: activeStep < index,
    };

    return [
      !alternativeLabel &&
        connector &&
        index !== 0 &&
        React.cloneElement(connector, {
          key: `connector${step.key}`,
          ...state,
        }),
      React.cloneElement(step, { ...controlProps, ...state, ...step.props }),
    ];
  });

  return (
    <StyledContainer direction={direction} alternativeLabel={alternativeLabel}>
      {steps}
    </StyledContainer>
  );
};

Stepper.defaultProps = {
  activeStep: 0,
  direction: 'vertical',
  alternativeLabel: false,
};

Stepper.propTypes = {
  activeStep: PropTypes.number,
  alternativeLabel: PropTypes.bool,
  direction: PropTypes.oneOf(['horizontal', 'vertical']),
  children: PropTypes.node.isRequired,
};

export default Stepper;
