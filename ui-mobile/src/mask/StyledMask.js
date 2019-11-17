/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-21 12:06:32
 * Copyright © Leedarson. All rights reserved.
 */

import styled, { css } from 'styled-components';

// mask风格, ['transparent', 'white', 'black']
const maskType = {
  transparent: () => css`
    background: rgba(255, 255, 255, 0);
  `,
  white: theme => css`
    background: ${theme.maskWhite};
  `,
  black: theme => css`
    background: ${theme.maskBlack};
  `,
};

const maskVisible = visible => css`
  display: ${visible ? 'block' : 'none'};
`;

const StyledMask = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  ${({ theme, type, visible }) => css`
    ${maskType[type](theme)}
    ${maskVisible(visible)}
  `}
`;

export default StyledMask;
