/* eslint-disable react/require-default-props */
/*
 * @Author: lixinxiang@leedarson.com
 * @Date: 2019-10-14 17:02:36
 * Copyright © Leedarson. All rights reserved.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const vertical = () => css`
  flex-direction: column;
`;

const horizontal = () => css`
  flex-direction: row;
  align-items: center;
`;

const alternative = () => css`
  flex: 1;
  position: relative;
`;

const StyledContainer = styled.div`
  ${({ theme, direction, alternativeLabel }) =>
    css`
      padding-left: ${theme.pxToRem(16)};
      padding-right: ${theme.pxToRem(16)};
      ${direction === 'horizontal' ? horizontal : vertical}
      ${alternativeLabel && alternative}
    `}
`;

const Step = props => {
  const { children, active, completed, disabled, last, index, direction, connector, alternativeLabel } = props;

  return (
    <StyledContainer alternativeLabel={alternativeLabel} direction={direction}>
      {connector &&
        index !== 0 &&
        alternativeLabel &&
        React.cloneElement(connector, {
          direction,
          index,
          active,
          completed,
          disabled,
          alternativeLabel,
        })}

      {React.Children.map(children, child => {
        if (!React.isValidElement(child)) {
          return null;
        }

        return React.cloneElement(child, {
          active,
          alternativeLabel,
          completed,
          disabled,
          icon: index + 1,
          last,
          direction,
          ...child.props,
        });
      })}
    </StyledContainer>
  );
};

Step.propTypes = {
  index: PropTypes.number,
  connector: PropTypes.element,
  children: PropTypes.node,
  active: PropTypes.bool,
  completed: PropTypes.bool,
  disabled: PropTypes.bool,
  alternativeLabel: PropTypes.bool,
  last: PropTypes.bool,
  direction: PropTypes.oneOf(['horizontal', 'vertical']),
};

export default Step;
