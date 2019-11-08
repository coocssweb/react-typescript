/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-09-20 13:35:40
 * Copyright © Leedarson. All rights reserved.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import uiPropTypes from '../propTypes';
import Icon from '../icon';

const StyledText = styled.span`
  vertical-align: sub;

  ${({ theme, low }) => css`
    ${{ ...theme.overline }};
    color: ${low === 1 ? theme.error.main : theme.neuter[800]};
    margin-right: ${theme.pxToRem(8)};
  `}
`;

const StyledBattery = styled.div`
  display: inline-block;
  position: relative;
  font-size: 0;
`;

const StyledIcon = styled(Icon)`
  position: relative;
  z-index: 2;
`;

const StyledPercent = styled.span`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  opacity: 0.7;

  ${({ theme, quantity, low }) => css`
    width: ${quantity > 90 ? 80 : quantity}%;
    background: ${low === 1 ? theme.error.main : theme.neuter[600]};
  `}
`;

const _size = {
  small: 24,
  middle: 32,
  large: 60,
};

const Battery = ({ quantity, low, size, children, ...restProps }) => {
  let finalQuantity = Math.min(quantity, 90);
  finalQuantity = Math.max(quantity, 10);

  return (
    <>
      {children ? <StyledText low={+low}>{children}</StyledText> : null}
      <StyledBattery>
        <StyledPercent quantity={finalQuantity} low={+low} />
        <StyledIcon fontSize={_size[size]} {...restProps} type="battery" color={low ? 'error' : 'neuter800'} />
      </StyledBattery>
    </>
  );
};

Battery.defaultProps = {
  quantity: 100,
  size: 'small',
  low: false,
  children: null,
};

Battery.propTypes = {
  quantity: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  size: uiPropTypes.size,
  low: PropTypes.bool,
  children: PropTypes.node,
};

export default Battery;
