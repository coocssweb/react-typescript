import styled, { css } from 'styled-components';
import { getColor } from '../styledUtils';

const StyledNavbarWrapper = styled.div`
  width: 100%;
  z-index: 5;

  ${({ theme, position }) => css`
    min-height: calc(${theme.pxToRem(88)} + 20px);
    height: calc(${theme.pxToRem(88)} + env(safe-area-inset-top, 20px));
    position: ${position};
  `}
`;

const StyledNotch = styled.div`
  min-height: 20px;
  height: env(safe-area-inset-top, 20px);
`;

const StyledNavbar = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  z-index: 1;
  text-align: center;
  transform: translate3d(0, 0, 1px);

  ${({ theme, color, fill }) => css`
    padding: 0 ${theme.pxToRem(32)};
    min-height: calc(${theme.pxToRem(88)} + 20px);
    height: calc(${theme.pxToRem(88)} + env(safe-area-inset-top, 20px));
    line-height: ${theme.space(22)};
    color: ${getColor(theme, color)};
    ${{ ...theme.subtitle1 }}
    background-color: ${fill !== 'transparent' ? getColor(theme, fill) : 'transparent'};
  `};
`;

const StyledLeft = styled.a`
  transition: 0.2s color ease;
  ${({ theme, back, color }) => css`
    color: ${back ? getColor(theme, color) : theme.neuter[500]};
    ${back &&
      css`
        :active {
          color: ${theme.primary.main};
        }
      `}
  `}
`;

export { StyledNavbarWrapper, StyledNotch, StyledNavbar, StyledLeft };
