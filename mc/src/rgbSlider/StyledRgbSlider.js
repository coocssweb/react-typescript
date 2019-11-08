import styled, { css } from 'styled-components';
import { Circle } from '../shape';

const StyledWrap = styled.div`
  text-align: center;
`;

const StyledPicker = styled.div`
  position: relative;
  ${({ theme, width }) => css`
    width: ${theme.pxToRem(width)};
    height: ${theme.pxToRem(width)};
    border-radius: ${theme.pxToRem(width / 2)};
    margin: 0px auto;
  `}

  .color-picker-handle-cover {
    position: absolute;
    top: 0;
    left: 0;
    width: 1px;
    height: 1px;
    z-index: 3;
    transform: translate3d(0px, 0px, 1px);
    transform-origin: 50% 50%;
    &:after {
      content: '';
      position: absolute;
      top: -20px;
      left: -20px;
      width: 40px;
      height: 40px;
      box-sizing: border-box;
      border-radius: 20px;
      border: 5px solid #ffffff;
    }
  }
`;

const StyledSvg = styled.svg`
  height: 0;
  display: none;
`;

const StyledCircleBox = styled.div`
  > div:first-child {
    border: 1px solid rgba(0, 0, 0, 0.16);
  }
  > div:last-child {
    margin-right: 0px;
  }
`;

// 圆圈样式
const StyledCircle = styled(Circle)`
  transition: 0.2s transform ease;
  border: 1px solid transparent;

  ${({ theme }) => css`
    border: ${theme.pxToRem(6)} solid ${theme.surface.main};
  `}

  &:active {
    transform: scale(1.5);
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
  }

  &.colorPicker-circle--checked {
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
    transform: scale(1.3);
  }
`;

export { StyledWrap, StyledPicker, StyledSvg, StyledCircleBox, StyledCircle };
