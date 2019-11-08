/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-09-04 10:00:07
 * Copyright © Leedarson. All rights reserved.
 */
import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { loadImages } from '@leedarson/helper';
import styled, { css } from 'styled-components';
import uiPropTypes from '../propTypes';
import { formatUnits, getColor } from '../styledUtils';

const StyledImageWrap = styled.div`
  z-index: 1;
  background-position: center;
  background-repeat: no-repeat;

  ${({ theme, display, width, height, margin, radius }) => css`
    display: ${display};
    margin: ${formatUnits(margin, theme.pxToRem)};
    width: ${theme.pxToRem(width)};
    height: ${theme.pxToRem(height)};
    border-radius: ${theme.pxToRem(radius)};
  `}
`;

const StyledImage = styled.img`
  display: block;
  transition: opacity 0.1s ease;
  box-sizing: border-box;
  margin: 0 auto;
  ${({ loaded, radius, width, height, borderWidth, bordercolor, theme }) => css`
    width: ${width === 'auto' ? 'auto' : theme.pxToRem(width)};
    height: ${height === 'auto' ? 'auto' : theme.pxToRem(height)};
    opacity: ${loaded ? 1 : 0};
    border-radius: ${theme.pxToRem(radius)};

    ${borderWidth &&
      css`
        border: ${theme.pxToRem(borderWidth)} solid ${getColor(theme, bordercolor)};
      `}
  `}
`;

const Image = ({
  display,
  width,
  height,
  radius,
  margin,
  src,
  alt,
  borderWidth,
  borderColor,
  onClick,
  ...restProps
}) => {
  const cancelRef = useRef(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchImage = async avatarPath => {
      await loadImages([avatarPath]);
      if (!cancelRef.current) {
        setLoaded(true);
      }
    };

    if (src && /^https?:\/\/.*/.test(src)) {
      fetchImage(src);
    } else {
      setLoaded(true);
    }

    return () => {
      cancelRef.current = true;
    };
  }, [loaded, src]);

  return (
    <StyledImageWrap
      display={display}
      width={width}
      height={height}
      margin={margin}
      loaded={loaded}
      radius={radius}
      onClick={onClick}
      {...restProps}
    >
      <StyledImage
        alt={alt}
        borderWidth={borderWidth}
        bordercolor={borderColor}
        src={src}
        width={width}
        height={height}
        radius={radius}
        loaded={loaded}
        {...restProps}
      />
    </StyledImageWrap>
  );
};

Image.defaultProps = {
  display: 'block',
  width: '100%',
  height: 'auto',
  margin: [0, 0],
  borderWidth: 0,
  borderColor: 'transparent',
  radius: 0,
  src: '',
  alt: '',
  onClick: () => {},
};

Image.propTypes = {
  display: uiPropTypes.display,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  margin: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
  radius: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  borderWidth: PropTypes.number,
  borderColor: uiPropTypes.color,
  src: PropTypes.string,
  alt: PropTypes.string,
  onClick: PropTypes.func,
};

export default Image;
