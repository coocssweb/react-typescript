/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-14 17:55:47
 * Copyright © Leedarson. All rights reserved.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { setLeftLine, setTopLine, formatUnits } from '../styledUtils';
import uiPropTypes from '../propTypes';

const StyledDivider = styled.div`
  ${({ colored, type, size, borderSize, margin, theme }) => css`
    position: relative;
    margin: ${formatUnits(margin, theme.pxToRem)};

    ${type === 'horizontal' &&
      css`
        width: ${size === 0 ? `100%` : theme.pxToRem(size)};
        height: ${theme.pxToRem(borderSize / 2)};
        &:before {
          ${setTopLine(colored, `${borderSize}px`)}
        }
      `}

    ${type === 'vertical' &&
      css`
        height: ${size === 0 ? `100%` : theme.pxToRem(size)};
        width: ${theme.pxToRem(borderSize / 2)};

        &:before {
          ${setLeftLine(colored, `${borderSize}px`)}
        }
      `}
  `}
`;

const Divider = React.memo(props => {
  const { color, type, size, borderSize, margin } = props;
  return <StyledDivider colored={color} type={type} size={size} borderSize={borderSize} margin={margin} />;
});

Divider.defaultProps = {
  color: 'rgba(0, 0, 0, 0.12)',
  size: 0,
  borderSize: 1,
  margin: [0, 0],
  type: 'horizontal',
};

Divider.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
  borderSize: PropTypes.number,
  margin: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
  type: uiPropTypes.direction,
};

export default Divider;
