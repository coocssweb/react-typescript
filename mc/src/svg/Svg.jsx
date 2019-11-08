/* eslint-disable react/prop-types */
/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-21 12:07:19
 * Copyright © Leedarson. All rights reserved.
 */

import * as React from 'react';
import PropTypes from 'prop-types';
import ReactSvg from 'react-svg';
import styled, { css, withTheme } from 'styled-components';
import Loading from '../loading';
import { Square } from '../shape';

const StyledSvg = styled.div`
  position: relative;
  display: inline-block;

  ${({ theme, colors, width, height }) => css`
    & stop:first-child {
      stop-color: ${colors[0]} !important;
    }
    & stop:nth-child(2) {
      stop-color: ${colors.length === 1 ? colors[0] : colors[1]} !important;
    }
    display: flex;
    width: ${theme.pxToRem(width)};
    height: ${theme.pxToRem(height)};
    align-items: center;
    justify-content: center;
    flex-direction: column;
  `} /*   &:after {
    content: '';
    background-color: transparent;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  } */
`;

const Svg = ({ theme, src, width, colors, ...restProps }) => {
  return (
    <StyledSvg colors={colors} width={width} height={width} {...restProps}>
      <ReactSvg
        beforeInjection={svg => {
          svg.classList.add('svg-class-name');
          svg.setAttribute('style', `width: ${theme.pxToRem(width)}; height: ${theme.pxToRem(width)}`);
        }}
        loading={() => (
          <Square align="center" width={width} fill="transparent">
            <Loading type="spin" color="primary" />
          </Square>
        )}
        src={src}
      />
    </StyledSvg>
  );
};

Svg.defaultProps = {
  src: '',
  width: 200,
  colors: [],
};

Svg.propTypes = {
  src: PropTypes.string,
  width: PropTypes.number,
  colors: PropTypes.arrayOf(PropTypes.string),
};

export default withTheme(Svg);
