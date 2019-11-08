import styled, { css } from 'styled-components';
import { Circle } from '../shape';

const cctLow = require('./cctLow.png');
const cctStrong = require('./cctStrong.png');

const StyledCircle = styled(Circle)`
  transition: 0.2s transform ease;

  ${({ theme }) => css`
    border: ${theme.pxToRem(6)} solid ${theme.surface.main};
  `}

  &.cctPicker-circle--checked {
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3) !important;
    transform: scale(1.1);
  }

  &.white {
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.5);
  }

  ${({ disable }) =>
    disable &&
    css`
      filter: grayscale(100%);
    `}

  &:active {
    transform: scale(1.1);
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
  }
`;

const StyledWrap = styled.div`
  .LdsSlider-rail {
    background-image: linear-gradient(90deg, #ffda70 0%, #ffffff 50%, #93ebf8 100%);
  }
  .LdsSlider-track {
    background-color: transparent;
  }
`;

const StyledLowIcon = styled.div`
  background-image: url(${cctLow});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  ${({ theme }) => css`
    width: ${theme.pxToRem(48)};
    height: ${theme.pxToRem(48)};
  `}
`;

const StyledStrongIcon = styled.div`
  background-image: url(${cctStrong});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  ${({ theme }) => css`
    width: ${theme.pxToRem(48)};
    height: ${theme.pxToRem(48)};
  `}
`;

export { StyledCircle, StyledWrap, StyledLowIcon, StyledStrongIcon };
