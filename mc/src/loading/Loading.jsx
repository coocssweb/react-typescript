/* eslint-disable react/prop-types */
/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-21 12:06:12
 * Copyright © Leedarson. All rights reserved.
 */

import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { getColor, formatUnits } from '../styledUtils';
import Bubbles from './Bubbles';
import Spin from './Spin';
import Bars from './Bars';
import Spokes from './Spokes';

// Loading container
const StyledLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0;

  ${({ theme, colored, size, margin }) => css`
    width: ${theme.pxToRem(size)};
    height: ${theme.pxToRem(size)};
    margin: ${formatUnits(margin, theme.pxToRem)}
    fill: ${getColor(theme, colored)};
  `}

  svg {
    width: 100%;
    height: 100%;
  }
`;

const Loading = ({ theme, color, size, type, margin }) => {
  const element = useMemo(() => {
    if (type === 'bubbles') {
      return <Bubbles color={color} size={size} />;
    }
    if (type === 'spin') {
      return <Spin />;
    }
    if (type === 'bars') {
      return <Bars />;
    }
    if (type === 'spokes') {
      return <Spokes />;
    }
    return null;
  }, [color, size, type]);

  return (
    <StyledLoading theme={theme} size={size} type={type} colored={color} margin={margin}>
      {element}
    </StyledLoading>
  );
};

Loading.defaultProps = {
  size: 48,
  color: 'surface',
  type: 'bubbles',
  margin: [0, 'auto'],
};

Loading.propTypes = {
  color: PropTypes.string,
  type: PropTypes.oneOf(['bubbles', 'bars', 'spokes', 'spin']),
  size: PropTypes.number,
  margin: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
};

export default Loading;
