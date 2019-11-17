/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-20 15:48:58
 * Copyright © Leedarson. All rights reserved.
 */
import styled, { css, createGlobalStyle } from 'styled-components';
import { fade, styledFade } from '../styled-engine';

const prefixCls = 'LdsToast';

// TODO, globalStyle 最优解？
const GlobalStyle = createGlobalStyle`
  ${styledFade}
  .${prefixCls}{
    ${() => css`
      width: 100%;
      height: 100%;
      z-index: 5001;
      font-size: 17px;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      position: fixed;
      left: 0;
      top: 0;
      transform: translateZ(1px);
    `}
  }
`;

const StyledToastInfo = styled.div`
  background: rgba(17, 17, 17, 0.7);
  border-radius: 3px;
  color: #ffffff;
  text-align: center;
  font-size: 14px;
  padding: 8px 16px;
`;

const StyledToastWrap = styled.div`
  background: rgba(17, 17, 17, 0.7);
  border-radius: 3px;
  color: #ffffff;
  text-align: center;
  height: 110px;
  width: 110px;
`;

const StyledToastIcon = styled.div`
  padding: 8px 0 0;
  color: #fff;
  font-size: 55px;
`;

const StyledToastMessage = styled.div`
  margin: 0 0 16px;
  font-size: 14px;
`;

const transitionName = fade;

export { GlobalStyle, StyledToastWrap, StyledToastIcon, StyledToastMessage, StyledToastInfo, transitionName };
