/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-20 15:48:58
 * Copyright © Leedarson. All rights reserved.
 */
import styled, { css } from 'styled-components';
import { getColor } from '../styledUtils';

const StyledToastWrap = styled.div`
  position: fixed;
  z-index: 5003;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledToast = styled.div`
  text-align: center;
  color: #fff;
  border-radius: 8px;
  ${({ fill, theme }) => css`
    padding: ${theme.pxToRem(32)};
    background: ${getColor(theme, fill)};
    ${fill !== 'transparent' &&
      css`
        box-shadow: ${theme.shadow.normal};
      `}
  `}
`;

const StyledToastIcon = styled.div`
  height: 40px;
  width: 60px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
`;

const StyledToastLoading = styled.div`
  height: 60px;
  width: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
`;

const StyledToastMessage = styled.div`
  line-height: 1.5;
  max-width: 240px;
  font-size: 13px;
`;

export { StyledToastWrap, StyledToast, StyledToastIcon, StyledToastMessage, StyledToastLoading };
