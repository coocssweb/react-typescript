/*
 * @Author: yuxinyu@leedarson.com
 * @Date: 2019-09-12 14:06:50
 * Copyright © Leedarson. All rights reserved.
 */
import styled, { css, keyframes } from 'styled-components';
import { getOpacityColor } from '../styledUtils';

const animation = {
  wave: keyframes`
    0% {
      transform: scale(1.2);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: scale(2.2);
      opacity: 0;
    }
  `,
  waveLarge: keyframes`
  0% {
    transform: scale(1.2);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: scale(3.8);
    opacity: 0;
  }
`,
  radar: keyframes`
    0% {
      transform: scale(1.2);
      opacity: 0;
    }
    50% {
      opacity: .5;
    }
    100% {
      transform: scale(1.8);
      opacity: 0;
    }
  `,
};

const StyledWave = ({ theme, fill, size }) => css`
  opacity: 0;
  background-image: radial-gradient(at center, rgba(255, 255, 255, 0.32) 0%, ${getOpacityColor(theme, fill, 0.5)} 100%);

  ${size === 'small' &&
    css`
      animation: ${animation.wave} 2.1s ease-in infinite;
      &.insider {
        animation-delay: -0.7s;
      }
      &.outer {
        animation-delay: 0.7s;
      }
    `}

  ${size === 'large' &&
    css`
      animation: ${animation.waveLarge} 3.5s ease-in infinite;
      &.insider {
        animation-delay: -1.4s;
      }
      &.outer {
        animation-delay: -0.7s;
      }
      &.outer1 {
        animation-delay: 0.7s;
      }
      &.outer2 {
        animation-delay: 1.4s;
      }
    `}
`;

const StyledRadar = ({ theme, fill }) => css`
  opacity: 0;
  border: 1px solid ${getOpacityColor(theme, fill, 0.5)};
  animation: ${animation.radar} 2s ease-in infinite;
  &.insider {
    animation-delay: -0.7s;
  }

  &.outer {
    animation-delay: 0.7s;
  }
`;

const StyledCircle = ({ theme, type, size, width, fill }) => css`
  .circle {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    ${type === 'wave' && StyledWave({ theme, size, fill })}
    ${type === 'radar' && StyledRadar({ theme, width, fill })}
  }
`;

const StyledRipple = styled.div`
  position: relative;
  text-align: center;
  margin: 0 auto;

  ${({ theme, type, size, width, fill }) => css`
    width: ${theme.pxToRem(width)};
    height: ${theme.pxToRem(width)};
    ${StyledCircle({ theme, type, size, width, fill })}
  `}
`;

export { StyledRipple, StyledCircle };
