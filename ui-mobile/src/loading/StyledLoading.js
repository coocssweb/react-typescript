/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-08-21 12:06:16
 * Copyright © Leedarson. All rights reserved.
 */

import styled, { keyframes } from 'styled-components';

// Loading animation keyframes
const LoadingSpan = keyframes`
  0%,
  80%,
  100% {
    opacity: 0;
    transform: scale(.8);
  }

  30%,
  50% {
    opacity: 1;
    transform: scale(1);
  }
`;

// Loading container
const StyledLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0;
  height: 100%;
`;

// Loading Item
const StyledLoadingItem = styled.span`
  display: inline-block;
  width: 8px;
  height: 8px;
  margin-right: ${props => (props.last ? `0px` : `8px`)};
  border-radius: 4px;
  background: ${props => props.color};
  animation-name: ${LoadingSpan};
  animation-duration: 0.9s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-fill-mode: both;
  animation-delay: ${props => props.delay};
`;

export { StyledLoading, StyledLoadingItem };
